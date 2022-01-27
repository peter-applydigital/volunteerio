import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Commitment from "./Commitment";
import Skills from './Skills'
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
             <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
