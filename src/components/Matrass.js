import React, { useState } from "react";

function MattressSelector() {
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const handleSelect = (e) => {
    const selected = e.target.value;
    setSize(selected);

    if (selected === "King") setPrice(225);
    else if (selected === "Queen") setPrice(195);
    else if (selected === "Single") setPrice(145);
    else setPrice("");
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
      <h3 style={{
    fontFamily:"'Dancing Script', cursive",
    fontSize: "28px",
    fontWeight: 800,
    color: "#2c3e50",
    letterSpacing: "0.04em",
    userSelect: "none",
    marginBottom: "6px",
    display: "inline-block"
  }}>Select Mattress Size</h3>

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
        <option value="" >-- Choose Size --</option>
        <option value="King">King Size</option>
        <option value="Queen">Queen Size</option>
        <option value="Single">Single Size</option>
      </select>

      {price && (
        <h4 style={{ marginTop: "20px", color: "#1e293b" }}>
          Price: {price} AED
        </h4>
      )}
      <h6 style={{
    fontFamily:"'Dancing Script', cursive",
    fontSize: "18px",
    fontWeight: 400,
    color: "#2c3e50",
    letterSpacing: "0.04em",
    userSelect: "none",
    marginBottom: "6px",
    display: "inline-block"
  }}>
  Including VAT
</h6>
    </div>
  );
}

export default MattressSelector;
