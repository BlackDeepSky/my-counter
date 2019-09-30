import React from 'react';
import './App.css';

class Display extends React.Component {
    render = () => {

        let maxSize = this.props.numberActive === this.props.maxNumber ? "maxNumberDisplay" : "display";

        return (
            <div className="mainDisplay">
                <div className={maxSize}>{this.props.numberActive}
                {this.props.devilNumber && <div className="number666">Welcome to hell!(666)</div>}
                </div>
            </div>
        );
    }
}

export default Display;
