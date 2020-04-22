import React from 'react';
import './App.css';

class DisplaySet extends React.Component {

    render = () => {
        let disableButton = (this.props.startValue === this.props.maxValue || this.props.startValue < 0 || this.props.maxValue <= 0
            || this.props.startValue > this.props.maxValue) && (this.props.startValue !== 6 || this.props.maxValue !== 6);

        let unsuitableConditions = disableButton ? "mainSetDisplayDisabledInput" : "mainSetDisplayInput";

        return (
            <div className="mainSetContainer">
                <div className="settingIcon" onClick={()=>{this.props.setCurrentDisplay(false)}}><img src="https://img.icons8.com/dusk/64/000000/gear.png"/></div>
                <div className="mainSetDisplay">
                    <div className="value">Start value</div>
                    <input className={unsuitableConditions} type="number" onChange={this.props.getCurrentValue}
                           value={this.props.startValue}/>
                    <div className="value">Max value</div>
                    <input className={unsuitableConditions} type="number" onChange={this.props.getMaxValue}
                           value={this.props.maxValue}/>
                </div>

                <div className="mainButtons">
                    <div className="buttons">
                        <button disabled={disableButton} onClick={() => {
                            this.props.setCurrentValue(this.props.startValue, this.props.maxValue);
                            this.props.setCurrentDisplay(false)
                        }}>Set
                        </button>
                        <button onClick={() => {
                            localStorage.clear()
                        }}>Clear
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplaySet;
