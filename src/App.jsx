import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import { Home, Auth, Orders, Tables, Menu } from './pages';
import Header from "./components/shared/Header.jsx";
import { DiVim } from "react-icons/di";
import PageNotFound from "./components/lotties/PageNotFound.jsx";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/tables" element={<Tables />}/>
          <Route path="/menu" element={<Menu />}/>
          {/* <Route path="*" element={<PageNotFound/>}/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App