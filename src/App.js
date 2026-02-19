import { Routes, Route } from "react-router-dom";

import "./display/style/style.scss";

// components
// layout
import Header from "./components/layout/Header";
// routes
// public
import Home from "./components/routes/public/Home";
// auth
import SignUp from "./components/routes/auth/SignUp";
import SignIn from "./components/routes/auth/SignIn";
// private
import Dashboard from "./components/routes/private/Dashboard";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        {/* auth routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* private routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
