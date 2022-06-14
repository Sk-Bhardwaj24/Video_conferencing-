import { useVideo } from "@100mslive/react-sdk";
import styled from "styled-components";
const Div = styled.div`
  .peer-video {
    height: 250px;
    width: 250px;
    border-radius: 10%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .peer-name {
    /* background-color: white; */

    color: white;
    font-size: 14px;
    font-weight: bold;
    box-sizing: border-box;
    padding: 20px;
    font-size: 14px;
    text-align: center;
  }

  .local.peer-video {
    transform: scaleX(-1);
  }
`;

function Peer({ peer }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });
  // console.log(peer.joinedAt.getTime());
  // let date1 = peer.joinedAt;
  // let date2 = new Date();
  // let distance = Math.abs(date1 - date2);
  // const hours = Math.floor(distance / 3600000);
  // distance -= hours * 3600000;
  // const minutes = Math.floor(distance / 60000);
  // distance -= minutes * 60000;
  // const seconds = Math.floor(distance / 1000);
  // const Duration = `${hours}:${("0" + minutes).slice(-2)}:${(
  //   "0" + seconds
  // ).slice(-2)}`;
  return (
    <Div>
      {/* <h2>{Duration}</h2> */}
      <div>
        <video
          ref={videoRef}
          className={`peer-video ${peer.isLocal ? "local" : ""}`}
          autoPlay
          muted
          playsInline
        />
        <div className="peer-name">
          {peer.name} {peer.isLocal ? "(You)" : ""}
        </div>
      </div>
    </Div>
  );
}

export default Peer;
