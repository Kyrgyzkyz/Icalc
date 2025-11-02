import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsContext } from './ItemsContext';
import { useTranslation } from "react-i18next";

const Carpet = () => {
  const { t } = useTranslation();
  const { updateItem } = useContext(ItemsContext);

  const [shape, setShape] = useState('rectangular'); // "rectangular" or "round"
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

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

  const calculatePrice = () => {
    try {
      let sqm = 0;
      if (shape === 'rectangular') {
        sqm = eval(input); // e.g., 2*3
      } else if (shape === 'round') {
        const diameter = parseFloat(input);
        if (isNaN(diameter)) throw new Error('Invalid diameter');
        const radius = diameter / 2;
        sqm = Math.PI * Math.pow(radius, 2); // area = πr²
      }

      const price = (sqm * 25 * 1.05).toFixed(2); // base price × VAT
      setResult(price);
      updateItem('carpet', 'qty', Number(price));
    } catch {
      setResult('Error');
      updateItem('carpet', 'qty', 0);
    }
  };

  const handleClick = (value) => {
    if (value === '=') {
      calculatePrice();
    } else if (value === 'C') {
      setInput('');
      setResult('');
      updateItem('carpet', 'qty', 0);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = ['*', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '=', 'C'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              {/* Video link */}
              <a
                href="https://www.instagram.com/reel/Ctim5XexASl/?igsh=NmVmcnA5NWUwdTUy"
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
                  backgroundColor: "#e02424",
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
              >
                <PlayIcon />
                {t("carpet.watch_video")}
              </a>

              {/* Title */}
              <h4
                className="text-center mb-3"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "25px",
                  fontWeight: 800,
                  color: "#2c3e50",
                  letterSpacing: "0.04em",
                  userSelect: "none",
                }}
              >
                {t("carpet.title") || "Carpet Calculator"}
              </h4>

              {/* Shape selector */}
              <div className="mb-3">
                <label className="form-label">{t("carpet.shape") || "Shape"}</label>
                <select
                  className="form-select"
                  value={shape}
                  onChange={(e) => {
                    setShape(e.target.value);
                    setInput('');
                    setResult('');
                    updateItem('carpet', 'qty', 0);
                  }}
                >
                  <option value="rectangular">
                    {t("carpet.rectangular") || "Rectangular"}
                  </option>
                  <option value="round">{t("carpet.round") || "Rounded"}</option>
                </select>
              </div>

              {/* Input section */}
              <label
                htmlFor="amount"
                style={{
                  fontFamily: "'MyCursiveFont'",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#2c3e50",
                  letterSpacing: "0.04em",
                  userSelect: "none",
                }}
              >
                {shape === 'rectangular'
                  ? t("carpet.label_size") || "Enter size (e.g. 2*3 m)"
                  : t("carpet.label_diameter") || "Enter diameter in meters"}
              </label>

              {shape === 'rectangular' ? (
                <>
                  <input
                    type="text"
                    className="form-control mb-2 text-end"
                    value={input}
                    readOnly
                  />
                  <div className="d-grid gap-2">
                    <div className="row g-2">
                      {buttons.map((btn, i) => (
                        <div className="col-3" key={i}>
                          <button
                            className={`btn btn-${
                              btn === '*' ? 'warning'
                                : btn === 'C' ? 'danger'
                                : btn === '=' ? 'success'
                                : 'secondary'
                            } w-100`}
                            onClick={() => handleClick(btn)}
                          >
                            {btn}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                // Round carpet input — manual numeric entry
                <input
                  type="number"
                  step="0.01"
                  className="form-control mb-2 text-end"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. 2.5"
                />
              )}

              {/* Result display */}
              <input
                type="text"
                className="form-control mb-3 text-end text-success"
                value={result}
                readOnly
              />

              <h6
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#2c3e50",
                  letterSpacing: "0.04em",
                }}
              >
                {t("carpet.including_vat") || "Including VAT"}
              </h6>

              {/* Calculate button for round carpets */}
              {shape === 'round' && (
                <button className="btn btn-success w-100" onClick={calculatePrice}>
                  {t("carpet.calculate") || "Calculate"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carpet;
