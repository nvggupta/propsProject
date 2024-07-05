import { useState, useEffect } from "react";
import "../components/card.css";
import React from "react";
function Card({color}) {
  console.log(color);
  return (
    <div className={` w-64 h-64`} style={{backgroundColor : `${color.colorCode}`}} >
      <span>{color.colorName}</span>
      <span>{color.colorCode}</span>
    </div>
  );
}

export default Card;
