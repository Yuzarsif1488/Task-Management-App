import "./Login.scss";
import { useState } from "react";
const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [newEntry, setNewEntry] = useState([]);

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const onEmailChange = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitdata = (e) => {
    e.preventDefault();
    const newData = { id: id, password: password };
    setNewEntry([...newEntry, newData]);

    console.log(newEntry);
    setId("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="form">
        <form action="" onSubmit={onSubmitdata} className="form-input">
          <img src="/download-removebg-preview.png" alt="" />
          <span>Login Page</span>
          <input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={onIdChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onEmailChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
