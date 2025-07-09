import "./App.css";
import Home from "./components/Home";
import Html from "./components/Html";
import Css from "./components/Css";
import JavaScript from "./components/JavaScript";
import Accessibility from "./components/Accessibility";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import lightSun from "./assets/images/icon-sun-light.svg";
import darkSun from "./assets/images/icon-sun-dark.svg";
import lightMoon from "./assets/images/icon-moon-light.svg";
import darkMoon from "./assets/images/icon-moon-dark.svg";
import { ContextProvider } from "./Context";
import Result from "./components/Result";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <ContextProvider>
      <div className="font-typo box-border  min-h-screen pb-8 bg-light-background dark:bg-dark-background bg-light-bg dark:bg-dark-bg sm:bg-light-bg-md sm:dark:bg-dark-bg-md md:bg-light-bg-l md:dark:bg-dark-bg-l bg-no-repeat bg-cover">
        <div className="px-6 py-4 sm:px-12 lg:px-24 lg:pt-7">
          <div className="flex gap-2 px-1.5 py-1.5 sm:py-2.5 justify-end max-w-6xl mx-auto">
            <img alt="light theme icon" src={darkTheme ? lightSun : darkSun} />

            <button
              onClick={() => setDarkTheme(!darkTheme)}
              className="w-12 h-8 flex items-center rounded-full p-1.5 duration-300 ease-in-out bg-purple-600"
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out
            ${darkTheme ? "translate-x-4" : "translate-x-0"}`}
              />
            </button>
            {/* <div className="w-8 h-5 bg-purple-600"> </div> */}
            <img alt="dark theme icon" src={darkTheme ? lightMoon : darkMoon} />
          </div>
        </div>

        <div className="px-6 py-8 sm:px-12 lg:px-24">
          <div className="max-w-6xl outline outline-1 outline-gray-900 mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/html" element={<Html />} />
              <Route path="/css" element={<Css />} />
              <Route path="/javascript" element={<JavaScript />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
