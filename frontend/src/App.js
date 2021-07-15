import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Index from "./pages/index"

function App() {
  return (
    <Router>
      <Route path="/" component={Index} exact />
    </Router>
  )
}

export default App
