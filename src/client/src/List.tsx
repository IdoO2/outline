import React from "react";
import "./List.css";
import pngSpec from "./spec-list.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Item() {
  return (
    <div className="item">
      <div className="item-content">
        <strong className="item-name">Item</strong>
        <button className="action-promote">Move</button>
      </div>
    </div>
  );
}

export const List = () => {
  const txtSpec = `
  Ordered list app.
  Features:
   – Three list items
   - List items can be at root level or shifted right
   – Clicking a root-level  list item moves it right
   – Clicking a shifted list item moves it left
  `;

  return <img src={pngSpec} alt={txtSpec} width="400" />;
};
