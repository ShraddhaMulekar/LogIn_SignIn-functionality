import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base_URL from "../Server_URL/Common_API";
import styled from "styled-components";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (event) => {
    event.preventDefault();

    let payload = {
      email,
      password,
    };

    try {
      let res = await fetch(`${Base_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = await res.json();
    //   console.log("data login", data);
      alert (data.msg)
      setEmail("")
      setPassword("")

    } catch (error) {
    //   console.log("error in log in", error);
      alert (data.error)
    }
  };

  return (
    <DIV>
      <h1>Welcome to Log in!</h1>
      <form className="signIn_form" onSubmit={handleLogIn}>
        <input
          type="text"
          placeholder="email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          className="submit"
          value="Log in!"
          onClick={handleLogIn}
        />
      </form>
        <Link to="/">
          <button>Register Now!</button>
        </Link>
    </DIV>
  );
};

export default LogIn;

const DIV = styled.div`
    .signIn_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 50%;
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
`