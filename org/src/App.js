import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";

import Home from './pages/index.js';
import Dashboard from './pages/dashboard.js';
import SignUp from "./components/SignUp"; 
import SignIn from "./components/SignIn"; 

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </div>
  );
}

function Layout() {
  return (
    <header>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </header>
  );
}


export default App;
