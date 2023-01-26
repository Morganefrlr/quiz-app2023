import React, { useEffect, useState } from 'react';

const Question = ({quiz , setStop, questionNbr, setQuestionNbr}) => {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [active , setActive] = useState('active')

    useEffect(() =>{
        setQuestion(quiz[questionNbr -1])

    },[quiz, questionNbr])

    const delay = (duration, callback) =>{
        setTimeout(() => {
            callback()
        }, duration)
    }


    const handleClick = (a) => {
        setSelectedAnswer(a)
        setActive('answer active')
        delay(300,() =>
            setActive(a.correct ? 'answer correct' : 'answer wrong')
        )
        delay(3000,() => {
            if(a.correct){
                setQuestionNbr(prev => prev+1)
                setSelectedAnswer(null)
            }else{
                setStop(true)
            }
        })
        
    } 

    return (
        <>
            <div className='containerQ'>
                <span className="containerQ_question">{question?.question}</span>
            </div>
            <div className='containerA'>
                {question?.answer.map((a, index) =>(
                    <li className={selectedAnswer === a ? active : 'answer'} key={index} onClick={() => handleClick(a)}>{a.text}</li>
                ))}
            </div>
        </>
        
    );
};

export default Question;