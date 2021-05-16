import React, { Component } from 'react'
import { List } from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios'
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

export default class PageList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            id: 1
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("http://www.dell-lee.com/react/api/list.json?id=" + id)
        .then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) { // Rarely Used
        const id = nextProps.match.params.id;
        if (nextProps.match.params.id !== prevState.id) {
            return {
                id: nextProps.match.params.id
            }
        }
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            const id = this.props.match.params.id;
            axios.get("http://www.dell-lee.com/react/api/list.json?id=" + id)
            .then(res => {
            this.setState({
                data: res.data.data
            })
        })
        }
    
    }

    render() {
        return (
            <List style={{background: '#fff'}}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
        <List.Item>
          <Link to={`/detail/${item.id}`}>{item.title}</Link> 
        </List.Item>
      )}
    />
        )
    }
}
