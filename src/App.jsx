import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Housing from './components/Housing';
import NotFound from './pages/NotFound';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/housing/:id" element={<Housing/>}/>
      <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;