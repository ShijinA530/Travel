import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path="/" element={<Home results={results} setResults={setResults} origin={origin} setOrigin={setOrigin} destination={destination} setDestination={setDestination} />} />
          <Route path="/searchresult" element={<SearchResult results={results} origin={origin} destination={destination} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
