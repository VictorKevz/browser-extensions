import "./App.css";
import CardContainer from "./components/cards/CardContainer";
import Header from "./components/header/Header";
import Notification from "./components/notifications/Notification";
import { CardProvider } from "./context/CardContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <CardProvider>
        <main
          className="w-full min-h-screen flex items-start justify-center gap-4 px-4"
          style={{
            backgroundImage: "var(--gradient)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-6xl xl:max-w-none w-full flex flex-col items-center my-10">
            <Header />
            <CardContainer />
          </div>
          <div className="w-full fixed top-[7rem] flex justify-end z-9999 px-4">
            <Notification />
          </div>
        </main>
      </CardProvider>
    </ThemeProvider>
  );
}

export default App;
