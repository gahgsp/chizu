import React from "react";
import "./ToolbarStyles.css";

const Toolbar = () => {
  return (
    <div className="ToolbarFrame">
      <div className="FirstPanel">
        <div>
          <h4>Add</h4>
        </div>
        <div>
          <button>Point</button>
        </div>
        <div>
          <button>Rectangle</button>
        </div>
        <div>
          <button>Polygon</button>
        </div>
        <div>
          <p>____</p>
        </div>
        <div>
          <button>GeoJson</button>
        </div>
      </div>
      <div className="SecondPanel">
        <div>
          <h4>Edit</h4>
        </div>
        <div>
          <button>Undo</button>
        </div>
        <div>
          <button>Delete</button>
        </div>
        <div>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
