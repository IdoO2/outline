import design from "./design.png";
import "./App.css";

// TODO: I'll finish this later
function Item() {
  return (
    <div className="item">
      <div className="item-content">
        <strong className="item-name">Item</strong>
        <div className="action action-promote">Move</div>
      </div>
    </div>
  );
}

function App() {
  const txtSpec = "Ordered list app";

  return <img src={design} alt={txtSpec} width="204" />;
}

export default App;
