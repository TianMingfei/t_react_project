import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';
import './style.css'

import AppHeader from './Header/index'
import PageList from './Container/List'
import Detail from './Container/Detail'
import Login from './Login'
import VIP from './Container/VIP'

const { Header, Footer, Sider, Content } = Layout;

function App(props) {

  return (
    <BrowserRouter>
    <Layout style={{minWidth: 1300, height:'100%'}}>
      <Header className='header'>
        <AppHeader />
      </Header>
      <Content className='content'>
          <Login></Login>
          <Switch>
            <Route path="/VIP" component={VIP}></Route>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/:id?" component={PageList}/>
          </Switch>
          
        
      </Content>
      <Footer className='footer'>@copyright Tian</Footer>
    </Layout>
    </BrowserRouter>
  )

}