import React, {useState} from 'react'

export default function Quiz() {
    const questions = [
        {
        questionText : 'How old is Pinus longaeva ?',
        answerOptions:[
        { answerText: '1563', isCorrect:false},
        { answerText: '4700', isCorrect:true},
        { answerText: '2901', isCorrect:false},
        { answerText: '3859', isCorrect:false,},
        ],
    },
        {
        questionText : 'What is the most used programming language in 2020 ?',
        answerOptions:[
            { answerText: 'C++', isCorrect:false},
            { answerText: 'Java', isCorrect:false},
            { answerText: 'Javascript', isCorrect:true},
            { answerText: 'Go', isCorrect:false,},
            ],
    },
        {
        questionText : 'Who is the president of US?',
        answerOptions:[
            { answerText: 'Barack Obama', isCorrect:false},
            { answerText: 'Donald Trump', isCorrect:true},
            { answerText: 'George W. Bush', isCorrect:false},
            { answerText: 'Angela Merkel', isCorrect:false,},
            ],
    },
        {
        questionText: 'What is ReactJS ?',
        answerOptions:[
            { answerText: 'JavaScript library', isCorrect:true},
            { answerText: 'C++ library', isCorrect:false},
            { answerText: 'Programming language', isCorrect:false},
            { answerText: 'Class declaration in JavaScriptl', isCorrect:false,},
            ],
    },
        {
        questionText : 'What year was JavaScript launched ?',
        answerOptions:[
            { answerText: '1997', isCorrect:false},
            { answerText: '1996', isCorrect:false},
            { answerText: '1998', isCorrect:false},
            { answerText: 'none of the above', isCorrect:true,},
            ],
    },
        {
        questionText : 'Who is CEO of Tesla ?',
        answerOptions:[
            { answerText: 'Jeff Bezos', isCorrect:false},
            { answerText: 'Elon Musk', isCorrect:true},
            { answerText: 'Bill Gates', isCorrect:false},
            { answerText: 'Tony Stark', isCorrect:false,},
            ], 
        },
];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => { 
        if(isCorrect=== true){
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
    }



 return (
        <div className = 'app'>
           {showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>
                        <button onClick={ ()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)
                       }
					</div>
				</>
			)}
            
        </div>
    )
};
