import React from "react";
import { CRMProvider } from "./context/CRMContext";
import { GoogleLogin } from "@react-oauth/google";


import Dashboard from "./pages/Dashboard";
import Pipeline from "./pages/Pipeline";

export default function App() {

  return (
    <CRMProvider>
      <div style={{ padding: "20px" }}>

        <Dashboard />

        <hr />

        <Pipeline />

      </div>
    </CRMProvider>
  );

}
