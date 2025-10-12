import React, { useState } from "react";

function RoomUnitCalculator() {
  const [rooms, setRooms] = useState("");
  const [units, setUnits] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("premium"); // "premium" or "standard"

  const calculatePrice = (r, u) => {
    // if room > 5
    if (r > 5) return "For more than 5 rooms, please consult with an operator.";

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
    else price = "Unusual room/unit setup — please consult with the operator.";

    // For standard calculator, price = half
    if (mode === "standard" && typeof price === "number") {
      price = price / 2;
    }

    return price;
  };

  const handleCalculate = () => {
    const r = parseInt(rooms);
    const u = parseInt(units);
    if (isNaN(r) || isNaN(u)) {
      setResult("Please enter valid numbers.");
      return;
    }
    const finalPrice = calculatePrice(r, u);
    setResult(finalPrice);
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        background: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h2 style={{
    fontFamily:"'Dancing Script', cursive",
    fontSize: "25px",
    fontWeight: 800,
    color: "#2c3e50",
    letterSpacing: "0.04em",
    userSelect: "none",
    marginBottom: "6px",
    display: "inline-block"
  }}>AC Calculator</h2>

      {/* Mode Switch */}
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>
          <input
            type="radio"
            value="premium"
            checked={mode === "premium"}
            onChange={(e) => setMode(e.target.value)}
          />
          Deep 
        </label>
        <label>
          <input
            type="radio"
            value="standard"
            checked={mode === "standard"}
            onChange={(e) => setMode(e.target.value)}
          />
          Standard 
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Number of Rooms
        </label>
        <input
          type="number"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          placeholder="e.g. 3"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Number of Units(thermostat)
        </label>
        <input
          type="number"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="e.g. 4"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />
      </div>

      <button
        onClick={handleCalculate}
        style={{
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Calculate
      </button>

      <h4 style={{ marginTop: "20px", color: "#1e293b" }}>
        {typeof result === "number"
          ? `Total Price: ${result.toLocaleString()}`
          : result}
      </h4>
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

export default RoomUnitCalculator;
