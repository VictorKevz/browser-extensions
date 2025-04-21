import { DarkModeOutlined, LightMode } from "@mui/icons-material";
import { useTheme } from "../../context/ThemeContext";

const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      className={`w-12 h-12 rounded-lg bg-[var(--neutral-100)] text-[var(--neutral-900)]`}
      type="button"
      onClick={toggleTheme}
    >
      {isDark ? <LightMode /> : <DarkModeOutlined />}
    </button>
  );
};

export default ThemeButton;
