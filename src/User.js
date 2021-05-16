import React, { Component } from 'react'

export default class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

    }

    componentDidMount() {
        console.log(this.props.location.query.name)
    }

    render() {
        return (
            <div>
                HAHAHA  User
            </div>
        )
    }
}
