import React from "react";
import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Peer from "./Peer";
import styled from "styled-components";
const Div = styled.div`
  padding: 20px 30px;
  max-width: 960px;
  margin: 0 auto;
  color: white;
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
  const [time, setTime] = React.useState();
  const [date2, setDate2] = React.useState(0);
  const peers = useHMSStore(selectPeers);
  console.log(peers);
  var min = Infinity;
  var date1 = 0;

  for (var i = 0; i < peers.length; i++) {
    if (peers[i].joinedAt.getTime() < min) {
      min = peers[i].joinedAt.getTime();
      date1 = peers[i].joinedAt;
    }
  }

  setInterval(function (date2) {
    setDate2(new Date());
  }, 1000);
  React.useEffect(() => {
    let distance = Math.abs(date1 - date2);
    const hours = Math.floor(distance / 3600000);
    distance -= hours * 3600000;
    const minutes = Math.floor(distance / 60000);
    distance -= minutes * 60000;
    const seconds = Math.floor(distance / 1000);
    const Duration = `${hours}:${("0" + minutes).slice(-2)}:${(
      "0" + seconds
    ).slice(-2)}`;
    setTime(Duration);
  }, [date2]);

  return (
    <Div>
      <h2>Conference</h2>
      <h2>{time}</h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
    </Div>
  );
};

export default Conference;
