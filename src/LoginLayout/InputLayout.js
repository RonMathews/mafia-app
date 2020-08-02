import React, { useState } from 'react';
import { TextField, Button } from '@fluentui/react';
import { containerStyles, getNameTextStyles, getCodeTextStyles, getButtonStyles } from "./InputLayoutStyles";

function InputLayout(props) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  let timeout = 0;

  function handleCreate () {
    props.onGameCreate(name);
  }

  function handleJoin () {
    props.onGameFetch(name, code);
  }

  function handleKeyUp(data) {
    const val  = data.target.value
    if(timeout) clearTimeout(timeout); 
    timeout = setTimeout(() => setCode(val), 500)
  }

  console.log("timeout" + timeout);
  return (
      <div style={containerStyles()}>
        <TextField label="Name" styles={getNameTextStyles()} placeholder="Enter text here" onBlur={(data) => setName(data.target.value)} />
        <TextField label="Game Code" styles={getCodeTextStyles()} placeholder="Enter code here" onKeyUp={(data) => {handleKeyUp(data)}}/>
        <Button disabled={name === ""} text={code ? "Join Room" : "Create Room"} styles={getButtonStyles()}  onClick={code ? handleJoin : handleCreate}/>
      </div>
  );
}

export default InputLayout;
