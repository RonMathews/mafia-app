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

  function handleKeyUp(data, fun) {
    const val  = data.target.value
    if(timeout) clearTimeout(timeout); 
    timeout = setTimeout(fun(val), 500)
  }
 
  return (
      <div style={containerStyles()}>
        <TextField label="User Name" styles={getNameTextStyles()} placeholder="Your unique username" onKeyUp={(data) => {handleKeyUp(data, (val) => setName(val))}} />
        <TextField label="Game Code" styles={getCodeTextStyles()} placeholder="Join existing room (Optional)" onKeyUp={(data) => {handleKeyUp(data, (val) => setCode(val))}}/>
        <Button disabled={name === ""} text={code ? "Join Room" : "Create Room"} styles={getButtonStyles()}  onClick={code ? handleJoin : handleCreate}/>
      </div>
  );
}

export default InputLayout;
