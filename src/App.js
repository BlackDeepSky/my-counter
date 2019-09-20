import React from 'react';
import './App.css';
import Display from './Display';
import Buttons from './Buttons';

class App extends React.Component {

  state ={
    numberActive: 0,
      maxNumber: 5,
      numberReset: 0
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
                <div className="mainContainer">

                   <Display numberActive={this.state.numberActive} maxNumber={this.state.maxNumber}/>

                    <div className="mainButtons">
                    <Buttons addCounter={this.addCounter} restCounter={this.restCounter}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
