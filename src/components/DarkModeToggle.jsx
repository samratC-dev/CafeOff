import "./DarkModeToggle.css";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      type="button"
      className="dark-mode-toggle"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span>{darkMode ? "☀️" : "🌙"}</span>
      <span>{darkMode ? "Light" : "Dark"}</span>
    </button>
  );
}

export default DarkModeToggle;
