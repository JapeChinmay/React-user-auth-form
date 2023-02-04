import React, { Fragment, useState } from "react";

const Register = () => {
  const [Firstname, SetFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    SetFirstname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:1337/api/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Firstname,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <Fragment>
      <div className="App">
        <h1>register</h1>

        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Firstname</label>
          <input
            value={Firstname}
            type="text"
            id="username"
            name="username"
            placeholder="firstname"
            onChange={userNameHandler}
          />
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={emailHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="pass_word"
            name="email"
            placeholder="password"
            value={password}
            onChange={passwordHandler}
          />

          <button type="submit">submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
