import logo from "/assets/images/logo.svg";
import ThemeButton from "./ThemeButton";
const Header = () => {
  return (
    <header className="w-full px-3 min-h-16 flex items-center justify-between bg-[var(--neutral-0)] rounded-lg shadow-lg">
      <figure>
        <img src={logo} alt="Company's Logo" />
      </figure>
      <ThemeButton />
    </header>
  );
};

export default Header;
