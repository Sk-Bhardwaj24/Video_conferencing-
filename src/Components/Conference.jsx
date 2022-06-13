import React from "react";
import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Peer from "./Peer";
import styled from "styled-components";
const Div = styled.div`
  padding: 20px 30px;
  max-width: 960px;
  margin: 0 auto;
  .conference-section h2 {
    text-align: center;
    font-size: 32px;
    padding-bottom: 10px;
    border-bottom: 1px solid #546e7a;
  }

  .peers-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
    place-items: center;
    grid-gap: 10px;
  }
`;
const Conference = () => {
  const peers = useHMSStore(selectPeers);

  return (
    <Div>
      <h2>Conference</h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
    </Div>
  );
};

export default Conference;
