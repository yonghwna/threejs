import { useState } from "react";

import "./App.css";
import ModelViewer from "./ModelViewer";

function App() {
  const [modelName, setModelName] = useState("gun");
  const changeModel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.target as HTMLButtonElement;
    const value = button.value;
    setModelName(value);
  };
  return (
    <>
      <ModelViewer modelName={modelName} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        <button onClick={changeModel} value="gun">
          gun
        </button>
        <button onClick={changeModel} value="mario">
          mario
        </button>
        <button onClick={changeModel} value="car">
          car
        </button>
      </div>
    </>
  );
}

export default App;
