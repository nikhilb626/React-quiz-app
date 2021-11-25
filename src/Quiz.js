import React,{useState} from "react";
import './App.css';
import questions from "./questions";


function Quiz() {
   const    [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
   const [currentQuestion,setCurrentQuestion]=useState(0);
   const [score,setScore]=useState(0);

    const [showScore,setShowScore]=useState(false);

   const handleAnswerButton=(isCorrect)=>{
     const  nextQuestion=currentQuestion+1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      setCurrentQuestionIndex(currentQuestionIndex+1);

      } else {
        setShowScore(true);
      }


      if(isCorrect){
        setScore(score+1);
      }
   }


  return (
    <>
    {
      showScore ?(<div className="score_section">
       <div className="score">Score {score} / {questions.length}</div> 
       <div className="declare">{ (100 * score) / questions.length>=70?<h1>You Won<i className="fas fa-trophy"></i></h1>:<h1>You Loose<i class="fas fa-heart-broken"></i></h1>}</div>
      </div>):
      
  <>
      <h1 className="heading">Quiz app</h1>

<div className="quest_container">
<div className="quest_status">
question {currentQuestionIndex + 1 } / {questions.length}
</div>
    {questions[currentQuestion].questionText}
</div>


<div className="answers_container">

{questions[currentQuestion].answerOptions.map((answerOption,index)=>(

  <button className="answer_card" onClick={()=>handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
))}
</div>


</>


    }

  
    </>
  );
}

export default Quiz;
