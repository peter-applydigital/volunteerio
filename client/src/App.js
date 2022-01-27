import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Commitment from "./Commitment";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./muiTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/home" element={<Home />} />
            <Route path="/commitment" element={<Commitment />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
