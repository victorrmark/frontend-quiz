import { useContext, useEffect } from "react";
import { DataContext } from "../Context";
import js from "../assets/images/icon-js.svg";
import Quiz from "./Quiz"

export default function Html() {
  const { question, setQuizName } = useContext(DataContext);


  const subjectQuestions = question?.quizzes?.[2]?.questions;
  const title = question?.quizzes?.[2]?.title

  useEffect(()=>{
    setQuizName(title)
  })


  return <Quiz subjectQuestions={subjectQuestions} subjectIcon={js}/>
;
}
