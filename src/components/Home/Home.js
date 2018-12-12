import React, { Component } from 'react';
import {Smbanner} from '../commons/Smbanner';
import axios from 'axios';
import '../../less/main.less';
import '../../less/s_home.less';
import {Smain} from '../commons/Smain';
import { Carousel, WingBlank } from 'antd-mobile';
class Home extends Component{
	constructor(){
		super();
		this.state={
			data: [
				{
					id:1,
					imgUrl:require('../../images/banner01.jpg')
				},
				{
					id:2,
					imgUrl:require('../../images/banner02.jpg')
				},
				{
					id:3,
					imgUrl:require('../../images/banner03.jpg')
				}
			],
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
			data3:'',
			page:1
		}
	}
	
	componentWillMount(){
	}
	render(){
		return(
			<div className="contain">
			      <WingBlank>
			        <Carousel
			          autoplay={true}
			          infinite
			        >
			          {this.state.data.map(goods => (
			            <a
			              key={goods.id}
			              href="#"
			              style={{ display: 'inline-block', width: '100%', height:'6.6rem' }}
			            >
			              <img
			                src={goods.imgUrl}
			                style={{ width: '100%', height:'6.6rem', verticalAlign: 'top' }}
			                onLoad={() => {
			                  window.dispatchEvent(new Event('resize'));
			                }}
			              />
			              
			            </a>
			          ))}
			        </Carousel>
			      </WingBlank>
			      <div className="main01"></div>
			      <div className="main02"></div>
			      <div className="main03"></div>
			      <Smain></Smain>
			      
			</div>
    	)
  	}
	}
export {Home};
