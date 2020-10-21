import React from 'react';
import CountdownTimer from './components/countdownTimer/countdownTimer';

const countdownTimers = [{
  time: 15,/*count in sec*/ 
  width: 300,
  step: 1 /*steps in sec*/
}, {
  time: 30,
  width: 300,
  step: 2
}, {
  time: 150,
  width: 300,
  step: 5
}];




function App() {
  return (
    <div className="App">
    <div className="countdownTimer-wrapper">
      {countdownTimers.map((timerData) => ( 
        <CountdownTimer  {...timerData}  />
      ))}
      </div>
    </div>
  );
}

export default App;
