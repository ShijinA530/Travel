import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import SearchResult from "./pages/SearchResult"


function App() {
  return (
    <Router>
      <div className=''>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchresult" element={<SearchResult/>}/>
      </Routes>
      </div>
    </Router>
    
  )
}

export default App
