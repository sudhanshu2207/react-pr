import "./App.css";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";

import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/*themebtn  */}
          <ThemeBtn />
        </div>
        {/* Card */}
        <Card />
        <div className="w-full max-w-sm mx-auto">{/* card */}</div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
