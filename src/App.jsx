import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BlogDetails from "./components/BlogDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import NotFound404 from "./components/NotFound404";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
