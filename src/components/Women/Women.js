import React, { Component } from 'react';
import {Smbanner} from '../commons/Smbanner';
import {Smain} from '../commons/Smain';
import axios from 'axios';
import '../../less/main.less';

import '../../less/s_home.less';
import '../../less/s_women.less';
import { Carousel, WingBlank } from 'antd-mobile';
class Women extends Component{
	constructor(){
		super();
		this.state={
			data2:[
				{
					mid:1,
					imgUrl:require('../../images/women_main01.jpg'),
					name:'BALMAIN',
					info:'高级定制夹克'
				},
				{
					mid:2,
					imgUrl:require('../../images/women_main04.jpg'),
					name:'“Rock Gangster”起势摇滚',
					info:'MO&Co.2018冬季新品 酷范上新'
				},
				{
					mid:3,
					imgUrl:require('../../images/women_main03.jpg'),
					name:'TOPSHOP',
					info:'清爽连衣裙  2件7折'
				},
				{
					mid:4,
					imgUrl:require('../../images/women_main05.jpg'),
					name:'MICHAEL MICHAEL KORS',
					info:'轻奢短靴'
				},
				{
					mid:5,
					imgUrl:require('../../images/women_main06.jpg'),
					name:'GUCCI',
					info:'今冬必备丝绒系列'
				},
				{
					mid:6,
					imgUrl:require('../../images/women_main07.jpg'),
					name:'月末直降 现货极速达',
					info:'SWAROVSKI/PANDORA 经典饰品 轻松入手 '
				},
				{
					mid:7,
					imgUrl:require('../../images/main10.jpg'),
					name:'周末欢乐购',
					info:'大牌599起购'
				},
				{
					mid:8,
					imgUrl:require('../../images/main11.jpg'),
					name:'SPA般的洁肤体验',
					info:'低至5折'
				}
			],
			data3:'',
			page:1
		}
	}
	
	componentWillMount(){
	   axios.get('/jxapi/recommend/scroll',{
	   	params:{
	   		pageIndex:this.state.page
	   	}
	   }).then(res =>{
	   	let data = res.data;
	   	this.setState({
	   		data3:this.state.data3+data,
	   		
	   	});
	   })
	}
	componentWillUpdata(){
		
		/*let h =document.documentElement.scrollTop;
	    let h2=document.documentElement.scrollHeight-window.innerHeight-100;
	    if(h>h2){
	    	console.log(111);
			
	   	
	   }
	    else{
	    	console.log(222)
	    }*/
	}
	render(){
		return(
			<div className="contain">
			      <div className="banner2-01"></div>
			      <Smain></Smain>
			      
			</div>
    	)
  	}
	}
export {Women};
