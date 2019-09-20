import React from 'react';
import './App.css';

class Display extends React.Component {
    render = () => {

        let maxSize = this.props.numberActive === this.props.maxNumber ? "maxNumberDisplay": "display";

        return (
            <div className="mainDisplay">
                <div className={maxSize}>{this.props.numberActive}</div>
            </div>
        );
    }
}

export default Display;
