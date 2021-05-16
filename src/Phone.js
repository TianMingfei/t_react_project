import React, { Component } from 'react'

export default class Phone extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

    }

    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                哈哈哈Phone
            </div>
        )
    }
}
