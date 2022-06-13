import { useHMSActions } from "@100mslive/react-sdk";
import { useState } from "react";
import styled from "styled-components";
const Form = styled.form`
  width: 35vw;
  margin: auto;

  display: flex;
  flex-direction: column;
  color: white;
  background-color: rgb(38, 50, 56);
  .input-container > input {
    width: 20rem;
    height: 40px;
    margin: 20px;
    border-radius: 10px;
  }
  .btn {
    width: 8vw;
    margin: auto;
    height: 40px;
    background-color: lightblue;
    border: 1px solid white;
    margin-bottom: 40px;
  }
`;

function Join() {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <div className="input-container">
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>
      <div className="input-container">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Auth token"
        />
      </div>
      <button className="btn">Join</button>
    </Form>
  );
}

export default Join;
