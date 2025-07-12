import { useContext, useEffect } from "react";
import { DataContext } from "../Context";
import html from "../assets/images/icon-html.svg";
import Quiz from "./Quiz"

export default function Html() {
  const { question, setQuizName } = useContext(DataContext);


  const subjectQuestions = question?.quizzes?.[0]?.questions;
  const title = question?.quizzes?.[0]?.title

  useEffect(()=>{
    setQuizName(title)
  })


  return <Quiz subjectQuestions={subjectQuestions} subjectIcon={html}/>
;
}
