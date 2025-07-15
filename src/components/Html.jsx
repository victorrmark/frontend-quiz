import { useContext, useEffect } from "react";
import { DataContext } from "../Context";
import html from "../assets/images/icon-html.svg";
import Quiz from "./Quiz";

export default function Html({ setQuizName, quizName }) {
  const { question } = useContext(DataContext);

  const subjectQuestions = question?.quizzes?.[0]?.questions;
  const title = question?.quizzes?.[0]?.title;

  useEffect(() => {
    title && setQuizName(title);
  });

  return (
    <Quiz
      subjectQuestions={subjectQuestions}
      subjectIcon={html}
      quizName={quizName}
    />
  );
}
