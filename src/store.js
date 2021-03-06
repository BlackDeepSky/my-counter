import { createStore } from 'redux'

const initialState = {
    // counter: []
    showDisplay: null
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CURRENT_VALUE':
            return{
                ...state,
                startValue: action.startValue
            };
        case 'RESET_NUMBER':
            return{
                ...state,
                numberActive: state.startValue
            };
        case 'MAX_VALUE':
            return{
                ...state,
                maxValue: action.maxValue,
            };
        case 'SET_CURRENT_VALUE':
            return{
                ...state,
                numberActive: state.startValue,
                maxNumber: state.maxValue,
                devilNumber: action.obj
            };
        case 'ADD_COUNTER':
            return {
                ...state,
                numberActive: state.numberActive + 1
        };
            case 'SHOW_SET_DISPLAY':
            return {
                ...state,
                showDisplay: action.showDisplay
        };
        default: return state
    }
};

const store = createStore(reducer);


export default store;