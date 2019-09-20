import React from 'react';
import './App.css';

class Buttons extends React.Component {
    render = () => {

        return (
            <div className="buttons">
                <button onClick={() => {
                    this.props.addCounter()}}>Add
                </button>
                <button onClick={()=>{this.props.restCounter()}}>Reset
                </button>
            </div>
        );
    }
}

export default Buttons;
