// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/auth/login", {
//         username,
//         password,
//       });
//       localStorage.setItem("token", response.data.token);
//       navigate("/"); // Redirect to homepage
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p>{error}</p>}
//       <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;

// import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css"

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/"); // Redirect to homepage
    } catch (err) {
      setError("Invalid credentials");
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-content">
        {/* <Link href="/"  */}
          
          <div className="login-logo">
          <Shield className="login-logo-icon" />
          <span>DocShield</span>
          </div>
        {/* </Link> */}
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Welcome back</h1>
            <p className="login-description">Enter your credentials to access your account</p>
          </div>
          <form className="login-form">
            <div className="form-group">
              <Label htmlFor="user-name">Username</Label>
              <Input id="user-name" type="text" placeholder="username" required onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
              <div className="password-header">
                <Label htmlFor="password">Password</Label>
                {/* <Link href="/forgot-password" className="forgot-password"> */}
                  Forgot password?
                {/* </Link> */}
              </div>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="remember-me">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="remember-label">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="login-button" onClick={handleLogin}>
              Sign In
            </Button>
          </form>
          <div className="login-footer">
            Don&apos;t have an account?{" "}
            {/* <Link href="/signup" className="signup-link"> */}
              Sign up
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

