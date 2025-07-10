import { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context";
import errorIcon from "../assets/images/icon-error.svg";
import correctIcon from "../assets/images/icon-correct.svg";
import wrongIcon from "../assets/images/icon-incorrect.svg";

export default function Html() {
  const { question } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [isFinished, setIsFinished] = useState(true);

  const htmlQuestions = question?.quizzes?.[0]?.questions;
  const currentQuestion = htmlQuestions && htmlQuestions[currentIndex];

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
    if (currentIndex < htmlQuestions.length - 1) {
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

  useEffect(() => {});

  return isFinished ? (
    <div>
      <div>
        <h2>Quiz completed</h2>
        <h2>Your scored</h2>
      </div>
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row gap-y-10 sm:gap-y-16">
      <div>
        <div>
          <p className="text-sm italic text-light-secondary dark:text-dark-secondary sm:text-xl mb-4 sm:mt-6">
            Question {currentIndex + 1} of {htmlQuestions?.length}
          </p>
          <h2 className="text-xl sm:text-4xl font-medium text-light-primary dark:text-white">
            {currentQuestion && currentQuestion?.question}
          </h2>
        </div>
        <div
          className="w-full h-3.5 p-1 mt-6 sm:mt-10 dark:bg-blue-850 bg-white rounded-full flex items-center"
          role="progressbar"
        >
          <div
            className="h-2 bg-purple-600 rounded-full"
            style={{ width: `${barWidth}%` }}
          ></div>
        </div>
      </div>

      <form className="flex flex-col gap-4 sm:gap-6 " onSubmit={handleNext}>
        {currentQuestion?.options &&
          currentQuestion?.options.map((opt, idx) => {
            const optionLabel = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === opt;
            const isCorrect = selectedOption === currentQuestion?.answer;
            let borderStyle =
              "box hover:outline hover:outline-purple-600 hover:outline-2 flex justify-between gap-2 lg:gap-5";

            if (isSelected) {
              if (isCorrect) {
                borderStyle += " outline outline-green-500 outline-2";
              } else {
                borderStyle += " outline outline-red-500 outline-2";
              }
            }

            return (
              <label key={idx} className={borderStyle}>
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={isSelected}
                  onChange={handleOptionChange}
                  className={`hidden`}
                />
                <div className="flex items-center gap-2 lg:gap-5">
                  <span className="text-light-secondary font-medium bg-light-background dark:bg-white h-9 w-9 rounded-md sm:rounded-lg sm:h-14 sm:w-14 flex items-center justify-center flex-shrink-0">
                    {optionLabel}
                  </span>
                  <p className="text-lg sm:text-3xl text-light-primary dark:text-white">
                    {opt}
                  </p>
                </div>
                {isSelected && isCorrect && selectedOption && (
                  <img
                    alt="correct option"
                    src={correctIcon}
                    className="w-7 h-7"
                  />
                )}
                {isSelected && !isCorrect && selectedOption && (
                  <img
                    alt="correct option"
                    src={wrongIcon}
                    className="w-7 h-7"
                  />
                )}
              </label>
            );
          })}
        <button className="bg-purple-600 text-white text-lg h-14 w-full p-4 rounded-xl sm:text-2xl sm:h-20 sm:p-8 sm:rounded-3xl flex justify-center items-center ">
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
