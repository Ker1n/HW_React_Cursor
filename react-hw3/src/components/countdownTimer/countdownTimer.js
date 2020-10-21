import React, {Component} from 'react';
import './countdownTimer.css'
import Button from '@material-ui/core/Button';


class CountdownTimer  extends Component  { 
    constructor (props) { 
        super(props)
        this.state = { 
            count: props.time,
            isActive: false,
            width : props.width
        }
    } 

    componentDidMount() {    
     console.log("Таймер запущено!")
      this.interval =  this.doIntervalChange ();
    };

    doIntervalChange () { 
        this.myInterval = setInterval(() => {
            this.setState (prevState => ({ 
                count: (prevState.count !==0) ? prevState.count - this.props.step : prevState.count = 0
            }))
        }, (this.props.step * 1000 ))
        this.myIntervalWidth = setInterval(() => { 
            this.setState((prevState)=> ({ 
               width : (prevState.width - ((this.props.width  / this.props.time )/10)) 
            }))
        },100)
    }   
     
    start = () => {    
        if (this.state.isActive) {
            console.log("Таймер запущено!")
            this.myInterval = setInterval(() => {
                this.setState (prevState => ({ 
                    count: (prevState.count !==0) ? prevState.count - this.props.step : (prevState.count = 0 ) 
                }))
            }, 1000);
            this.myIntervalWidth = setInterval(() => { 
                this.setState((prevState)=> ({ 
                   width : (prevState.width - ((this.props.width  / this.props.time )/10)) 
                }))
            },100)
        }
        this.setState({ 
            isActive: false,
        })  
          
    }

    stop = () => { 
        console.log("Таймер на паузі!")
        clearInterval(this.myInterval)
        clearInterval(this.myIntervalWidth)
        this.setState({ 
            isActive: true,
        })
    }

    reset = () => { 
        this.setState({ 
            count: this.props.time,
            isActive: false,
            width : this.props.width
        })
    }

    render () {
        return (
            <div className="countdownTimer-wrapper">
                <div className="countdownTimer-container">
                    <div className="countdownTimer-head">
                       <div className="timer-title">Current Timer: {this.state.count} s</div> 
                        <div className="line-wrapper" style={{width: this.props.width + 2}}></div><div className="timer-line" style={{width: this.state.width}}></div>
                    </div>
                    <div className="btn-row">
                    <div className="btn-controlPanel">
                        {this.state.isActive ? 
                         <Button variant="contained" size="small" color="primary" onClick={this.start}>Start</Button>
                        :<Button variant="contained" size="small" color="primary" onClick={this.stop}>Stop</Button>}
                    </div>
                    <div className="btn-reset">
                        <Button variant="contained"  size="small" color="primary" onClick = {this.reset}>Reset</Button>
                    </div>
                    </div>
                </div>               
            </div>
        )
    }
}



export default CountdownTimer