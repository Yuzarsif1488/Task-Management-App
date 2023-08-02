import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <img src="/download.png" alt="" />
        <span>Login Page</span>
        <input type="text" placeholder="User ID" />
        <input type="Password" placeholder="Password" />
      </div>
    </div>
  );
};

export default Login;
