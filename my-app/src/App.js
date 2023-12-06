import "./App.css";
import "./pages/principal/Home.css";
import "./shared/header/Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/principal/Home";
import { Header } from "./shared/header/Header";
import React from "react";


function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/inicio" element={<Home />} />
           
          </Routes>
          
        </BrowserRouter>
      </div>
      
    
  );
}

export default App;
