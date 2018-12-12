import React,{Component} from 'react';

import {Switch,Route} from 'react-router-dom';


class Goods extends Component{
    constructor(){
        super();
        this.state = {
            goods:{

            }
        }
    }
    componentWillMount(){
    	console.log('goodsprops:',this.props)
    }
    render(){
       return 233
    }
}

export {Goods}