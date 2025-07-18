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
import html from "./assets/images/icon-html.svg";
import css from "./assets/images/icon-css.svg";
import javascript from "./assets/images/icon-js.svg";
import access from "./assets/images/icon-accessibility.svg";
import { ContextProvider } from "./Context";

const icons = {
  HTML: { icon: html, bg: "bg-orange-50" },
  CSS: { icon: css, bg: "bg-green-100" },
  JavaScript: { icon: javascript, bg: "bg-blue-50" },
  Accessibility: { icon: access, bg: "bg-purple-100" },
};

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [quizName, setQuizName] = useState("");

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
        <div className="px-6 py-4 sm:px-12 md:px-28 lg:px-24 lg:pt-7">
          <div className="flex gap-2 px-1.5 py-1.5 sm:py-2.5 items-center max-w-6xl mx-auto">
            {quizName && (
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 p-0.5 flex items-center justify-center rounded-xl ${icons[quizName].bg}`}
                >
                  <img alt="quiz icon " src={icons[quizName].icon} />
                </div>
                <p className="text-base sm:text-xl text-light-primary dark:text-white">
                  {quizName}
                </p>
              </div>
            )}

            <div className="flex items-center ml-auto gap-1">
              <div className="w-5 h-5 flex items-center">
                <img
                  alt="light theme icon"
                  src={darkTheme ? lightSun : darkSun}
                />
              </div>

              <button
                onClick={() => setDarkTheme(!darkTheme)}
                className="w-10 h-6 flex items-center rounded-full p-1.5 duration-300 ease-in-out bg-purple-600"
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out
            ${darkTheme ? "translate-x-3.5" : "translate-x-0"}`}
                />
              </button>
              <div className="w-5 h-5 flex items-center">
                <img
                  alt="dark theme icon"
                  src={darkTheme ? lightMoon : darkMoon}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-12 md:px-28 lg:px-24">
          <div className="max-w-6xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/html"
                element={<Html quizName={quizName} setQuizName={setQuizName} />}
              />
              <Route
                path="/css"
                element={<Css quizName={quizName} setQuizName={setQuizName} />}
              />
              <Route
                path="/javascript"
                element={
                  <JavaScript quizName={quizName} setQuizName={setQuizName} />
                }
              />
              <Route
                path="/accessibility"
                element={
                  <Accessibility
                    quizName={quizName}
                    setQuizName={setQuizName}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
