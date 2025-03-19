// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import "docsheildF/src/Pages/Signup.css" // Import CSS file
// import "../CSS/Signup.css";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     if (!name || !email || !password || !confirmPassword) {
//       setError("All fields are required.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8080/auth/signup", {
//         name,
//         email,
//         password,
//       });

//       alert("Signup successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       setError("Signup failed. Try again.");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       {error && <p className="error">{error}</p>}
//       <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
//       <button onClick={handleSignup}>Signup</button>
//       <p>
//         Already have an account? <a href="/login">Login</a>
//       </p>
//     </div>
//   );
// }

// export default Signup;

// import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/Signup.css"

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        name,
        email,
        password,
      });

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError("Signup failed. Try again.");
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-content">
          <div className="signup-logo">
          <Shield className="signup-logo-icon"  href="/"/>
          <span >DocShield</span>
          </div>
        <div className="signup-card">
          <div className="signup-header">
            <h1 className="signup-title">Create an account</h1>
            <p className="signup-description">Enter your information to get started with DocShield</p>
          </div>
          <form className="signup-form">
            <div className="name-fields">
              {/* <div className="form-group">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" type="text" required />
              </div>
              <div className="form-group">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" type="text" required />
              </div> */}
              <div className="form-group">
              <Label htmlFor="full-name">Full name</Label>
              <Input id="full-name" type="text" required onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            
            <Button type="submit" className="signup-button" onClick={handleSignup}>
              Create Account
            </Button>
          </form>
          <div className="signup-footer">
            Already have an account?{" "}
            {/* <Link href="/login" className="login-link"> */}
              Sign in
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <div className="terms-checkbox">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="terms-label">
                I agree to the{" "}
                <Link href="/terms" className="terms-link">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="terms-link">
                  Privacy Policy
                </Link>
              </Label>
            </div> */}

