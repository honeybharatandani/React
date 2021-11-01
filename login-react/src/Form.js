import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = e => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    // for new users
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <div className="container">
      <form action="" onSubmit={submitForm}>
        <div class="col-lg-4 mt-5">
          <label htmlFor="email">E-mail</label>
          <input
            class="form-control"
            controlId="email"
            size="lg"
            type="email"
            required
            name="email"
            value={email}
            autoFocus
            onChange={e => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            required
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
            minlength="8"
          ></input>
          <button class="btn btn-outline-dark mt-2" type="submit">
            <span>LogIn</span>
          </button>
        </div>
        <div class="col-md-3">
          Dont have a account ? &nbsp;
          <button class="btn btn-outline-info">SignUp</button>
        </div>
        <h1>Login Form using React</h1>
      </form>
      <div>
        {allEntry.map(element => {
          return (
            <div>
              <p>
                <span>Email --</span>
                {element.email}
              </p>
              <p>
                <span>Password --</span>
                {element.password}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
