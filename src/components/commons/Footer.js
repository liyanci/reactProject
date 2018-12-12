import React from 'react';
import '../../styles/main.less';
import '../../styles/s_foot.less';
class Footer extends React.Component{
	render(){
		return (
			<div className="footer">
				<a><i></i><span>首页</span></a>
				<a><i></i><span>分类</span></a>
				<a><i></i><span>编辑精选</span></a>
				<a><i></i><span>品牌</span></a>
				<a><i></i><span>我的</span></a>
			</div>
		)
		
	}
}
export default Footer