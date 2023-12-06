import logo from "./logo.svg";
import "./App.css";

import Scorecard from "./components/Scorecard";

function App() {
  const gameType = 9;
  return (
    <div className="App">
      <Scorecard gameType={gameType} />
    </div>
  );
}

export default App;
