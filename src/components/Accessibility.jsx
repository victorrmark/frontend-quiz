import { useContext, useEffect } from "react";
import { DataContext } from "../Context";
import ass from "../assets/images/icon-accessibility.svg";
import Quiz from "./Quiz"

export default function Html() {
  const { question, setQuizName } = useContext(DataContext);


  const subjectQuestions = question?.quizzes?.[3]?.questions;
  const title = question?.quizzes?.[3]?.title

  useEffect(()=>{
    setQuizName(title)
  })


  return <Quiz subjectQuestions={subjectQuestions} subjectIcon={ass}/>
;
}
