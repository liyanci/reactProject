import React from 'react';
import {Smain} from '../commons/Smain';
import '../../less/s_child.less';
import { Carousel, WingBlank } from 'antd-mobile';
class Child extends React.Component{
	render(){
		return (
			<div className="child">
				  <div className="banner"><img src={require('../../images/child-banner.jpg')}/></div>
			      <div className="child01"><img src={require('../../images/child-main1.jpg')}/></div>
			      <div className="child02"><img src={require('../../images/child-main2.jpg')}/><img src={require('../../images/child-main3.jpg')}/></div>
			      <div className="child03"><img src={require('../../images/child-main4.jpg')}/></div>
			      <div className="child04"><img src={require('../../images/child-main5.jpg')}/><img src={require('../../images/child-main6.jpg')}/><img src={require('../../images/child-main7.jpg')}/></div>
			      <div className="child05"><img src={require('../../images/child-main8.jpg')}/></div>
			      <div className="child06"><img src={require('../../images/child-main9.jpg')}/><img src={require('../../images/child-main10.jpg')}/><img src={require('../../images/child-main11.jpg')}/></div>
			      <div className="child07"><img src={require('../../images/child-main12.jpg')}/></div>
			      <div className="child08"><img src={require('../../images/child-main13.jpg')}/><img src={require('../../images/child-main14.jpg')}/></div>
			      <div className="child09"><img src={require('../../images/child-main15.jpg')}/></div>
			      <div className="child10"><img src={require('../../images/child-main16.jpg')}/><img src={require('../../images/child-main17.jpg')}/><img src={require('../../images/child-main18.jpg')}/></div>
			      <div className="child11"><img src={require('../../images/child-main19.jpg')}/></div>
			      <Smain></Smain>
			</div>
		)
		
	}
}
export {Child}