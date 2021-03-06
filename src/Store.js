import {createStore} from 'redux'
// import {data} from './Reducer'

function counterReducer(state=0, action) {
    switch (action.type) {
        case "ADD":
            return state + 1
        case "MINUS":
            return state - 1
        default:
            return state
            break;
    }
}

const store = createStore(counterReducer)

export default store