import React from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ItemsProvider } from './components/ItemsContext';
import i18n from "i18next";
document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";

i18n.on("languageChanged", (lang) => {
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ItemsProvider>
    <App />
  </ItemsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
