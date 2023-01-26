import { useEffect, useState } from "react";


const Timer = ({setStop, questionNbr}) => {
    const [timer, setTimer] = useState(30)
    

    useEffect(() => {
        if(timer === 0) return setStop(true)
        const interval = setInterval(() => {
            setTimer(timer => timer -1)
            
        },1000);
        return () => clearInterval(interval)
    },[timer, setStop])


    useEffect(() => {
        setTimer(30)
    },[questionNbr])


    
    return (
        <div className="containerTimer">
            <div className="timer">{timer}</div>
    </div>
    )
};

export default Timer;