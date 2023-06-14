import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Welcome from './components/welcome';

function App() {
  return (
    <>
    {/* Header */}
    <div>
      <h1>Bookeeper App</h1>
    </div>

    {/* Router Configuration */}
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Register Route */}
        <Route path="/register" element={<Register />} />

        {/* Welcome Route */}
        <Route path="/welcome" element={<Welcome />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
