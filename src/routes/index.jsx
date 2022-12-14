import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Proyects from '../components/proyects';
import Contact from '../components/contact';
import ProtectedRoutes from './ProtectedRoutes';
import Login from '../components/login/index';
import ErrorPage from '../components/errorPage';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/proyectos" element={<Proyects />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
