import React from 'react';
import './App.css';
import { Navbar } from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import {Login} from "./pages/Login";
import {User} from "./pages/User";
import {Userdetails} from "./pages/UserDetails";
import {Notfound} from "./pages/Notfound";
function App() {
  return (
    <div className="App">
    
    <Navbar/>

     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/user" element={<User/>}></Route>
      <Route path="/user/:id" element={<Userdetails/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
