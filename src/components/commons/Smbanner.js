import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
class Smbanner extends React.Component{
	constructor(){
		super();
		this.state={
			data: [
				{
					id:1,
					imgUrl:require('../../images/smbanner1-1.jpg'),
					name:'BURBERRY',
					price:'￥18761'
				},
				{
					id:2,
					imgUrl:require('../../images/smbanner1-2.jpg'),
					name:'MCCARTNEY',
					price:'￥1464'
				},
				{
					id:3,
					imgUrl:require('../../images/smbanner1-3.jpg'),
					name:'BURBERRY',
					price:'￥4588'
				},
				{
					id:4,
					imgUrl:require('../../images/smbanner1-4.jpg'),
					name:'LOUIS VUITTON',
					price:'￥4386'
				},
				{
					id:5,
					imgUrl:require('../../images/smbanner1-5.jpg'),
					name:'ACNE STUDIOS',
					price:'￥4568'
				},
				{
					id:6,
					imgUrl:require('../../images/smbanner1-6.jpg'),
					name:'VALENTINO',
					price:'￥4569'
				},
				{
					id:7,
					imgUrl:require('../../images/smbanner1-7.jpg'),
					name:'COCCINELLE',
					price:'￥1568'
				},
				{
					id:8,
					imgUrl:require('../../images/smbanner1-8.jpg'),
					name:'MONCLER',
					price:'￥4898'
				},
				{
					id:9,
					imgUrl:require('../../images/smbanner1-9.jpg'),
					name:'LOEWE',
					price:'￥7869'
				},
				{
					id:10,
					imgUrl:require('../../images/smbanner1-10.jpg'),
					name:'MONCLER',
					price:'￥3578'
				},
				{
					id:11,
					imgUrl:require('../../images/smbanner1-11.jpg'),
					name:'VALENTINO',
					price:'￥4587'
				},
				{
					id:12,
					imgUrl:require('../../images/smbanner1-12.jpg'),
					name:'STUDIOS',
					price:'￥7678'
				},
				{
					id:13,
					imgUrl:require('../../images/smbanner1-13.jpg'),
					name:'BURBERRY',
					price:'￥67865'
				},
				{
					id:14,
					imgUrl:require('../../images/smbanner1-14.jpg'),
					name:'MONCLER',
					price:'￥14577'
				},
				{
					id:15,
					imgUrl:require('../../images/smbanner1-15.jpg'),
					name:'LOEWE',
					price:'￥15457'
				},
				{
					id:16,
					imgUrl:require('../../images/smbanner1-16.jpg'),
					name:'BURBERRY',
					price:'￥8675'
				},
				{
					id:17,
					imgUrl:require('../../images/smbanner1-17.jpg'),
					name:'LOUIS',
					price:'￥6767'
				},
				{
					id:18,
					imgUrl:require('../../images/smbanner1-18.jpg'),
					name:'BURBERRY',
					price:'￥3675'
				},
				{
					id:19,
					imgUrl:require('../../images/smbanner1-19.jpg'),
					name:'LOUIS',
					price:'￥4567'
				},
				{
					id:20,
					imgUrl:require('../../images/smbanner1-20.jpg'),
					name:'MONCLER',
					price:'￥4545'
				}
				
			]
		}
	}
	render(){
		return (
			<div className="home_list_box">
				  <WingBlank>
			        <Carousel
			          slideWidth={0.33}
			          autoplay={true}
			          infinite
			          dots={false}
			        >
			          {this.state.data.map(goods => (
			            <a
			              key={goods.id}
			              href="#"
			              style={{ display: 'inline-block', width: '100%', height:'4.7rem' }}
			            >
			              <img
			                src={goods.imgUrl}
			                style={{ width: '100%', height:'4.7rem', verticalAlign: 'top' }}
			                onLoad={() => {
			                  window.dispatchEvent(new Event('resize'));
			                }}
			              />
			              <h3>{goods.name}</h3>
			              <p>{goods.price}</p>
			            </a>
			          ))}
			        </Carousel>
			      </WingBlank>
			</div>
		)
		
	}
}
export {Smbanner}