import React, { useState } from "react";
import styled from "styled-components";
import Base_URL from "../Server_URL/Common_API";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();
    let payload = {
      name,
      email,
      password,
    };
    try {
      let data = await fetch(`${Base_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let res = await data.json();
      // console.log("server respose", res);
      alert(res.msg);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      // console.log("error", error);
      alert(res.msg);
    }
  };

  return (
    <DIV>
      <h1>Welcome to Registration!</h1>
      <form className="signIn_form" action="" onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Register!"
          className="submit"
          onClick={handleSignIn}
        />
      </form>
        <Link to="/login">
          <button>Log in!</button>
        </Link>
    </DIV>
  );
};

const DIV = styled.div`
  .signIn_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  input {
    width: 80%;
    height: 30px;
    background: transparent;
    font-size: medium;
    padding: 4px 10px;
    margin: 20px 0;
  }
  .submit {
    width: 100px;
    height: 40px;
    border-radius: 20px;
  }
`;

export default SignIn;
