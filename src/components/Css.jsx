import { useContext, useEffect } from "react";
import { DataContext } from "../Context";
import css from "../assets/images/icon-css.svg";
import Quiz from "./Quiz"

export default function Html() {
  const { question, setQuizName } = useContext(DataContext);


  const subjectQuestions = question?.quizzes?.[1]?.questions;
  const title = question?.quizzes?.[1]?.title

  useEffect(()=>{
    setQuizName(title)
  })


  return <Quiz subjectQuestions={subjectQuestions} subjectIcon={css}/>
;
}
