import pngSpec from "./spec-list.png";
import "./App.css";

function Item({ proOrDe }: { proOrDe: string }) {
  return (
    <div className="item">
      <div className="item-content">
        <strong className="item-name">Item</strong>
        <div className={`action-${proOrDe}mote`}>Move</div>
      </div>
    </div>
  );
}

function App() {
  const txtSpec = `
  Ordered list app.
  Features:
   – Three list items
   - List items can be at root level or shifted right
   – Clicking a root-level  list item moves it right
   – Clicking a shifted list item moves it left
  `;

  return <img src={pngSpec} alt={txtSpec} width="400" />;
}

export default App;
