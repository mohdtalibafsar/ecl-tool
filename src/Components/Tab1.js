import React, { useState } from "react";
import "../App.css";
import "./Tab1.css";

const Tab1 = ({ navbar }) => {
  return (
    <div>
      {navbar && (
        <div
          className="sub-navbar-on-right"
          style={{ flex: "1 0 100%", padding: "8px" }}
        >
          <button className="btn btn-secondary" href="#NewTask">
            New Task
          </button>
          <button className="btn btn-secondary" href="#LoadPreviousTask">
            Load Previous Task
          </button>
          <button className="btn btn-secondary" href="#SaveDraft">
            Save Draft
          </button>
          <button className="btn btn-secondary" href="#Refresh">
            Refresh
          </button>
        </div>
      )}

      {/* <div>
          <p>text here</p>

          </div> */}
     
    </div>
  );
};

export default Tab1;
