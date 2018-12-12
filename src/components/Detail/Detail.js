import React,{Component} from 'react';
import {headTab} from '../../actions';
import {Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../less/s_home.less';

class Detail extends Component{
    constructor(){
        super();
        this.state = {
            goods:{

            }
        }
    }
    componentWillMount(){
    	this.props.changeHeadStatus(false);
    	console.log('goodsprops:',this.props);
    	let {state:goods}=this.props.location;
    	if(goods){
    		localStorage.setItem('goods',JSON.stringify(goods));
    	}
    	else{
    		goods=JSON.parse(localStorage.getItem('goods'));
    	}
    	this.setState({
    		goods
    	})
    }
	handlerClick(){
	this.props.history.push('/home');
//		console.log(this.props)
	}
	handlerAddToCart(goods){
		  let has = this.props.cartlist.filter(item=>{
            return item.proId == goods.proId
        });
        if(has.length){
            // 存在
            this.props.changeQty(goods.proId,++goods.qty);
        }else{
            goods.qty = 1;
            this.props.addToCart(goods);
        }
       
	}
    render(){
    	let {goods} =this.state;
    	console.log(this.state.goods);
       return <div className="detailAll">
       		<div className="detail-bottom">
       			<img className="bigImg" src={goods.img}/>
       			<div className="smll">新季</div>
       			<h4>{goods.title}</h4>
       			<p className="jiage">¥{goods.price}</p>
       			<p className="jianjiage">¥{goods.price_jian}</p>
       			<div className="jinpai"><a className="youhui">金牌优惠</a><a className="chengwei">成为金牌会员下单立减</a><p>开通会员></p></div>
       			<p className="zhichi">支持7天无理由退货</p>
       			<dl className="produce_info d-padding">
		            <dt>配送信息</dt>
		                <dd>商品预计10-15个工作日内送达，受活动季“电商大促”影响，预计物流配送时效延长5-7天，请您谅解！不同款的商品由于发货地不同可能发货时间不同。由于奢侈品的特殊性，建议您在实体店或官网了解体验后再下单。该商品已为您补偿境外发货运费，如个人原因退货将在货款中扣除尚品补贴的400元运费。 </dd>     
		            <dt>商品描述</dt>
		            <dd>
		                <span className="grey-f">商品编号：</span>{goods.id}
                        <span className="grey-f">商品名称：</span>{goods.title}
                        <span className="grey-f">产地：</span>中国，由于批次不同产地存在差异，请以收到实物为准
                        <span className="grey-f">材质：</span>小羊皮
                        <span className="grey-f">尺寸信息：</span>宽:15.5cm;高:10.5cm;厚:5.5cm;
		            </dd>
                </dl>
       		</div>
       		<div className="detail-bo">
       			<div className="add">加入愿望清单</div><div onClick={this.handlerAddToCart.bind(this,goods)} className="addCart">加入购物袋</div>
       		</div>
       </div>
    }
}
let mapDispatchToProps = dispatch =>{
	return{
		changeHeadStatus(status){
			dispatch(headTab(status))
		}
	}
}
Detail = connect(null,mapDispatchToProps)(Detail)
export {Detail};