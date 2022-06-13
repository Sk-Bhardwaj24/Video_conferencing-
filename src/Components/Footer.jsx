import { useAVToggle } from "@100mslive/react-sdk";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px;
  justify-content: center;
  z-index: 10;

  .control-bar > *:not(:first-child) {
    margin-left: 8px;
  }

  .btn-control {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 2px solid #37474f;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    text-align: center;
    background-color: #607d8b;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    color: white;
    cursor: pointer;
  }

  .hide {
    display: none;
  }
`;
function Footer() {
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } =
    useAVToggle();
  return (
    <Div>
      <button className="btn-control" onClick={toggleAudio}>
        {isLocalAudioEnabled ? "Mute" : "Unmute"}
      </button>
      <button className="btn-control" onClick={toggleVideo}>
        {isLocalVideoEnabled ? "Hide" : "Unhide"}
      </button>
    </Div>
  );
}

export default Footer;
