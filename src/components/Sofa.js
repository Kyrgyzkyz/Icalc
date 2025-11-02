import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsContext } from './ItemsContext'; 
import { useTranslation } from "react-i18next";

const Sofa = () => {
  const { t } = useTranslation();
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

  // Get context values
  const { updateItem, prices } = useContext(ItemsContext);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const calcResult = ((eval(input) * 60) * 1.05).toFixed(2); // ⚠️ eval only for demo
        setResult(calcResult);

        // 🧠 Update Context (store sofa total in shared state)
        updateItem('sofa', 'qty', Number(calcResult));

      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
      updateItem('sofa', 'qty', 0); // reset in context too
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = ['1','2','3','4','5','6','7','8','9','0','=','C'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
            <a
  href="https://www.instagram.com/reel/DFaxu3do-rU/?igsh=MXBmcXYxeGpkdHFjNQ=="
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
  {t("sofa.watch_video")}
</a>

            <br/>
              <br />
              <label
                htmlFor="amount"
                style={{
                  fontFamily:"'Dancing Script', cursive",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#2c3e50",
                  letterSpacing: "0.04em",
                  userSelect: "none",
                  marginBottom: "6px",
                  display: "inline-block"
                }}
              >
                {t("sofa.label_seats")}
              </label>

              <input
                type="text"
                className="form-control mb-2 text-end"
                value={input}
                readOnly
              />
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
                  userSelect: "none",
                  marginBottom: "6px",
                  display: "inline-block"
                }}
              >
                {t("carpet.including_vat")}
              </h6>
              <div className="d-grid gap-2">
                <div className="row g-2">
                  {buttons.map((btn, i) => (
                    <div className="col-3" key={i}>
                      <button
                        className={`btn btn-${
                          btn === 'C' ? 'danger' : btn === '=' ? 'success' : 'secondary'
                        } w-100`}
                        onClick={() => handleClick(btn)}
                      >
                        {btn}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Sofa;
