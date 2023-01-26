import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Pyramid from './components/pyramid/Pyramid';
import Question from './components/Question/Question';
import Timer from "./components/Timer/Timer";
import User from "./components/User/User"
import { quiz, pointPyramid }from './data.js'
import './styles.scss';

function App() {
  const [username, setUsername] =useState(null)
  const [questionNbr, setQuestionNbr] = useState(1)
  const [stop, setStop] = useState(null)
  const [point, setPoint] = useState(0)

  useEffect(() =>{
    questionNbr >1 && setPoint(pointPyramid.find(p => p.id === questionNbr-1).point)
  },[questionNbr])



  return (
    <>
      {username ? (
        <div className="main">
          <Header username={username}/>
          <Timer setStop={setStop} questionNbr={questionNbr}/>
          <div className="mainQuiz">
              {stop ? (
                <h1>{username} avez gagné {point} points</h1>
              ) : (
                <Question quiz={quiz} setStop={setStop} questionNbr={questionNbr} setQuestionNbr={setQuestionNbr}/>
               )}
          </div>
          <Pyramid questionNbr={questionNbr} pointPyramid={pointPyramid} />
        </div>
        ) : <User setUsername={setUsername}/> }
    </>
  );
}

export default App;
