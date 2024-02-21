import React from "react";
import "./ToolbarStyles.css";

const Toolbar = () => {
  return (
    <div className="ToolbarFrame">
      <div>
        <button>Polygons</button>
      </div>
      <div>
        <button>POI</button>
      </div>
      <div>
        <button>Fav</button>
      </div>
    </div>
  );
};

export default Toolbar;
