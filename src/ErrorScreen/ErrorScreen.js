import React from 'react';
import { containerStyles } from "./ErrorScreenStyles";

function ErrorScreen() {
  return (
      <div style={containerStyles()}>
        <div>
          Sorry something went wrong, please start again
        </div>
        <div>
          <b>Some common issues - </b>check connection, make sure user names while joining are unique
        </div>
      </div>
  );
}

export default ErrorScreen;
