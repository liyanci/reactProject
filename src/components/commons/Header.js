import React from 'react';
import '../../less/main.less';
import '../../less/s_head.less';
import {connect} from 'react-redux';
class Header extends React.Component{
	render(){
		return (
			<div className="head" >
				<div className="imgBox">
					<a><img src={require('../../images/list-icon.png')}/></a>
				</div>
				<span className="center_logo"><img src={require('../../images/logo2.png')}/></span>
				<div className="right_box">
				<a><img src={require('../../images/search_icon.png')}/></a>
				<a><img src={require('../../images/cart_icon.png')}/></a></div>
			</div>
		)
		
	}
}
let mapStateToProps = state =>{
	return{
		headStatus:state.commonReducer.headStatus
	}
}
Header = connect(mapStateToProps)(Header)
export default Header