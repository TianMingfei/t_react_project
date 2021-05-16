import React, { Component } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import './style.css'

export default class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "title",
            content: 'content'
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("http://www.dell-lee.com/react/api/detail.json?id=" + id)
        .then (res => {
            this.setState({
                title: res.data.data.title,
                content : res.data.data.content
            });
        })
    }

    render() {
        return (
            <div className="site-card-border-less-wrapper">
    <Card title={this.state.title} bordered={false}>
      <div className="detail" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
    </Card>
  </div>
        )
    }
}