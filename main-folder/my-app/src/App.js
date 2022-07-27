import React from "react"
import Home from "./components/Home.js"
import Dashboard from "./components/Dashboard.js"
import UploadForm from "./components/UploadForm.js"
import "./style.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <nav className="navbar">
          <ul>

            <Link to="/"  style={{ color: "white" }}>
              <li>Home</li>
            </Link>

            <Link to="uploadform"  style={{ color: "white" }}>
              <li>Upload</li>
            </Link>

            <Link to="dashboard"  style={{ color: "white" }}>
              <li>Dashboard</li>
            </Link>

          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="uploadform" element={<UploadForm />} />

        </Routes>
      </Router>
    </div>
  )
};

export default App;