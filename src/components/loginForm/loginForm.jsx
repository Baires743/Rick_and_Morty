import { useState } from "react";
import style from "./loginForm.module.css";

function LoginForm({ login }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    login(user);
  }

  return (
    <div className={style.formContainer}>
      <div className={style.formTitle}>
        <h1>Fill Your Credentials</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={style.credentials}>
          <label>Email</label>
          <input
            type="text"
            placeholder="ejemplo@mail.com"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className={style.credentials}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={style.submitBtn}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
