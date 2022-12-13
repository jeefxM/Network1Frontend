// @ts-nocheck
import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import Web3 from "web3"

//ui
import { Button, Select, MenuItem, TextField } from "@material-ui/core";

//logic
import io from "socket.io-client";
import { DAppClient } from "@airgap/beacon-sdk";
//import _ from "underscore";
import { HexColorPicker } from "react-colorful";
import { v4 as uuidv4 } from "uuid";
import { FirebaseContext } from "./firebaseContext";
import { useSnackbar } from "notistack";

const socketURL =
  window.location.hostname === "localhost"
    ? "ws://localhost:8000"
    : "https://network1backend.up.railway.app";

const socket = io(socketURL, { transports: ["websocket"] });
const dAppClient = new DAppClient({ name: "Beacon Docs" });
const versionNames = ["0", "v1.0", "v2.0", "v3.0"];
const tempID = uuidv4();

function App() {
  const [activeAccount, setActiveAccount] = useState(null);
  const [synced, setSynced] = useState("sync");
  const [showUnsync, setShowUnsync] = useState(false);
  const [color, setColor] = useState("#FFFF00");
  const { getProfileFB, setProfileFB, getAllProfilesFB } =
    useContext(FirebaseContext);
  const [profile, setProfile] = useState({
    color: color,
    timestamp: Date.now(),
    key: tempID,
    username: "",
  });
  const [profiles, setProfiles] = useState([
    { color: "blue", timestamp: Date.now(), key: tempID, username: "user x" },
  ]);
  const [usernameInput, setUsernameInput] = React.useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [statusHistory, setStatusHistory] = useState([]);
  const [
    version,
    //setVersion
  ] = useState(1);
  const [metamaskAccount, setMetamaskAccount] = useState(false);
  const [chainId, setChainId] = useState("");
  const [signedResult, setSignedResult] = useState([{}]); 

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 25) setUsernameInput(event.target.value);
    else setUsernameInput(event.target.value.slice(0, 25));
  };
  
  let signDataComplete = false;
  
  useEffect(() => {
    async function getProfiles() {
      let result = await getAllProfilesFB();
      setProfiles(result.recentStatus);
      setStatusHistory(result.history);
    }
    getProfiles();
  }, [getAllProfilesFB]);

  useEffect(() => {
    const onProfileChange = (data) => {
      
      setStatusHistory(
        statusHistory
          .concat(data)
          .sort((a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp))
          
      );

      //recent
      profiles.find(function (prof, index) {
        if (prof.key === data.key) {
          setProfiles([
            ...profiles.slice(0, index),
            data,
            ...profiles.slice(index + 1),
          ]);
          return true;
        }
        return false;
      });
    };

    socket.on("profile", onProfileChange);

    return () => {
      socket.off("profile", onProfileChange);
    };
  }, [profiles, setProfiles, statusHistory]);

  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    // Check if MetaMask is already logged in
    if (web3.currentProvider.selectedAddress) {
      setActiveAccount(web3.currentProvider.selectedAddress);
    }
  }, []);

  
  
  const metamaskLogin = () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        setActiveAccount(accounts);
        setChainId(window.ethereum.networkVersion);
      }); // Basic Metamask SignIn to get User's public address and ChainId
  };
  

  
  
  async function updateStatus() {
    metamaskLogin();
    
    // console.log(window.Object.message)
    if (!signDataComplete) {
      enqueueSnackbar("You need to sign the message first!", {
        variant: "error"
      })
      return;
    }
  
    
    if (activeAccount && signedResult) {

      let timestamp = Date.now();
      console.log(timestamp);
      setProfile({
        ...profile,
        color: color,
        key: activeAccount.address,
        username: usernameInput,
        timestamp: timestamp,
      });
      //add socket
      socket.emit("profile", {
        ...profile,
        color: color,
        key: activeAccount.address,
        username: usernameInput,
        timestamp: timestamp,
      });
      setProfileFB({
        ...profile,
        color: color,
        key: activeAccount.address,
        username: usernameInput,
        timestamp: timestamp,
      });
      setStatusHistory(
          statusHistory
            .concat([
              {
                ...profile,
                color: color,
                key: activeAccount.address,
                username: usernameInput,
                timestamp: timestamp,
              },
            ])
            .sort((a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp))
      );
      enqueueSnackbar("Status Updated ! ", {
        variant: "success",
      });
      setUsernameInput("");
    } else{
      enqueueSnackbar("User decliend the message !", {
        variant: "error"
      })
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      updateStatus();
    }
  };

  

  const signDataV4 = async () => {
    
    const { ethereum } = window;
    const web3 = new Web3(window.ethereum);
    console.log(profile)
    const msgParams = {
      domain: {
        chainId: chainId.toString(),
        name: "Ether Mail",
        verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
        version: "1",
      },
      message: {
        contents:  profile.color,
        from: {
          name: usernameInput,
          wallets: [
            activeAccount.toString()
            
          ],
        },
        to: [
          {
            name: "OSFD Network 1.0",
            wallets: [
              "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
              "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",
              "0xB0B0b0b0b0b0B000000000000000000000000000",
            ],
          },
        ],
      },
      primaryType: "Mail",
      types: {
        EIP712Domain: [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
        ],
        Group: [
          { name: "name", type: "string" },
          { name: "members", type: "Person[]" },
        ],
        Mail: [
          { name: "from", type: "Person" },
          { name: "to", type: "Person[]" },
          { name: "contents", type: "string" },
        ],
        Person: [
          { name: "name", type: "string" },
          { name: "wallets", type: "address[]" },
        ],
      },
    };
    try {
      const from = await web3.eth.getAccounts();
      const sign = await ethereum.request({
        method: "eth_signTypedData_v4",
        params: [from[0], JSON.stringify(msgParams)],
      });
      setSignedResult(prevSignedResult => {
        return [
          ...prevSignedResult,
          {signedData: sign}
        ]
      })
      console.log(signedResult)
      signDataComplete = true;
      // puts the result in "signedResult" state
    } catch (err) {
      console.error(err);
    }
    

    updateStatus()
    
  }; // Signing message with signTypedDataV4

  return (
    <div>
      <div
        className="top-left"
        style={{
          fontSize: "1em",
          display: "flex",
          alignItems: "center",
          margin: 6,
          justifyContent: "space-between"
        }}
      >
        <b>Network </b>
        &nbsp;
        <Select
          value={version}
          label="version"
          onChange={(e) => {
            console.log(e.target.value);
            let target;
            if (e.target.value === 2) {
              target = "https://adventurepizza.github.io/Network2/";
            } else if (e.target.value === 3) {
              target = "https://adventurepizza.github.io/Network3/";
            }

            window.location.href = target;
            return null;
          }}
        >
          <MenuItem value={1}> {versionNames[1]}</MenuItem>
          <MenuItem value={2}> {versionNames[2]}</MenuItem>
          <MenuItem value={3}> {versionNames[3]}</MenuItem>
        </Select>
        &nbsp; 📠
        <Button style={{marginLeft: "auto"}} onClick={metamaskLogin}>{activeAccount ? `Signed as: ${activeAccount}`: "Connect With Metamask"}</Button>
      </div>

      <div style={{ fontSize: "0.9em", marginTop: 13, marginLeft: 13 }}>
        <b>History</b>
      </div>
      <div
        style={{
          display: "flex",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          overflowX: "scroll",
        }}
      >
        {signedResult ? statusHistory &&
          statusHistory.map((profile) => (
            <div
              key={profile.timestamp}
              style={{ textAlign: "center", margin: 6 }}
            >
              <div
                style={{
                  width: 80,
                  height: 20,
                  backgroundColor: profile.color,
                  border: "solid 4px ",
                  marginInline: 4,
                }}
              ></div>
              <Button
                title={profile.key}
                size={"small"}
                onClick={async () => {
                  navigator.clipboard.writeText(profile.key);
                  enqueueSnackbar("Address copied ! " + profile.key, {
                    variant: "success",
                  });
                }}
              >
                {profile.username}{" "}
              </Button>
            </div>
          )): ""}
      </div>

      <div style={{ fontSize: "0.9em", marginTop: 6, marginLeft: 13 }}>
        <b>Recent Status</b>
      </div>
      <div
        style={{
          display: "flex",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          overflowX: "scroll",
        }}
      >
        <div style={{ textAlign: "center", margin: 6 }}>
          <div
            style={{
              width: 80,
              height: 20,
              backgroundColor: profile.color,
              border: "solid 4px ",
              marginInline: 4,
            }}
          ></div>

          <Button
            title={profile.key}
            size={"small"}
            onClick={async () => {
              navigator.clipboard.writeText(profile.key);
              enqueueSnackbar("Address copied ! " + profile.key, {
                variant: "success",
              });
            }}
          >
            {profile.username}{" "}
          </Button>
          
        </div>

        {profiles &&
          profiles.map(
            (profile) =>
              (!activeAccount || profile.key !== activeAccount.address) && (
                <div
                  key={profile.key}
                  style={{ textAlign: "center", margin: 6 }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 20,
                      backgroundColor: profile.color,
                      border: "solid 4px ",
                      marginInline: 4,
                    }}
                  ></div>
                  <Button
                    title={profile.key}
                    size={"small"}
                    onClick={async () => {
                      navigator.clipboard.writeText(profile.key);
                      enqueueSnackbar("Address copied ! " + profile.key, {
                        variant: "success",
                      });
                    }}
                  >
                    {profile.username}{" "}
                  </Button>
                </div>
              )
          )}
      </div>

      <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <HexColorPicker color={color} onChange={setColor} />
        <br></br>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="outlined-basic"
            label="info"
            variant="outlined"
            placeholder="Status"
            size="small"
            onChange={handleChangeUsername}
            value={usernameInput}
            onKeyPress={handleKeyPress}
          />
          <Button
            size={"small"}
            title={"update status"}
            onClick={() => {signDataV4()}}
            
          >
            {" "}
            
              <u>update status</u>
           
          </Button>
          
        </div>
      </div>

      <div className="bottom-left" style={{ position: "absolute" }}>
        <Button title={"Adventure Networks"} size={"small"} onClick={() => {}}>
          {" "}
          <div style={{ textAlign: "left" }}>
            {" "}
            Adventure <br></br>Networks{" "}
          </div>{" "}
        </Button>
      </div>
      

      
    </div>
  );
}

export default App;
