import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/zero" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
