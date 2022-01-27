import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Commitment from "./Commitment";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/commitment" element={<Commitment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
