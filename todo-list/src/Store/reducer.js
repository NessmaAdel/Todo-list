
import { combineReducers } from 'redux';

const initialState = {
    todo: {},
    completed: false

};


function showCompleted(state = initialState.completed, action) {
    switch (action.type) {
        case 'SHOW_COMPLETED':
            return action.completed;
        default:
            return state;
    }
}

const reducer = combineReducers({ showCompleted });

export default reducer;
