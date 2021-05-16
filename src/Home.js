import React, { Component } from 'react'
import axios from 'axios'



export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            arr:[]
        }

    }

    componentDidMount() {
        axios.get("http://localhost:4000/arr").then((ok)=>{
            this.setState({
                arr:ok.data
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }


    render() {
        
        return (
            <div>
                你好
                {
                    this.state.arr.map((item, index)=>{
                    return <p key={index}>
                        <li>{item.id}</li>
                    <li>{item.name}</li>
                    </p>
                    }
                    )
                }
                
            </div>
        )
    }
}
