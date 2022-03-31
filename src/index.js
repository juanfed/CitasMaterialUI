import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AgendarCita from './pages/AgendarCita';
import MyCitas from './pages/MyCitas';
import Register from './pages/Register';
import Usuario from './pages/Usuario';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
      <Routes>
        <Route path='/Home' element={<App />}>
          <Route path='/Home/User' element={<Usuario />} />
          <Route path='/Home/AgendarCita' element={<AgendarCita />} />
          <Route path='/Home/MisCitas' element={<MyCitas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);