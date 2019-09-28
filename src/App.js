import React from 'react';
import './App.css';
import Display from './Display';
import Buttons from './Buttons';
import Button from './Button'
import DisplaySet from './DisplaySet';

class App extends React.Component {

  state ={
    numberActive: 0,
      maxNumber: 5,
      numberReset: 0
};


  getCurrentValue = (e) => {
      let newNumberActive = parseInt(e.currentTarget.value);
      this.setState({
          numberActive: newNumberActive
      })
  };
    getMaxValue = (e) => {
        let newMaxNumber = parseInt(e.currentTarget.value);
        this.setState({
            maxNumber: newMaxNumber
        })
    };

 addCounter = () => {
this.setState(nextCounter =>{
    if(this.state.numberActive===this.state.maxNumber){
        return{
            numberActive: nextCounter.maxNumber
        }
    }
    else {
        return {
            numberActive: nextCounter.numberActive + 1
        }
    }
}
)
 };

 restCounter = () =>{
this.setState(
    {numberActive: this.state.numberReset}
)
 };
    render = () => {
        return (
            <div className="App">
                <div className="mainSetContainer">
                    <DisplaySet getCurrentValue={this.getCurrentValue} getMaxValue={this.getMaxValue}
                                numberActive={this.state.numberActive} maxNumber={this.state.maxNumber}/>
                    <div className="mainButtons">
                        <Button numberActive={this.state.numberActive} maxNumber={this.state.maxNumber}/>
                    </div>
                </div>

                <div className="mainContainer">
                    <Display numberActive={this.state.numberActive} maxNumber={this.state.maxNumber}/>
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
