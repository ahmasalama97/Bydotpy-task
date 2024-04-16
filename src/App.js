import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import SignUp from "./screens/SignUp/SignUp"
import VerifyMail from "./screens/VerifyMail/VerifyMail"
import StoreSetup from "./screens/StoreSetup/StoreSetup"

function App() {
  return (
    <Router>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "rgba(255, 255, 255, 0.8)",
        }}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/VerifyMail" element={<VerifyMail />} />
          <Route path="/StoreSetup" element={<StoreSetup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
