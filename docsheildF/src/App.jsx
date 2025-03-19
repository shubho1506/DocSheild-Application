import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing/Main";
import Login from "./Login/Login";
import Signup from "./Signup/SignUp";
import Home from "./home/page";
import Submission from "./Submission/page";
import Working from "./Working/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/working" element={<Working />} />
      </Routes>
    </Router>
  );
}

export default App;
