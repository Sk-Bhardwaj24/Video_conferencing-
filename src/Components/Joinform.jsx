import { useHMSActions } from "@100mslive/react-sdk";
import { useState } from "react";
import styled from "styled-components";
const Form = styled.form`
  max-width: 450px;
  margin: 30px auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 20px;
  .input-container {
    margin-bottom: 20px;
  }
  .input-container > input {
    display: block;
    width: 100%;
    border-radius: 8px;
    border: 2px solid transparent;
    height: 34px;
    padding: 5px;
    background: #37474f;
    color: inherit;
    font-family: inherit;
  }
  .btn {
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 6px 14px;
    background-color: #1565c0;
    color: white;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
  }
  input::placeholder {
    color: white;
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
