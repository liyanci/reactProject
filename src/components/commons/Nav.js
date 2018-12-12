import React from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';
import { Tabs, WhiteSpace } from 'antd-mobile';
import {connect} from 'react-redux';
import 'antd-mobile/dist/antd-mobile.css';
import '../../less/main.less';
import '../../less/s_home.less';
import {Home} from '../Home/Home';
import {Women} from '../Women/Women';
import {Man} from '../Man/Man';
import {Package} from '../Package/Package';
import {Shoes} from '../Shoes/Shoes';
import {Clock} from '../Clock/Clock';
import {Child} from '../Child/Child';
import {Shoppe} from '../Shoppe/Shoppe';

class Nav extends React.Component{
	constructor(){
    	super();
		this.state = {
			tabs:[
				  { 
				  	title: '推荐',
				  	path:'/home',
				  	id:'0'
				  },
				  { 
				  	title: '女士',
				  	path:'/women',
				  	id:'1'
				  },
				  { 
				  	title: '男士',
				  	path:'/man',
				  	id:'2'
				  	
				  },
				  { 
				  	title: '包袋',
				  	path:'/package',
				  	id:'3'
				  	
				  },
				  { 
				  	title: '鞋靴',
				  	path:'/shoes',
				  	id:'4'
				  },
				  { 
				  	title: '腕表',
				  	path:'/clock',
				  	id:'5'
				  },
				  { 
				  	title: '儿童',
				  	path:'/child',
				  	id:'6'
				  },
				  { 
				  	title: '专柜',
				  	path:'/shoppe',
				  	id:'7'
				  },
			],
			currentTab:0
		}
	}
	handlerClick(idx,path){
		this.setState({
			currentTab:idx
		})
		this.props.history.push(path);
//		console.log(this.props)
	}
	componentDidMount(){
		let nav=document.getElementsByClassName('navList')[0];
		if(this.props.headStatus===false){
			nav.style.display="none";
		}
		else{
			nav.style.display="block";
		}
	}
	render(){
		return(
			<div className="navList">
				 
	    		<Tabs tabs={this.state.tabs}
	    			  tabBarActiveTextColor="black"
				      initialPage={0}
				      onChange={(tab, index) => {  }}
				      onTabClick={(tab, index) => { 
				      	this.state.currentTab = index;
				      	this.handlerClick(index,tab.path)
				      }}
				    >
				</Tabs>
				<div className="content">
	                <Switch>
	                	<Route path="/home" component={Home} />	
	                    <Route path="/women" component={Women} />
	                    <Route path="/man" component={Man} />
	                    <Route path="/package" component={Package} />
	                    <Route path="/shoes" component={Shoes} />
	                    <Route path="/clock" component={Clock} />
	                    <Route path="/child" component={Child} />
	                    <Route path="/shoppe" component={Shoppe} />
	                </Switch>
	            </div>
			</div>
			
		)
	}
}
let mapStateToProps = state =>{
	console.log(state);
	return{
		headStatus:state.commonReducer.headStatus
	}
}
Nav = connect(mapStateToProps)(Nav);
Nav = withRouter(Nav);
export {Nav};