import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <img src="/download-removebg-preview.png" alt="" />
        <span>Login Page</span>
        <input type="text" placeholder="User ID" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
