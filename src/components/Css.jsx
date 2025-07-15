import { useContext, useEffect } from "react";
import { DataContext } from "../Context";
import css from "../assets/images/icon-css.svg";
import Quiz from "./Quiz"

export default function Css({setQuizName,  quizName}) {
  const { question } = useContext(DataContext);


  const subjectQuestions = question?.quizzes?.[1]?.questions;
  const title = question?.quizzes?.[1]?.title

  useEffect(() => {
    title && setQuizName(title);
  });

  return (
    <Quiz
      subjectQuestions={subjectQuestions}
      subjectIcon={css}
      quizName={quizName}
    />
  );
;
}
