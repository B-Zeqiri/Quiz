import React, { useState } from 'react'
import '../Style/QuestionForm.css'

const QuestionForm = () => {

  const [showFinalResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Sa kocka ka njeriu?",
      options:[
        {id:0, text:"200", isCorrect: false},
        {id:1, text:"242", isCorrect: false},
        {id:2, text:"343", isCorrect: false},
        {id:3, text:"206", isCorrect: true},
      ]
    },
   {
    text: "Planeti me i larget ne sistemin tone diellor?",
    options:[
      {id:0, text:"Neptuni", isCorrect: true},
      {id:1, text:"Saturni", isCorrect: false},
      {id:2, text:"Jupiteri", isCorrect: false},
      {id:3, text:"Toka", isCorrect:false },
    ]
   },
   {
    text: "Sa kontinente gjenden ne toke?",
    options:[
      {id:0, text:"5", isCorrect: false},
      {id:1, text:"7", isCorrect: true},
      {id:2, text:"6", isCorrect:false },
      {id:3, text:"11", isCorrect:false },
    ]
   },
   {
    text: "Sa qytete ka Kosova?",
    options:[
      {id:0, text:"16", isCorrect: false},
      {id:1, text:"44", isCorrect: false},
      {id:2, text:"23", isCorrect: false },
      {id:3, text:"32", isCorrect: true},
    ]
   },
   {
    text: "Kush e botoi abetaren e pare ne gjuhen shqipe?",
    options:[
      {id:0, text:"Jeronim de Rada", isCorrect:false },
      {id:1, text:"Naim Frashëri", isCorrect:false },
      {id:2, text:"Naum Veqilharxhi", isCorrect: true},
      {id:3, text:"Ndre Mjeda", isCorrect:false},
    ]
   }
  ]

  const optionClicked = (isCorrect)=>{
    if(isCorrect){
      setScore(score+1);
    }
    if(currentQuestion+1<questions.length){
      setCurrentQuestion(currentQuestion+1);
    }
    else{
      setShowFinalResult(true);
    }
    
  }

  const restartQuiz = () =>{
    setScore(0);
    setCurrentQuestion(0);
    setTimeout(()=>{
      setShowFinalResult(false);
    }, 500)
    
    window.location.href='/';
  }

  return (
    <div className='qFormWrapper'>
      {showFinalResult ? (
        <div className='finalResult'>
        <h3>Final Result</h3>
        <h4>{score} out of {questions.length} correct - ({(score/questions.length)*100}%)</h4>
        <button onClick={()=>restartQuiz()}>Another One</button>
      </div>
      ):(
        <>
        <div className='questionSection'>
        <div className='qestionSectionInside'>
          <h3>{questions[currentQuestion].text}</h3>
          </div>
        </div>
        <div className='answerSection'>
          {
            questions[currentQuestion].options.map((option => {
              return(
                <>
                  <p onClick={()=> optionClicked(option.isCorrect)} 
                  key={option.id}>{option.text}</p>
                  </>
              )
            }))
          }
        </div>
        <div className='numberOfQuestions'>
          <div className='numberOfQuestionsInside'>
            <h3>Question {currentQuestion + 1} of {questions.length}</h3>
          </div>
        </div>
      <div className='insideWrapper'>
      </div>
      </>
      )}
      
      
        
    </div>
  )
}

export default QuestionForm