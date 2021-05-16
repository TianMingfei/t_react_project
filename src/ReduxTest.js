import React, { Component } from 'react'
import {store} from './Store'
import * as action from './Action'

export default class ReduxTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            num:store.getState()
        }

    }

    componentDidMount() {
        store.subscribe(()=>{this.setState({
            num:store.getState()
        })})
    }

    render() {
        return (
            <div>
                home ===  {this.state.num}
                <button onClick={()=>{store.dispatch(action.add(1) )}}>加</button>
                <button onClick={()=>{store.dispatch(action.minus(1) )}}>减</button>
            </div>
        )
    }
}
