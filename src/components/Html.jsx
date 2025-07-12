import { useContext } from "react";
import { DataContext } from "../Context";
import html from "../assets/images/icon-html.svg";
import Quiz from "./Quiz"

export default function Html() {
  const { question } = useContext(DataContext);


  const subjectQuestions = question?.quizzes?.[0]?.questions;


  return <Quiz subjectQuestions={subjectQuestions} htmlIcon={html} question={question}/>
;
}
