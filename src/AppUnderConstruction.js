import React from 'react';
import { Spinner, SpinnerSize } from '@fluentui/react';
import { Image } from '@fluentui/react';
import constructionLogo from "./app-under-construction.jpg"

function AppUnderConstruction() {
  return (
  <div style={{
    minHeight: "100vh", 
    minWidth: "100vw", 
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
    padding: "150px 0px 0px 0px"
  }}>
      <Image width={800} src={constructionLogo} />
      <div>
        App is under Construction
      </div>
      <div>
        Please contact developers for Beta version
      </div>
  </div>
  );
}

export default AppUnderConstruction;
