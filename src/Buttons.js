import React from 'react';
import './App.css';

class Buttons extends React.Component {
    render = () => {
        let disableButton = this.props.numberActive === this.props.maxNumber || this.props.maxNumber < this.props.numberActive || this.props.numberActive > this.props.maxNumber ? true : false;
        return (
            <div className="buttons">
                <button disabled={disableButton} onClick={() => {
                    this.props.addCounter()
                }}>Add
                </button>
                <button onClick={() => {
                    this.props.restCounter()
                }}>Reset
                </button>
            </div>
        );
    }
}

export default Buttons;
