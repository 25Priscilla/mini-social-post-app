import "./Login.css";

function Signup({ email, password, setEmail, setPassword, handleSignup, setIsLogin }) {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>🌐 Mini Social App</h2>
        <p className="subtitle">Create your account ✨</p>

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

        <button onClick={handleSignup}>Sign Up</button>

        <p className="footer-text">
          Already have an account?{" "}
          <span onClick={() => setIsLogin(true)}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
