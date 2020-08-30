import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Keys from "./Keys";

function App() {
  return (
    <div className="body">
      <h1 className="text-center text-primary ">Calculator</h1>
      <Keys />
    </div>
  );
}

export default App;
