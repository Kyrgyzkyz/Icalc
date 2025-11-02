import React from 'react';
import "./i18n"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Curtains from './components/Curtain';
import Carpet from './components/Carpet';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from './components/MenuBar';
import Sofa from './components/Sofa';
import AC from './components/AC';
import Matrass from './components/Matrass';
import BillForm from './components/BillForm';
import { ItemsProvider } from './components/ItemsContext'; // ✅ Import the provider


function App() {
  const { i18n } = useTranslation();

  // Automatically switch text direction for Arabic
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <ItemsProvider>  {/* ✅ Wrap inside provider */}
      <Router>
        <MenuBar />
        {/* Language Switcher */}
        <div className="container py-4 mt-5 pt-5 text-center">
          <Routes>
            <Route path="/" element={<h2>Welcome</h2>} />
            <Route path="/carpet" element={<Carpet />} />
            <Route path="/curtain" element={<Curtains />} />
            <Route path="/sofa" element={<Sofa />} />
            <Route path="/ac" element={<AC />} />
            <Route path="/mattress" element={<Matrass />} />
          </Routes>
        </div>
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  }}
>
  {[
    { code: "en", flag: "🇬🇧", label: "English", color: "#2563eb" },
    { code: "ar", flag: "🇸🇦", label: "العربية", color: "#059669" },
    { code: "ru", flag: "🇷🇺", label: "Русский", color: "#e11d48" },
  ].map((lang) => (
    <button
      key={lang.code}
      onClick={() => i18n.changeLanguage(lang.code)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: lang.color,
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        padding: "8px 16px",
        fontSize: "15px",
        fontWeight: 500,
        cursor: "pointer",
        boxShadow: `0 3px 8px ${lang.color}55`,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 5px 12px ${lang.color}66`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 3px 8px ${lang.color}55`;
      }}
    >
      <span style={{ fontSize: "18px" }}>{lang.flag}</span>
      <span>{lang.label}</span>
    </button>
  ))}
</div>

        <BillForm />
      </Router>
    </ItemsProvider>
  );
}

export default App;
