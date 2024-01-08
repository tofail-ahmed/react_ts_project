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
//   const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//       setUser({ ...user, name: e.target.value })
//   }
//   const handleEmailChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//       setUser({ ...user, email: e.target.value })
//   }
//   const handlePasswordChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//       setUser({ ...user, password: e.target.value })
//   }
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const inputName=e.target.name;
     const inputValue= e.target.value;
     console.log([inputName])

      setUser({ ...user, [inputName]:inputValue })
}
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
                onChange={handleChange}
                type="text"
                name="name"
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                onChange={handleChange}
                type="email"
                name="email"
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                 onChange={handleChange}
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
