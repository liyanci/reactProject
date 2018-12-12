import React, { Component } from 'react';
import {Smbanner} from './Smbanner';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import '../../less/main.less';
import '../../less/s_home.less';
import { Carousel, WingBlank,Grid } from 'antd-mobile';

class Smain extends Component{
	constructor(){
		super();
		this.state={
			data2:[
				{
					mid:1,
					imgUrl:require('../../images/main04.jpg'),
					name:'BALMAIN',
					info:'高级定制夹克'
				},
				{
					mid:2,
					imgUrl:require('../../images/main05.jpg'),
					name:'“Rock Gangster”起势摇滚',
					info:'MO&Co.2018冬季新品 酷范上新'
				},
				{
					mid:3,
					imgUrl:require('../../images/main06.jpg'),
					name:'TOPSHOP',
					info:'清爽连衣裙  2件7折'
				},
				{
					mid:4,
					imgUrl:require('../../images/main07.jpg'),
					name:'MICHAEL MICHAEL KORS',
					info:'轻奢短靴'
				},
				{
					mid:5,
					imgUrl:require('../../images/main08.jpg'),
					name:'GUCCI',
					info:'今冬必备丝绒系列'
				},
				{
					mid:6,
					imgUrl:require('../../images/main09.jpg'),
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
			data3:[],
			page:2
		}
		this.handlerGotoDetails = this.handlerGotoDetails.bind(this);
	}
	
	componentWillMount(){
	  axios.get('/api/',{
	   	params:{
	   		page:this.state.page,
	   		order_by:'',
	   		ajax:1,
	   		_:Date.now()
	   	}
	   }).then(res =>{
	   	let data = res.data.r;
	   	this.setState({
	   		data3:this.state.data3.concat(data)
	   	});
	   	console.log(this.state.data3)
	   })
	   
	}
	
	componentDidMount(){
		let pageIndex=this.state.page;
		clearTimeout(timer);
		let timer = setTimeout(()=>{
			window.addEventListener('scroll', this.handleScroll.bind(this,pageIndex));
			},2000);
			
	}
	
	handleScroll(pageIndex){
		let h =document.documentElement.scrollTop;
	    let h2=document.documentElement.scrollHeight-window.innerHeight-5;
	    if(h>h2){
	    	this.setState({
	   			page:this.state.page+1
	   		});
	   		//http://m.tyigui.com/?page=3&order_by=&ajax=1&_=1544231143220
	   			axios.get('/api/',{
				   	params:{
				   		page:this.state.page,
				   		order_by:'',
				   		ajax:1,
				   		_:Date.now()
				   	}
				   }).then(res =>{
				   	let data = res.data.r;
				   	this.setState({
				   		data3:this.state.data3.concat(data)
				   	})
			   	console.log(this.state.data3)
			   })
	   		
	   		console.log(this.state.page)
	   		
	    }
	    else{
	    	console.log(222)
	    }
	    
	}
	handlerGotoDetails(goods){
        //获取history
        let {history} = this.props;
        console.log(goods);
        history.push({
            pathname:'/detail/'+goods.id,
            state:goods
        });
    }
	render(){
		return(
			<div className="contain">
			      <Smbanner></Smbanner>
			      <div className="uLike"><p>猜你喜欢</p></div>
			      {
			      	this.state.data2.map(main => (
			      		<div className="mainPart" key={main.mid}>
			      			<img src={main.imgUrl} />
			      			<div className="text">
			      				<h3>{main.name}</h3>
			      				<p>{main.info}</p>
			      			</div>
			      		</div>
			      	))
			      }
			      <div className="more">
			      	<div className="more01">新品到货</div>
			      	<div className="more02"><a>更多></a></div>
			      </div>
			      <Smbanner></Smbanner>
			     <Grid
		            data={this.state.data3}
		            columnNum={2} 
		            activeClassName="active" 
		            itemStyle={{height:'7rem'}}
		            renderItem={(goods,idx)=>{
		                return(
                    <div onClick={this.handlerGotoDetails.bind(this,goods)} className="recommend_item-box">
                    	<a>
	                       <div className="item-pic">
	                       		<img src={goods.img}/>
	                       </div>
	                       <div className="item-info">
	                       		<h5  className="item-name">{goods.nick}</h5>
	                       		<p className="item-desc">{goods.title}</p>
	                       </div>
                    	</a>
                    </div>
		                )
		            }}
		            
	            />
			</div>
    	)
  	}
	}
Smain = withRouter(Smain);
export {Smain};
