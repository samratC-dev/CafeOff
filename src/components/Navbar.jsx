import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="section-container navbar-inner">
        <a href="#home" className="logo">
          Morning Bite 🥞
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
