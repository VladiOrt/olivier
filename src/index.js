import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { 
  BrowserRouter ,
  Route,
  Routes
} from 'react-router-dom';



import Home from './components/home';
import About from './components/about';
import Vip from './components/vip';
import Gallery from './components/gallery';
import Contact from './components/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Contact />} />
      <Route path='/:' element={<Contact />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Vip' element={<Vip />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
