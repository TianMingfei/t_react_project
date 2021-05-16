import * as action from './Action'
var obj = [
    {name:"xixi",age:18}
]

export function data(state=obj[0].age, action) {
    switch (action.type) {
        case "ADD":
            return state + action.data
        case "MINUS":
            return state - action.data
        default:
            return state
            break;
    }
}