import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import React from "react";
import styled from "styled-components";
import Logo from "../Img/logo.png";
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
const Img = styled.img`
  width: 60px;
  height: 60px;
`;

function Navbar() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  return (
    <Nav>
      <Img className="log" src={Logo} alt="logo" />
      {isConnected && (
        <Button
          id="leave-btn"
          className="btn-danger"
          onClick={() => hmsActions.leave()}
        >
          Leave Room
        </Button>
      )}
    </Nav>
  );
}

export default Navbar;
