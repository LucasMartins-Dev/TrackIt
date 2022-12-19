
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "./components/login.js";
import Cadastro from "./components/cadastro.js";
import Habitos from "./components/habitos.js";
import Hoje from "./components/hoje.js";
import Historico from "./components/historico.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/habitos" element={<Habitos />}></Route>
        <Route path="/hoje" element={<Hoje />}></Route>
        <Route path="/historico" element={<Historico />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
