import lightLogo from "/assets/images/logo.svg";
import darkLogo from "/assets/images/dark-logo.svg";
import ThemeButton from "./ThemeButton";
import { useTheme } from "../../context/ThemeContext";
const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="w-full px-3 min-h-18 flex items-center justify-between bg-[var(--neutral-0)] rounded-lg shadow-lg ">
      <figure>
        <img
          src={theme === "light" ? lightLogo : darkLogo}
          alt="Company's Logo"
        />
      </figure>
      <ThemeButton />
    </header>
  );
};

export default Header;
