import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QuestionApp from './Pages/Questions/QuestionApp'
import LoginApp from './Pages/Login/LoginApp'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path = "/login" element={<LoginApp />}/>
        <Route path = "/Questions" element = {<QuestionApp/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
