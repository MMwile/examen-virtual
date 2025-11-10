import { useTheme } from "../context/ThemeContext.jsx";
import "../styles/theme.css";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      title="Cambiar tema"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
