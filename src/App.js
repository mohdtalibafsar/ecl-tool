// src/App.js
import React, { useState, useCallback } from "react";
import "./App.css";
import Tab1 from "./Components/Tab1";
import { useDropzone } from "react-dropzone";

function App() {
  // State to manage the visibility of the sub-navbar
  const [showSubNavbar, setShowSubNavbar] = useState(false);

  // Function to toggle the sub-navbar visibility
  const toggleSubNavbar = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("files", acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="App">
      <header className="App-header">
        {/* Your header content goes here */}
      </header>
      <div className="sidenav">
        {/* Button to toggle the sub-navbar visibility */}
        <button className="btn btn-primary" onClick={toggleSubNavbar}>
          Input
        </button>
        {/* Sub-navbar displayed when showSubNavbar is true */}

        {/* Other buttons in the sidebar */}
        <button className="btn btn-primary" href="#Macrodata">
          Macro Data
        </button>
        <button className="btn btn-primary" href="#Loancashflow">
          Loan Cashflow
        </button>
        <button className="btn btn-primary" href="#PD">
          PD
        </button>
        <button className="btn btn-primary" href="#ECLsummary">
          ECL Summary
        </button>
        <button className="btn btn-primary" href="#Riskcapitalassessment">
          Risk Capital Assessment
        </button>
        <button className="btn btn-primary" href="#Reports">
          Reports
        </button>
      </div>
      <div>
        {/* Display the sub-navbar buttons on the right side */}
        <Tab1 navbar={showSubNavbar} />
      </div>

    { showSubNavbar ? 
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 60,
          width: "100%",
        }}
        >
        {/* First box */}
        <div
          style={{
            flex: "0 0 30%",
            padding: "0px",
            backgroundColor: "#8888",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          
          }}
        >
          <div
            style={{
              flex: "1 0 30%",
              padding: "10px",
              marginBottom: "800px",
            }}
          >
            <p>----Insert----</p>
            <button id="insertbar" className="btn btn-primary" onClick={toggleSubNavbar}>
              Type-Retail
            </button>
            <br></br>
            <button id="insertbar" className="btn btn-primary" onClick={toggleSubNavbar}>
              Loan File Upload
            </button>
            <br></br>
            <button id="insertbar" className="btn btn-primary" onClick={toggleSubNavbar}>
              Repayment Schedule
            </button>
            <br></br>
            <button  id="insertbar"className="btn btn-primary" onClick={toggleSubNavbar}>
              Interest Rate %
            </button>
            <br></br>
            <button id="insertbar" className="btn btn-primary" onClick={toggleSubNavbar}>
              Financial Statements
            </button>
            <br></br>
            <button id="insertbar" className="btn btn-primary" onClick={toggleSubNavbar}>
              Macro Data
            </button>
            <br></br>
            <button id="insertbar" className="btn btn-primary" onClick={toggleSubNavbar}>
              Credit Score
            </button>
          </div>
        </div>

        {/* Second box */}
        <div
          style={{
            flex: "2 0 90%",
            padding: "10px",
            backgroundColor: "#FFFFFF",
            textAlign: "center",
          }}
        >
          <div
            style={{
              flex: "1 0 33%",
              padding: "10px",
              backgroundColor: "#808080",
            }}
          >
            <p>----Models Input----</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 60,
                width: "90%",
              }}
            >
              <div
                style={{
                  flex: "0 0 33%",
                  padding: "10px",
                  backgroundColor: "#0659a1",
                  marginRight: "20px",
                }}
              >
                <div
                  style={{
                    flex: "0 0 33%",
                    padding: "10px",
                    
                  }}
                >
                  <p>----Type----</p>
                  <br></br>

                <p>Transition Matrix Logistic Regression</p>
                </div>
              </div>
              <div
                style={{
                  flex: "0 0 33%",
                  padding: "10px",
                  backgroundColor: "#FFFF00",
                }}
              >
                <div
                  style={{
                    flex: "0 0 33%",
                    padding: "10px",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <p>Period</p>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> : null}
    </div>
  );
}

export default App;
