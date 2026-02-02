import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import CreatePost from "./components/CreatePost";
import { API } from "./api";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);

  // Fetch posts after login
  useEffect(() => {
    if (isAuthenticated) {
      API.get("/posts")
        .then((res) => setPosts(res.data))
        .catch((err) => console.error(err));
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    // your login logic
    setIsAuthenticated(true);
  };

  const handleSignup = async () => {
    alert("Signup successful! Please login.");
    setIsLogin(true);
  };

  if (!isAuthenticated) {
    return isLogin ? (
      <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        setIsLogin={setIsLogin}
      />
    ) : (
      <Signup
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignup={handleSignup}
        setIsLogin={setIsLogin}
      />
    );
  }

  return (
    <>
      <CreatePost refresh={setPosts} />
      <Feed posts={posts} />
    </>
  );
}

export default App;
