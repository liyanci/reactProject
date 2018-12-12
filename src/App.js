import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import Header from './components/commons/Header';
import {Home} from './components/Home/Home';
import {Nav} from './components/commons/Nav';
import {List} from './components/List/List';
import {Goods} from './components/Goods/Goods';
import {Pinpai} from './components/Pinpai/Pinpai';
import {My} from './components/My/My';
import {Detail} from './components/Detail/Detail';
import {NotFound} from './components/NotFound';
import Axios from 'axios';

Axios.defaults.baseURL= 'http://localhost:4004';

class App extends Component {
	constructor(){
		super();
		this.state={
			go:[
				{
				title: '首页',
				  path:'/home',
				  id:'0',
				  iconPosition:'center -5px',
				  selectedPositon:'center -41px'
				  
				},
				{
				  title: '分类',
				  path:'/list',
				  id:'1',
				  iconPosition:'center -78px',
				  selectedPositon:'center -114px'
				},
				{
					title: '编辑精选',
				  path:'/goods',
				  id:'2',
				  iconPosition:'center -149px',
				  selectedPositon:'center -185px'
				},
				{
					title: '购物车',
				  path:'/pinpai',
				  id:'3',
				  iconPosition:'center -223px',
				  selectedPositon:'center -260px'
				},
				{
					title: '我的',
				  path:'/my',
				  id:'4',
				  iconPosition:'center -295px',
				  selectedPositon:'center -331px'
				}
			],
			currentTab:0
		}
	}
	 handlerClick(idx,path){
      this.setState({
          currentTab:idx
      });

      
      this.props.history.push(path);

  }
	 componentWillMount(){
      
      let hash = window.location.hash.slice(1);//#list

      let currentTab = 0
      this.state.go.some((item,idx)=>{
          currentTab = idx;
          return item.path === hash
      });

      this.setState({
          currentTab
      });

      console.log('app props:',this.props)
  }
  render() {
    return (
      <div className="App">
      	<Header/>
      	<Nav/>
      	<div className="content">
	        <Switch>
	            <Route path="/list" component={List} />
	            <Route path="/goods" component={Goods} />
	            <Route path="/pinpai" component={Pinpai} />
	            <Route path="/my" component={My} />
	            <Route path="/detail/:id" component={Detail} />
	            <Route path="/404" component={NotFound} />
	            <Redirect from="/" to="/home" exact/>
	        </Switch>
        </div>
        <TabBar
		        tintColor="#333"
		        noRenderContent={true}
		        hidden={!this.props.tabbarStatus}
		        >
		        {    this.state.go.map((tab,idx)=>{
	                return( <TabBar.Item
                    title={tab.title}
                    key={tab.id}
                   	icon={
              			<div className="smIcon" style={{
                					width: '32px',
                					height: '22px',
                					backgroundSize:'100%',
                					backgroundPosition:tab.iconPosition
                					}}
              						/>}
                    selectedIcon={<div style={{
                					width: '32px',
                					height: '22px',
                					backgroundImage: 'url(' + '/static/media/nav-icon2.4bda384c.png'+ ')',
                					backgroundSize:'100%',
                					backgroundPosition:tab.selectedPositon,
                					color:'#000'
                				}}
              						/>}
                    selected={this.state.currentTab === idx}
                    onPress={this.handlerClick.bind(this,idx,tab.path)}
                    /*badge={tab.path == '/cart' ? this.props.cartQty : null}*/
                    >
                    {tab.title}
                    </TabBar.Item>)
		            })
		        } 
                
        </TabBar>
      </div>
    )
  }
}
let mapStateToProps = state =>{
	console.log(state);
	return{
		tabbarStatus:state.commonReducer.tabbarStatus
	}
}
App = connect(mapStateToProps)(App);
App = withRouter(App);
export default App;
