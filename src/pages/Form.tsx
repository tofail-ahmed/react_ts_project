import { useState } from "react";

const Form = () => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
  return (
    <form className="bg-slate-600 p-4 mx-auto flex flex-col justify-center gap-4 my-4 rounded-xl">
      <div className="">
        <label>
          Username:
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
