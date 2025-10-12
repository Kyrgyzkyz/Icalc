import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sofa = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(((eval(input) * 60) * 1.05).toFixed(2));; // ⚠️ eval for demo purposes
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '1', '2', '3', 
    '4', '5', '6', 
    '7', '8', '9', 
    '0',  '=', 
    'C'
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="text-center mb-3" style={{
    fontFamily:"'Dancing Script', cursive",
    fontSize: "28px",
    fontWeight: 800,
    color: "#2c3e50",
    letterSpacing: "0.04em",
    userSelect: "none",
    marginBottom: "6px",
    display: "inline-block"
  }}>Sofa</h4>
  <br></br>
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
        Seats (e.g., L-shape = 4)
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
              <div className="d-grid gap-2">
                <div className="row g-2">
                  {buttons.map((btn, i) => (
                    <div className="col-3" key={i}>
                      <button 
                        className={`btn btn-${btn === 'C' ? 'danger' : btn === '=' ? 'success' : 'secondary'} w-100`}
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
      <a
  style={{
    fontFamily: "'Dancing Script', cursive",
    fontSize: "25px",
    fontWeight: 800,
    color: "red",           // changed to red
    letterSpacing: "0.04em",
    userSelect: "none",
    marginBottom: "6px",
    display: "inline-block",
    textDecoration: "none"  // removes underline
  }}
  href="
https://www.instagram.com/reel/DFaxu3do-rU/?igsh=MXBmcXYxeGpkdHFjNQ== "
>
  Watch the process
</a>
    </div>
  );
};

export default Sofa;
