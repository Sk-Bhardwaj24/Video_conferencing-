import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import React from "react";
import styled from "styled-components";
const Nav = styled.nav`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 6px 14px;
  background-color: #f44336;
  color: white;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
`;

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
        <Button
          id="leave-btn"
          className="btn-danger"
          onClick={() => hmsActions.leave()}
        >
          Leave Room
        </Button>
      )}
    </nav>
  );
}

export default Navbar;
