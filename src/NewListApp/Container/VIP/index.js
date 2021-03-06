import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class Index extends Component {
    constructor(props) {
		super(props);
		this.state = {
			login: true,
			fetchFinish: false
		}
	}

	render() {
		if (this.state.login) {
			if (this.state.fetchFinish) {
				return <div className='vip'>Vip</div>
			}else {
				return <div className='vip'>正在判断用户登陆状态...</div>
			}
		}else {
			return <Redirect to='/' />
		}
	}

	componentDidMount() {
		axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
			withCredentials: true
		})
			.then(res => {
				const login = res.data.data.login;
				this.setState({
					login,
					fetchFinish: true
				})
			})
	}
}
