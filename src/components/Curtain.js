import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemsContext } from "./ItemsContext";
import { useTranslation } from "react-i18next";

const Curtains = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [selectedType, setSelectedType] = useState("factory"); // default
  const [result, setResult] = useState("");
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

  const { updateItem } = useContext(ItemsContext);

  const handleCalculate = () => {
    try {
      const baseValue = eval(input); // ⚠️ for demo purposes only
      if (isNaN(baseValue)) return;

      // Prices per type
      const prices = {
        onSite: baseValue * 2 * 15 * 1.05,
        factory: baseValue * 2 * 17 * 1.05,
        sheers: baseValue * 2 * 13 * 1.05,
      };

      const finalPrice = prices[selectedType].toFixed(2);
      setResult(finalPrice);

      // ✅ Only update the selected curtain type in shared context

updateItem("curtains", selectedType, Number(finalPrice));
updateItem("curtains", "selectedType", selectedType);


    } catch {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
    updateItem("curtains", "price", 0);
  };

  const buttons = ["*", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "C", "="];

  const handleClick = (btn) => {
    if (btn === "=") handleCalculate();
    else if (btn === "C") handleClear();
    else setInput((prev) => prev + btn);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
            <a
  href="https://www.instagram.com/reel/C4aVY3wp0aP/"
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
  {t("curtains.watchVideo")}
</a>
<br/>
              {/* TYPE SELECT */}
              <div className="mb-3 text-start">
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#374151",
                  }}
                >
                  {t("curtains.chooseType")}
                </label>
                <select
                  className="form-select mt-1"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="factory">{t("curtains.factory")}</option>
                  <option value="onSite">{t("curtains.onSite")}</option>
                  <option value="sheers">{t("curtains.sheers")}</option>
                </select>
              </div>

              {/* INPUT */}
              <label
                htmlFor="amount"
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#2c3e50",
                }}
              >
                {t("curtains.specifySize")}
              </label>
              <input
                type="text"
                className="form-control mb-2 text-end"
                value={input}
                readOnly
              />

              <input
                type="text"
                className="form-control mb-3 text-end text-success fw-bold"
                value={result ? `${result} AED` : ""}
                readOnly
              />

              <div className="d-grid gap-2">
                <div className="row g-2">
                  {buttons.map((btn, i) => (
                    <div className="col-3" key={i}>
                      <button
                        className={`btn btn-${
                          btn === "*" ? "warning" : btn === "C" ? "danger" : btn === "=" ? "success" : "secondary"
                        } w-100`}
                        onClick={() => handleClick(btn)}
                      >
                        {btn}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <h6
                className="mt-3 text-center"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "18px",
                  color: "#2c3e50",
                }}
              >
               {t("curtains.includingVAT")}
              </h6>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Curtains;
