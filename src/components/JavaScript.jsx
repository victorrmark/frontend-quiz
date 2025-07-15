import { useContext, useEffect } from "react";
import { DataContext } from "../Context";
import js from "../assets/images/icon-js.svg";
import Quiz from "./Quiz"

export default function JavaScript({setQuizName, quizName}) {
  const { question } = useContext(DataContext);


  const subjectQuestions = question?.quizzes?.[2]?.questions;
  const title = question?.quizzes?.[2]?.title

  useEffect(() => {
    title && setQuizName(title);
  });

  return (
    <Quiz
      subjectQuestions={subjectQuestions}
      subjectIcon={js}
      quizName={quizName}
    />
  );
;
}
