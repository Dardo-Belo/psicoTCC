import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./components/Navbar/Navbar.jsx";
import ContactForm from "./components/Contacto/Contacto.js";
import Calesita from "./components/Intro/Intro.jsx";
import Ansiedad from "./components/Tratamientos/ansiedad.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Quiénes from "./components/quiénes_somos/quiénes_somos";
import LibrosTcc from "./components/productos/productos/productos";


function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes><Route path= '/' element={<Barra/>}/></Routes>
        <Routes><Route index element={<Calesita/>}/></Routes>
        <Routes><Route path='/' element={<Footer/>}/></Routes>
        <Routes><Route path='/Quiénes somos' element={<Barra/>}/></Routes>
        <Routes><Route path='/Quiénes somos' element={<Quiénes/>}/></Routes>
        <Routes><Route path='/Quiénes somos' element={<Footer/>}/></Routes>
        <Routes><Route path='/contáctanos' element={<Barra/>}/></Routes>
        <Routes><Route path='/contáctanos' element={<ContactForm/>}/></Routes>
        <Routes><Route exact path='/Trastornos_de_Ansiedad' element={<Ansiedad/>}/></Routes>
        <Routes><Route path= '/LibrosTCC' element={<Barra/>}/></Routes>
        <Routes><Route path='/LibrosTCC' element={<LibrosTcc/>}/></Routes>

          
      </BrowserRouter>
    </div>
  );
}

export default App;
