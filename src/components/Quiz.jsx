import errorIcon from "../assets/images/icon-error.svg";
import correctIcon from "../assets/images/icon-correct.svg";
import wrongIcon from "../assets/images/icon-incorrect.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Accessibility from "./Accessibility";

const bgColors = {
  HTML: "bg-orange-50",
  CSS: "bg-green-100",
  JavaScript: "bg-blue-50",
  Accessibility: "bg-purple-100",
};

export default function Quiz({ subjectQuestions, subjectIcon, quizName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = subjectQuestions && subjectQuestions[currentIndex];
  const bgClass = bgColors[quizName];

  useEffect(() => {
    const newWidth = 1 + currentIndex * 11;
    setBarWidth(newWidth);
  }, [currentIndex]);

  const handleNext = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setError(true);
      return;
    }
    if (currentIndex < subjectQuestions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedOption("");
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleOptionChange = (e) => {
    if (!isAnswered) {
      const selected = e.target.value;
      setSelectedOption(selected);
      setIsAnswered(true);
      setError(false);
      if (selected === currentQuestion?.answer) {
        setScore((prev) => ++prev);
      }
    }
  };

  const handleOptionEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.querySelector('input[type="radio"]')?.click();
    }
  };

  // const save = () => {
  //   localStorage.setItem(
  //     "quizState",
  //     JSON.stringify({ qIndex: currentIndex, qOption: selectedOption, qSore: score, qError: error, q })
  //   );
  // };

  return isFinished ? (
    <div className="flex flex-col lg:flex-row gap-y-10 sm:gap-y-16 gap-x-8">
      <div className="w-full lg:w-[50%]">
        <h2 className="title font-light">Quiz completed</h2>
        <h2 className="title font-medium">You scored...</h2>
      </div>
      <div className="grow">
        <div className="p-8 bg-white dark:bg-blue-850 w-full h-auto flex flex-col justify-center items-center rounded-xl sm:rounded-3xl">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 sm:w-14 sm:h-14 p-0.5 flex items-center justify-center rounded-xl ${bgClass}`}
            >
              <img src={subjectIcon} alt="quiz title icon" />
            </div>
            <span className="text-light-primary dark:text-white text-lg sm:text-3xl">
              {quizName}
            </span>
          </div>

          <p className="text-[5.5rem] text-light-primary dark:text-white sm:text-[9rem] leading-none mt-4 sm:mt-7 sm:mb-5">
            {score}
          </p>
          <p className="text-lg sm:text-2xl sm:font-medium text-light-secondary dark:text-dark-secondary rounded-xl sm:rounded-3xl">
            out of {subjectQuestions?.length}
          </p>
        </div>
        <NavLink
          to="/"
          className="bg-purple-600 text-white text-lg sm:text-2xl h-11 w-full p-4 rounded-xl sm:h-12 sm:p-8 sm:rounded-3xl flex justify-center items-center mt-3.5"
        >
          Play again
        </NavLink>
      </div>
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row gap-y-10 sm:gap-y-16 gap-x-20">
      <div className="w-full lg:w-[65%] grow flex flex-col justify-between">
        <div>
          <p className="text-sm italic sm:text-xl text-light-secondary dark:text-dark-secondary mb-4">
            Question {currentIndex + 1} of {subjectQuestions?.length}
          </p>
          <h2 className="text-xl sm:text-3xl font-medium text-light-primary dark:text-white">
            {currentQuestion && currentQuestion?.question}
          </h2>
        </div>
        <div
          className="w-full h-3.5 p-1 mt-6 sm:mt-10 lg:mb-20 dark:bg-blue-850 bg-white rounded-full flex items-center"
          role="progressbar"
        >
          <div
            className="h-2 bg-purple-600 rounded-full"
            style={{ width: `${barWidth}%` }}
          ></div>
        </div>
      </div>

      <form
        className="flex flex-col gap-3.5 sm:gap-4.5 grow lg:w-[60%]"
        onSubmit={handleNext}
      >
        {currentQuestion?.options &&
          currentQuestion?.options.map((opt, idx) => {
            const optionLabel = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === opt;
            const isCorrect = opt === currentQuestion?.answer;
            let borderStyle =
              "box hover:outline hover:outline-purple-600 hover:outline-2 flex justify-between gap-2 lg:gap-5 md:h-fit";
            let labelStyle =
              "text-lg sm:text-2xl text-light-secondary font-medium bg-light-background dark:bg-white h-9 w-9 sm:h-10 sm:w-10 rounded-md sm:rounded-lg  flex items-center justify-center flex-shrink-0";

            if (isSelected) {
              if (isCorrect) {
                borderStyle += " outline outline-green-500 outline-2 ";
                labelStyle += " bg-green-500 text-white ";
              } else {
                borderStyle += " outline outline-red-500 outline-2";
                labelStyle += " bg-red-500 text-white ";
              }
            }

            return (
              <label
                key={idx}
                className={`${borderStyle} focus-visible:outline-purple-600`}
                tabIndex={0}
                onKeyDown={handleOptionEnter}
                >
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={isSelected}
                  onChange={handleOptionChange}
                  className={`hidden`}
                />
                <div className="flex items-center gap-2 lg:gap-5">
                  <span className={labelStyle}>{optionLabel}</span>
                  <p className="text-lg sm:text-2xl text-light-primary dark:text-white">
                    {opt}
                  </p>
                </div>
                {selectedOption && opt === currentQuestion.answer && (
                  <img
                    alt="correct option icon"
                    src={correctIcon}
                    className="w-7 h-7"
                  />
                )}
                {selectedOption &&
                  isSelected &&
                  opt !== currentQuestion.answer && (
                    <img
                      alt="wrong option icon"
                      src={wrongIcon}
                      className="w-7 h-7"
                    />
                  )}
              </label>
            );
          })}
        <button className="bg-purple-600 text-white text-lg sm:text-2xl h-11 w-full p-4 rounded-xl sm:h-12 sm:p-8 sm:rounded-3xl flex justify-center items-center ">
          Next Question
        </button>
        {error && (
          <div className="flex justify-center items-center gap-2">
            <img src={errorIcon} alt="error icon" className="w-7 h-7" />
            <p className="text-lg sm:text-2xl  text-red-500">
              Please select an answer
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
