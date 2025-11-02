import React, { useState, useContext } from "react";
import { ItemsContext } from "./ItemsContext";
import { useTranslation } from "react-i18next";

function RoomUnitCalculator() {
  const { t } = useTranslation();
  const [rooms, setRooms] = useState("");
  const [units, setUnits] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("premium");
  const { updateItem } = useContext(ItemsContext);

  const PlayIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );

  const calculatePrice = (r, u) => {
    if (r > 5) return t("acCalculator.too_many_rooms");

    let price = 0;
    if (r === 1 && u === 1) price = 1100;
    else if (r === 1 && u === 2) price = 1900;
    else if (r === 2 && u === 2) price = 2100;
    else if (r === 2 && u === 3) price = 2800;
    else if (r === 3 && u === 3) price = 3000;
    else if (r === 3 && u === 4) price = 3700;
    else if (r === 4 && u === 4) price = 3900;
    else if (r === 4 && u === 5) price = 4600;
    else if (r === 5 && u === 5) price = 4900;
    else if (r === 5 && u === 6) price = 5600;
    else price = t("acCalculator.unusual_setup");

    if (mode === "standard" && typeof price === "number") price = price / 2;
    return price;
  };

  const handleCalculate = () => {
    const r = parseInt(rooms);
    const u = parseInt(units);
    if (isNaN(r) || isNaN(u)) {
      setResult(t("acCalculator.invalid_numbers"));
      return;
    }
    const finalPrice = calculatePrice(r, u);
    setResult(finalPrice);
    updateItem("ac", "qty", typeof finalPrice === "number" ? finalPrice : 0);
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "16px",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(145deg, #ffffff, #f9fafb)",
        boxShadow:
          "0 6px 20px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      {/* Video Button */}
      <a
        href="https://www.instagram.com/reel/DItnGHQI9wW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "16px",
          fontWeight: 400,
          color: "#fff",
          backgroundColor: "#dc2626",
          padding: "10px 22px",
          borderRadius: "12px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(220,38,38,0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#b91c1c";
          e.currentTarget.style.boxShadow = "0 6px 14px rgba(185,28,28,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#dc2626";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(220,38,38,0.4)";
        }}
      >
        <PlayIcon />
        {t("acCalculator.watch_video")}
      </a>

      {/* Mode Selection */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        {[
          { id: "premium", color: "#2563eb" },
          { id: "standard", color: "#64748b" },
        ].map((opt) => (
          <div
            key={opt.id}
            onClick={() => setMode(opt.id)}
            style={{
              flex: 1,
              padding: "12px 10px",
              borderRadius: "12px",
              border:
                mode === opt.id
                  ? `2px solid ${opt.color}`
                  : "2px solid #e5e7eb",
              background:
                mode === opt.id
                  ? `linear-gradient(135deg, ${opt.color}22, ${opt.color}11)`
                  : "#f9fafb",
              color: mode === opt.id ? opt.color : "#334155",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow:
                mode === opt.id
                  ? `0 4px 12px ${opt.color}33`
                  : "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            {t(`acCalculator.mode_${opt.id}`)}
          </div>
        ))}
      </div>

      {/* Input Fields */}
      {[ 
        { value: rooms, setter: setRooms, label: t("acCalculator.label_rooms"), placeholder: t("acCalculator.placeholder_rooms") },
        { value: units, setter: setUnits, label: t("acCalculator.label_units"), placeholder: t("acCalculator.placeholder_units") }
      ].map((field, i) => (
        <div key={i} style={{ marginBottom: "18px", textAlign: "left" }}>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              color: "#0f172a",
              fontWeight: 500,
              fontSize: "15px",
            }}
          >
            {field.label}
          </label>
          <input
            type="number"
            value={field.value}
            onChange={(e) => field.setter(e.target.value)}
            placeholder={field.placeholder}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1.5px solid #cbd5e1",
              fontSize: "15px",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.border = "1.5px solid #2563eb";
              e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)";
            }}
            onBlur={(e) => {
              e.target.style.border = "1.5px solid #cbd5e1";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
      ))}

      {/* Button */}
      <button
        onClick={handleCalculate}
        style={{
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "12px 28px",
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 10px rgba(37,99,235,0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #1d4ed8, #1e40af)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #2563eb, #1d4ed8)";
        }}
      >
        {t("acCalculator.calculate")}
      </button>

      {/* Result */}
      <h4
        style={{
          marginTop: "25px",
          color: "#1e293b",
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        {typeof result === "number"
          ? `${t("acCalculator.total_price", { price: result.toLocaleString() })}`
          : result}
      </h4>

      <h6
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "18px",
          fontWeight: 400,
          color: "#475569",
          letterSpacing: "0.03em",
          marginTop: "6px",
        }}
      >
        {t("acCalculator.including_vat")}
      </h6>
    </div>
  );
}

export default RoomUnitCalculator;
