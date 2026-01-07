import {BrowserRouter as Router, Routes, Route, useLocation, Navigate} from "react-router-dom";
import React from 'react';
import { Home, Auth, Orders, Tables, Menu } from './pages';
import Header from "./components/shared/Header.jsx";
import { useSelector } from "react-redux";
import useLoadData from "./hooks/useLoadData.js";
import FullScreenLoading from "./components/shared/FullScreenLoading.jsx";


const LayOut = ()=>{
  const location = useLocation();
  const isLoading =  useLoadData()
  const hideHeaderRoutes = ["/auth"];
  const {isAuth} = useSelector(state => state.user);

  if(isLoading) return <FullScreenLoading />

  return <>
          {!hideHeaderRoutes.includes(location.pathname) && <Header />}
          <Routes>
            <Route path="/" element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>
            }/>
            <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth/>}/>
            <Route path="/orders" element={
              <ProtectedRoutes>
                <Orders/>
              </ProtectedRoutes>
            }/>
            <Route path="/tables" element={
              <ProtectedRoutes>
                <Tables />
              </ProtectedRoutes>
            }/>
            <Route path="/menu" element={
              <ProtectedRoutes>
                <Menu />
              </ProtectedRoutes>
            }/>
            {/* <Route path="*" element={<PageNotFound/>}/> */}
          </Routes>
        </>
}

function ProtectedRoutes({children}){
  const { isAuth } = useSelector(state => state.user);
  if(!isAuth){
    return <Navigate to="/auth"/>
  }

  return children;
}

function App() {
  return (
    <>
      <Router>
        <LayOut />
      </Router>
    </>
  )
}

export default App