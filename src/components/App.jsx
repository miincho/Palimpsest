// import React from 'react'; //commented it out cause there was an error
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import C001 from '../sauce/C001.jsx';
import M001 from '../sauce/M001.jsx';
import C002 from '../sauce/C002.jsx';
import M002 from '../sauce/M002.jsx';
import C003 from '../sauce/C003.jsx';
import M003 from '../sauce/M003.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div id="content">
          <Routes>
            <Route path="/" element={<Links />} />
            <Route path="/sauce/C001" element={<C001 />} />
            <Route path="/sauce/M001" element={<M001 />} />
            <Route path="/sauce/C002" element={<C002 />} />
            <Route path="/sauce/M002" element={<M002 />} />
            <Route path="/sauce/C003" element={<C003 />} />
            <Route path="/sauce/M003" element={<M003 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Links() {
  return (
    <nav>
      <ul>
        <li><Link to="/sauce/C001">C001.html</Link></li>
        <li><Link to="/sauce/M001">M001.html</Link></li>
        <li><Link to="/sauce/C002">C002.html</Link></li>
        <li><Link to="/sauce/M002">M002.html</Link></li>
        <li><Link to="/sauce/C003">C003.html</Link></li>
        <li><Link to="/sauce/M003">M003.html</Link></li>
      </ul>
    </nav>
  );
}

export default App;
