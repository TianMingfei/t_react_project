import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Home';
import ReactReduxPage from './ReactReduxPage/ReactReduxPage'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './Store'

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxPage/>
  </Provider>,
  
  document.getElementById('root')
);


class Welcome extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          list : [
              {
                  title: "第一节",
                  content :"操作事件",
              },
              {
                  title: "第二节",
                  content:"数据传递"
              },
              {
                  title:"第三节",
                  content:"条件渲染"
              }
          ]
      }
  }
  
  render() {

      let listArr = this.state.list.map((item, index)=>{
        return (
           <ListItem2 key={index} data={item} index={index}></ListItem2>
        )
      }
      )


      return (
          <div>
              <h1>今天课程内容</h1>
              <ul>
                  {listArr}
              </ul>
          </div>
      )
  }
}

function ListItem(props) {
  return (
    <li>
              <h3>{props.index}:{props.data.title}</h3>
              <p>{props.index}:{props.data.content}</p>
    </li>
  )
}

class ListItem2 extends React.Component {
  constructor(props) {
    super(props)

    this.handleLi = this.handleLi.bind(this)

  }

  handleLi() {
    alert(this.props.data.content)
  }

  render() {
    return (
    <li onClick={this.handleLi}>

              <h3>{this.props.index}:{this.props.data.title}</h3>
              <p>{this.props.index}:{this.props.data.content}</p>
    </li>
    )
  }

}

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      status: true
    };
    this.changeShow = this.changeShow.bind(this);
  }

  changeShow() {
    this.setState ({
      status: !this.state.status 
    });

  }

  render () {
    return (
      
      <div>
        
        <button onClick={this.changeShow}>{this.state.status?'on':'off'}</button>
        
      </div>
    );
  }
}
