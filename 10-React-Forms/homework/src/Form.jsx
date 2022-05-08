import React from "react";

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  return errors;
}

export default function Form() {
  /* const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState(""); */
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <form>
      <hr />
      <div>
        <label>Username:</label>
        <input
          className={errors.username && "danger"}
          type="text"
          name="username"
          placeholder="ingrese nombre"
          value={input.username}
          onChange={handleInputChange}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <hr />
      <div>
        <label>Password:</label>
        <input
          className={errors.password && "danger"}
          name="password"
          type="password"
          placeholder="password"
          value={input.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <hr />
      <input type="submit" />
    </form>
  );
}
