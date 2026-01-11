import './styles/tokens.css'
import './styles/global.css'
import './styles/layout.css'

import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WorkHistory from "./pages/WorkHistory";
import LeetCode from "./pages/LeetCode";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<WorkHistory />} />
          <Route path="/leetcode" element={<LeetCode />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

