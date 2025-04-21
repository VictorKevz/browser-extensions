import "./App.css";
import CardContainer from "./components/cards/CardContainer";
import Header from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main
        className="w-full min-h-screen flex items-center justify-center gap-4 px-4"
        style={{ background: "var(--gradient) no-repeat" }}
      >
        <div className="max-w-6xl w-full flex flex-col items-center my-10">
          <Header />
          <CardContainer />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
