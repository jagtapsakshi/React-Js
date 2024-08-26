import React from "react";
import FunctionComp from "./Components/FunctionComp";
import {ClassComp, ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click";
import HoverCount from "./Components/HoverCount";
import ParentComp from "./Components/ParentComp";

function App() {
  return <>
  
  <FunctionComp />
  <ClassComp />
  <ClassComp1 />
  <Click />
  <HoverCount />
  <ParentComp />
  </>
}

export default App;
