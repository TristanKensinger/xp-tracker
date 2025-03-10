import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Pillars from "./pages/Pillars.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pillars" element={<Pillars />} />
      </Routes>
    </Router>
  );
}

export default App;
