import "./App.css";
import React from "react";
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import Navbar from "./Components/Navbar";
import Conference from "./Components/Conference";
import Footer from "./Components/Footer";
import Joinform from "./Components/Joinform";

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
      <Navbar />
      {isConnected ? (
        <>
          <Conference />
          <Footer />
        </>
      ) : (
        <Joinform />
      )}
    </div>
  );
}
export default App;
