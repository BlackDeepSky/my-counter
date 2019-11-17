import React from 'react';
import './App.css';
import Display from './Display';
import Buttons from './Buttons';
import DisplaySet from './DisplaySet';
import {connect} from "react-redux";


class App extends React.Component {

    // componentDidMount() {
    //     this.restoreState()
    // }
    //
    //
    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.props);
    //     localStorage.setItem("my-state", stateAsString)
    // };
    //
    // restoreState = () => {
    //     let state = {
    //         numberActive: null,
    //         maxNumber: null,
    //         numberReset: 0,
    //         devilNumber: false,
    //         startValue: null,
    //         maxValue: null
    //     };
    //     let stateAsString = localStorage.getItem("my-state");
    //     if (stateAsString !== null) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     this.setState(state);
    // };

    setCurrentValue = (startValue, maxValue) => {
        if (startValue === 6 && maxValue === 6) {
            this.props.setCurrentValue(startValue, maxValue, true)
        } else {
            this.props.setCurrentValue(startValue, maxValue, false)
        }
    };

    getMaxValue = (e) => {
        let newMaxNumber = parseInt(e.currentTarget.value);
        this.props.getMaxValue(newMaxNumber);
    };

    getCurrentValue = (e) => {
        let newNumberActive = parseInt(e.currentTarget.value);
        this.props.getCurrentValue(newNumberActive);
    };
    setCurrentDisplay = (a) => {
        this.props.showSetDisplay(a)
    };
    render = () => {
        const {numberActive, maxNumber, startValue, maxValue, showDisplay} = this.props;

        return (
            <div className="App">

                {showDisplay && <DisplaySet numberActive={numberActive} maxNumber={maxNumber}
                                            startValue={startValue} maxValue={maxValue}
                                            setCurrentValue={this.setCurrentValue} getMaxValue={this.getMaxValue}
                                            getCurrentValue={this.getCurrentValue}
                                            setCurrentDisplay={this.setCurrentDisplay}/>
                }

                {!showDisplay && <div className="mainContainer">

                    <div className="settingIcon" onClick={() => {
                        this.setCurrentDisplay(true)
                    }}><img src="https://img.icons8.com/dusk/64/000000/gear.png"></img></div>
                    <Display numberActive={numberActive} maxNumber={maxNumber}
                             devilNumber={this.props.devilNumber}/>
                    <div className="mainButtons">
                        <Buttons addCounter={this.props.addCounterNumber} restCounter={this.props.resetNumber}
                                 numberActive={numberActive} maxNumber={maxNumber}/>
                    </div>
                </div>
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return state;
};
const mapDispatcnToProps = (dispatch) => {
    return {
        getCurrentValue: (numberActive) => {
            const action = {
                type: "CURRENT_VALUE",///////обьединить методы
                numberActive,
                startValue: numberActive
            };
            dispatch(action)
        },
        getMaxValue: (maxValue) => {
            const action = {
                type: "MAX_VALUE",////////обьединить методы
                maxValue,
                maxNumber: maxValue
            };
            dispatch(action)
        },
        addCounterNumber: (numberActive, maxNumber) => {
            const action = {
                type: "ADD_COUNTER",
                numberActive,
                maxNumber
            };
            dispatch(action)
        },
        resetNumber: (numberReset) => {
            const action = {
                type: "RESET_NUMBER",
                numberReset
            };
            dispatch(action)
        },
        setCurrentValue: (startValue, maxValue, obj) => {
            const action = {
                type: "SET_CURRENT_VALUE",
                numberActive: startValue,
                maxNumber: maxValue,
                obj
            };
            dispatch(action)
        },
        showSetDisplay: (showDisplay) => {
            const action = {
                type: "SHOW_SET_DISPLAY",
                showDisplay
            };
            dispatch(action)
        }
    }

};


const ConnectedApp = connect(mapStateToProps, mapDispatcnToProps)(App);

export default ConnectedApp;
