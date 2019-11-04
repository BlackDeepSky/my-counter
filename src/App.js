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
        debugger
        if (startValue === 6 && maxValue === 6) {
            this.props.setCurrentValue(startValue, maxValue, true)
        }
        else {
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

    render = () => {
        const { numberActive, maxNumber, startValue, maxValue} = this.props;
        return (
            <div className="App">

                <DisplaySet numberActive={numberActive} maxNumber={maxNumber}
                            startValue={startValue} maxValue={maxValue}
                            setCurrentValue={this.setCurrentValue} getMaxValue={this.getMaxValue}
                            getCurrentValue={this.getCurrentValue}/>
                <div className="mainContainer">
                    <Display numberActive={numberActive} maxNumber={maxNumber}
                             devilNumber={this.props.devilNumber}/>
                    <div className="mainButtons">
                        <Buttons addCounter={this.props.addCounterNumber} restCounter={this.props.resetNumber}
                                 numberActive={numberActive} maxNumber={maxNumber}/>
                    </div>
                </div>

            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return state;
};
const mapDispatcnToProps = (dispatch) =>{
    return{
        getCurrentValue: (numberActive) => {
            const  action = {
                type: "CURRENT_VALUE",
                numberActive,
                startValue: numberActive
            };
            dispatch(action)
        },
        getMaxValue: (maxValue) => {
            const  action = {
                type: "MAX_VALUE",
                maxValue,
                maxNumber: maxValue
            };
            dispatch(action)
        },
        addCounterNumber: (numberActive, maxNumber) => {
            const  action = {
                type: "ADD_COUNTER",
                numberActive,
                maxNumber
            };
            dispatch(action)
        },
        resetNumber: (numberReset) => {
            const  action = {
                type: "RESET_NUMBER",
                numberReset
            };
            dispatch(action)
        },
        setCurrentValue: (startValue, maxValue, obj) => {
            const  action = {
                type: "SET_CURRENT_VALUE",
                numberActive: startValue,
                maxNumber: maxValue,
                obj
            };
            dispatch(action)
        }
    }

};


const ConnectedApp = connect(mapStateToProps,mapDispatcnToProps)(App);

export default ConnectedApp;
