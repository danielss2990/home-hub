import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import LightControl from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: LightControl,
  
});

export const { bootstrap, mount, unmount } = lifecycles;
