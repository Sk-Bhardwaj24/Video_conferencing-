import { useVideo } from "@100mslive/react-sdk";
import styled from "styled-components";
const Div = styled.div`
  .peer-video {
    height: 250px;
    width: 250px;
    border-radius: 40%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .peer-name {
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
  console.log(peer.joinedAt);
  return (
    <Div>
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
