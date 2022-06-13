import React from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";

function Navbar() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  return (
    <nav>
      <img
        className="logo"
        src="https://ashwins93.app.100ms.live/static/media/100ms_logo.3cfd8818.svg"
        alt="logo"
      />
      {isConnected && (
        <button
          id="leave-btn"
          className="btn-danger"
          onClick={() => hmsActions.leave()}
        >
          Leave Room
        </button>
      )}
    </nav>
  );
}

export default Navbar;
