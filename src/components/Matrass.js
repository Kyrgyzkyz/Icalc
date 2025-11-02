import React, { useState, useContext } from "react";
import { ItemsContext } from "./ItemsContext"; // adjust path as needed
import { useTranslation } from "react-i18next";


function MattressSelector() {
  const { t } = useTranslation();
  const { updateItem } = useContext(ItemsContext);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const PlayIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );

  const handleSelect = (e) => {
    const selected = e.target.value;
    setSize(selected);

    let newPrice = "";
    if (selected === "King") newPrice = 225;
    else if (selected === "Queen") newPrice = 195;
    else if (selected === "Single") newPrice = 145;
    else newPrice = "";

    setPrice(newPrice);

    // Update the context state for mattress
    updateItem("mattress", "qty", newPrice || 0);
    updateItem("mattress", "size", selected || "");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <a
  href="https://www.instagram.com/p/DKHyRnCIIs2/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    fontFamily: "'Dancing Script', cursive",
    fontSize: "15px",
    fontWeight: 400,
    color: "white",
    letterSpacing: "0.04em",
    userSelect: "none",
    marginBottom: "6px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    backgroundColor: "#e02424", // nice red
    padding: "10px 22px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(224, 36, 36, 0.4)",
    cursor: "pointer",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#b71c1c";
    e.currentTarget.style.boxShadow = "0 6px 12px rgba(183, 28, 28, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#e02424";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(224, 36, 36, 0.4)";
  }}
  aria-label="Watch the process video"
>
  <PlayIcon />
  {t("mattress.watchVideo")}
</a>

            <br/>

      <select
        onChange={handleSelect}
        value={size}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        <option value="">{t("mattress.chooseSize")}</option>
        <option value="King">{t("mattress.king")}</option>
        <option value="Queen">{t("mattress.queen")}</option>
        <option value="Single">{t("mattress.single")}</option>
      </select>

      {price && (
        <h4 style={{ marginTop: "20px", color: "#1e293b" }}>
        {t("mattress.price")}: {price} AED
        </h4>
      )}
      <h6
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "18px",
          fontWeight: 400,
          color: "#2c3e50",
          letterSpacing: "0.04em",
          userSelect: "none",
          marginBottom: "6px",
          display: "inline-block",
        }}
      >
        {t("mattress.includingVAT")}
      </h6>
    </div>
  );
}

export default MattressSelector;
