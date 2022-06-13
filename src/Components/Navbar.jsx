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
