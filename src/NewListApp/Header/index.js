import React, { Component } from 'react'
import logo from './logo.svg'
import './style.css'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import Icon, {
    GithubFilled,
    AlipayCircleFilled,
    WechatFilled,
    WeiboCircleFilled,
    AppleFilled,
    AndroidFilled,
  } from '@ant-design/icons';
import axios from 'axios'


export default class AppHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                id:1,
                icon: <GithubFilled/>,
                title: "111"
                },
                {
                    id:2,
                    icon: <AlipayCircleFilled/>,
                    title: "222"
                },
                    {
                        id:3,
                        icon: <WechatFilled/>,
                        title: "333"
                },
                {
                            id:4,
                            icon: <WeiboCircleFilled/>,
                            title: "444"
                },
                {
                    id: 5,
                    icon: <AppleFilled/>,
                    title: "555"
                },
                {
                    id: 6,
                    icon: <AndroidFilled/>,
                    title: "666"
                }
        ]
        }

    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json') 
        .then((res) => {
            console.log(res.data.data);
            this.setState({
                list: res.data.data
            })
        })
    }

    getMenuItems() {
        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id}>
                    <Link to={`/${item.id}`}>
                        {item.icon}{item.title}
                    </Link>
                    
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <Link to='/'>
                    <img className="app-header-logo" src={logo} alt="logo"/>
                </Link>
                
                    <Menu mode="horizontal" className="app-header-menu">
                        {/* <Menu.Item key="mail1">
                            <GithubFilled />Github
                        </Menu.Item>
                        <Menu.Item  key="mail2">
                            <AlipayCircleFilled />支付宝
                        </Menu.Item>
                        <Menu.Item  key="mail3">
                            <WechatFilled />微信
                        </Menu.Item>
                        <Menu.Item  key="mai4">
                            <WeiboCircleFilled />微博
                        </Menu.Item>
                        <Menu.Item  key="mai5">
                            <AppleFilled />Apple
                        </Menu.Item>
                        <Menu.Item  key="mail6">
                            <AndroidFilled />Android
                        </Menu.Item> */}
                        {this.getMenuItems()}
                    </Menu>
            </div>
            

        )
    }
}
