import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom" ;

// Navigeerimiseks / URL vahetamiseks / Routemiseks
// 1.npm install react-router-dom  --pane node_modules kausta
// sisse vajalikud failid, millega on võimalik redigeerida
// läbi cmd jõuad õigesse kausta sealt npm i react-router-dom ja enter
// peab olema projekti kaustads
// 2. import { BrowserRouter } from "react-router-dom ;" 
//--impordime sellest moodulist navigeerimise võimekuse
// 3. </BrowserRouter> - ümbritsen app faili browserrouteriga et 
// App.js failis oleks võimalik navigeerida
// 4. Lähme App.js faili ja tekitame URLi ja HTMLi vahelisi seoseid

// Module not found: Error: Cant resolve react-routes-dom
// vaadata package.json faili kas see on sela olemas 
// kui ei ole siis installida projekti kausta sisse uuesti või otsida sisestusel viga kas kusagil tühik, vale märk jne


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
