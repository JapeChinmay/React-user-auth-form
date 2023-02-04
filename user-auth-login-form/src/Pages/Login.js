import React, { Fragment, useState } from "react";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.message) {
      alert("login success");
    } else {
      alert("check ur credentials");
    }
    console.log(data);
  };

  const loginEmailHandler = (e) => {
    setLoginEmail(e.target.value);
    console.log(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    console.log(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={submitFormHandler}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email_"
          placeholder="email"
          value={setLoginEmail}
          onChange={loginEmailHandler}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          id="password"
          placeholder="password"
          value={setPassword}
          onChange={passwordHandler}
        />

        <button type="submit">login</button>
      </form>
    </Fragment>
  );
};

export default Login;
