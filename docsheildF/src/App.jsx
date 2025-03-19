import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Main";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
