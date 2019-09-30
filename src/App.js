import React from 'react';
import './App.css';
import Display from './Display';
import Buttons from './Buttons';
import DisplaySet from './DisplaySet';

class App extends React.Component {

    componentDidMount() {
        this.restoreState()
    }

    state = {

    };

    saveState = () => {
let stateAsString = JSON.stringify(this.state);
localStorage.setItem("my-state", stateAsString)
    };

    restoreState = () => {
      let state = {
          numberActive: null,
          maxNumber: null,
          numberReset: 0,
          devilNumber: false
      };
      let stateAsString = localStorage.getItem("my-state");
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
      this.setState(state);
    };

    setCurrentValue = (startValue, maxValue) => {
        this.setState(currentValue => {
                if (startValue===6 && maxValue === 6) {
                    return {
                        numberActive: startValue,
                        maxNumber: maxValue,
                        devilNumber: true
                    }
                } else {
                    return {
                        numberActive: startValue,
                        maxNumber: maxValue,
                        devilNumber: false
                    }
                }
            },this.saveState
        )
    };

    addCounter = () => {
        this.setState(nextCounter => {
                if (this.state.numberActive === this.state.maxNumber) {
                    return {
                        numberActive: nextCounter.maxNumber
                    }
                } else {
                    return {
                        numberActive: nextCounter.numberActive + 1
                    }
                }
            }
        )
    };

    restCounter = () => {
        this.setState(
            {numberActive: this.state.numberReset}
        )
    };

    render = () => {
        return (
            <div className="App">

                    <DisplaySet numberActive={this.state.numberActive} maxNumber={this.state.maxNumber}
                                setCurrentValue={this.setCurrentValue}/>


                <div className="mainContainer">
                    <Display numberActive={this.state.numberActive} maxNumber={this.state.maxNumber} devilNumber={this.state.devilNumber}/>
                    <div className="mainButtons">
                        <Buttons addCounter={this.addCounter} restCounter={this.restCounter}
                                 numberActive={this.state.numberActive} maxNumber={this.state.maxNumber}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
