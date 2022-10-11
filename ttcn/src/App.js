import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Register/Login";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Register from "./Component/Register/Register";
import Introduce from "./Component/Introduce/Introduce";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/gioithieu" element={<Introduce />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
