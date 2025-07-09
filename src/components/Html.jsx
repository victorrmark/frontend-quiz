import { useState, useEffect, useContext, useRef } from "react";
import { DataContext } from "../Context";
import { Result } from "postcss";

export default function Html() {
  const { question } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const radioRef = useRef(null);

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
      setIsSelected(false);
    }
  };

  const handleOptionChange = (e) => {
    if (!isSelected) {
      setSelectedOption(e.target.value);
      setIsSelected(true);
    }
  };

  useEffect(() => {});

  return (
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
            const check = selectedOption === opt;
            const isCorrect = currentQuestion?.answer;
            let borderStyle =
              "box hover:outline hover:outline-purple-600 hover:outline-2";

            if (isSelected) {
              if (isCorrect) {
                borderStyle += " outline outline-green-500 outline-2";
              } else if (isSelected && !isCorrect) {
                borderStyle += " outline outline-red-500 outline-2";
              }
            }
            // } else if (isSelected) {
            //   borderStyle += " outline outline-purple-600 outline-2";
            // }

            return (
              <label key={idx} className={borderStyle}>
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={check}
                  onChange={handleOptionChange}
                  className="hidden"
                  ref={radioRef}
                />
                <span className="text-light-secondary font-medium bg-light-background dark:bg-white h-9 w-9 rounded-md sm:rounded-lg sm:h-14 sm:w-14 flex items-center justify-center">
                  {optionLabel}
                </span>
                <p className="text-lg sm:text-3xl text-light-primary dark:text-white">
                  {opt}
                </p>
              </label>
            );
          })}
        <button className="bg-purple-600 text-white text-lg h-14 w-full p-4 rounded-xl sm:text-2xl sm:h-20 sm:p-8 sm:rounded-3xl flex justify-center items-center ">
          Next Question
        </button>
      </form>
    </div>
  );
}
