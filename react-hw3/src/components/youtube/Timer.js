import React, {useState} from 'react';
import DisplayComponent from "./DisplayComponent";
import BtnComponent from './BtnComponent';
import "./LikeApp.css";

function Timer() {
 const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
 const [status, setStatus] = useState(0);
 const [interv, setInterv] = useState();


 const start = () => {
     run()
     setStatus(1);
     setInterv(setInterval(run, 10));
 };

 let unpdateMs = time.ms;
 let unpdateS = time.s;
 let unpdateM = time.m;
 let unpdateH = time.h;

    const run = () => { 
        if(unpdateM === 60) { 
            unpdateH++;
            unpdateM = 0;
        }
        if(unpdateS === 60) { 
            unpdateM++;
            unpdateS = 0;
        }
        if(unpdateMs === 60) { 
            unpdateS++;
            unpdateMs = 0;
        }
        unpdateMs ++;
        return setTime({ms:unpdateMs, s:unpdateS, m:unpdateM, h:unpdateH});
    }
    
    const stop = () => {
        clearInterval(interv)
        setStatus(2)
    };
    const reset = () => {
        clearInterval(interv)
        setStatus(2)
        setTime({ms:0, s:0, m:0, h:0});
    };
    const resume = () => start();



  return (
    <div className="main-section">
        <div className="clock-holder">
            <div className="stopwatch">
            <DisplayComponent time={time} />
            <BtnComponent status={status} stop={stop} reset={reset} resume={resume} start={start} />
            </div>
            <div class="wrapper" data-anim="base wrapper">
            <div class="circle" data-anim="base left"></div>
            <div class="circle" data-anim="base right"></div>
            </div>
        </div>
    </div>
  );
}

export default Timer;
