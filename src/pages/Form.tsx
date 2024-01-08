import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "user",
    email: "user@example.com",
    password: "password",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div className="bg-slate-600 p-4 mx-auto flex flex-col justify-center gap-4 my-4 rounded-xl">
          <h2>User Details:</h2>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Password: {user.password}</h3>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-slate-600 p-4 mx-auto flex flex-col justify-center gap-4 my-4 rounded-xl"
        >
          <div className="">
            <label>
              Username:
              <input
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                name="name"
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                name="email"
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                 onChange={(e) => setUser({...user,password: e.target.value})}
                type="password"
                name="password"
              />
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Form;
