import "./Login.css";

function Login({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  setIsLogin
}) {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>🌐 Mini Social App</h2>
        <p className="subtitle">Welcome back 👋</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        {/* 👇 THIS IS THE IMPORTANT PART */}
        <p className="footer-text">
          Don’t have an account?{" "}
          <span onClick={() => setIsLogin(false)}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
