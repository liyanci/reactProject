import React from 'react';
import {Smain} from '../commons/Smain';
import '../../less/s_clock.less';
import { Carousel, WingBlank } from 'antd-mobile';
class Clock extends React.Component{
	constructor(){
		super();
		this.state={
			data: [
				{
					id:1,
					imgUrl:require('../../images/clock-banner01.jpg')
				},
				{
					id:2,
					imgUrl:require('../../images/clock-banner02.jpg')
				}
				
			],
		}
	}
	render(){
		return (
			<div className="clock">
				<WingBlank>
			        <Carousel
			          autoplay={false}
			          infinite
			          dots={false}
			        >
			          {this.state.data.map(goods => (
			            <a
			              key={goods.id}
			              href="#"
			              style={{ display: 'inline-block', width: '100%', height:'6.67rem' }}
			            >
			              <img
			                src={goods.imgUrl}
			                style={{ width: '100%', height:'6.67rem', verticalAlign: 'top' }}
			                onLoad={() => {
			                  window.dispatchEvent(new Event('resize'));
			                }}
			              />
			            </a>
			          ))}
			        </Carousel>
			      </WingBlank>
			      <div className="clock-m01"><img src={require('../../images/clock-08.jpg')}/></div>
			      <div className="clock-m02"><img src={require('../../images/clock-01.jpg')}/><img src={require('../../images/clock-02.jpg')}/></div>
			      <div className="clock-m03"><img src={require('../../images/clock-03.jpg')}/></div>
			      <div className="clock-m04"><img src={require('../../images/clock-04.jpg')}/><img src={require('../../images/clock-05.jpg')}/><img src={require('../../images/clock-06.jpg')}/></div>
			      <div className="clock-m05"><img src={require('../../images/clock-07.jpg')}/></div>
			      <Smain></Smain>
			</div>
		)
		
	}
}
export {Clock}