import React from "react";
import styled from "styled-components";
const SignIn = () => {
    
  return (
    <DIV>
      <h1>Welcome to Registration!</h1>
      <form className="signIn_form" action="">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" className="submit" />
      </form>
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
    /* border: solid; */
  }
  input{
    width: 50%;
    height: 30px;
    background: transparent;
    font-size: medium;
    padding: 4px 10px;
    margin: 20px 0;
  }
  .submit{
    width: 100px;
    height: 40px;
    border-radius: 20px;
  }
`;

export default SignIn;
