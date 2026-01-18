import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function linkClass({ isActive }) {
  return isActive ? "nav__link nav__link--active" : "nav__link";
}

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand">Portfolio</div>

        <nav className="nav__links">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/work" className={linkClass}>Work History</NavLink>
          <NavLink to="/leetcode" className={linkClass}>LeetCode</NavLink>
        </nav>
      </div>
    </header>
  );
}
