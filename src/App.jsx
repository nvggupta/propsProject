import Card from "./components/Card";
import React from "react";
function App() {
  const differentColor = [
    {
      colorName: "red",
      colorCode: "#F03108",       
    },
    {
      colorName: "DeepPink",
      colorCode: "#FF1493", 
    },
    {
      colorName: "OrangeRed",
      colorCode: "#FF4500", 
    },
    {
      colorName: "Fuchsia",
      colorCode: "#FF00FF",
    },
    {
      colorName: "Purple",
      colorCode: "#800080"
    },
    {
      colorName: "DarkOliveGreen",
      colorCode: "#556B2F", 
    },
    {
      colorName: "Turquoise",
      colorCode: "#40E0D0", 
    },
    {
      colorName: "MidnightBlue",
      colorCode: "#191970", 
    },
    {
      colorName: "Maroon",
      colorCode: "#800000", 
    }
  ];
  
  return (
    <>
    <div className="flex flex-wrap justify-around gap-5">
        {differentColor.map((elem , idx)=> {
            return <Card color = {elem} />
        })}
    </div>
    
     
    </>
  );
}

export default App;
