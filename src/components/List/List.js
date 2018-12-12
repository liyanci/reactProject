import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import {tabbar} from '../../actions';
import {connect} from 'react-redux';

class List extends Component{
    componentWillMount(){
    	this.props.changeTabbarStatus(false)
    	
    }
    componentWillUnmount(){
    	this.props.changeTabbarStatus(true)
    }
    render(){
    	return 11
      
    }
}
let mapDispatchToProps = dispatch =>{
	return{
		changeTabbarStatus(status){
			dispatch(tabbar(status))
		}
	}
}
List=connect(null,mapDispatchToProps)(List)
export {List};