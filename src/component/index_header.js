import React,{Component,props} from 'react';
import '../css/indexHearder.scss';

class IndexHeader extends Component{
	constructor(props){
		super(props)
		this.state={
			menu:'hide'
		}
	}
	heightShow(){
		if(this.state.menu=='hide'){
			this.setState({
				menu:'active'
			})
		}else {
			this.setState({
				menu:'hide'
			})
		}
	}
	render(){
		const Height=this.state.menu=='active' ? '100px': '0px' ;
		const myHeight={
			'height':Height
		}
		return (
				<div className='header'>
					<div className='header_l'>
						<p><i className="iconfont" onClick={()=>this.heightShow()}>&#xe60d;</i></p>
					</div>
					<div className='header_c'>
						<p>
							{this.props.Headertitle}
						</p>
					</div>
					<div className='header_r'>
						<p><i className="iconfont">&#xe6c8;</i></p>
					</div>
					<div className="index_menu" style={myHeight}>
						<ul>
							<li onClick={()=>this.props.maskShow('active')}>消息</li>
							<li onClick={()=>this.props.ruleShow('active')}>购买须知</li>
						</ul>
					</div>
				</div>
			)
	}
}

export default IndexHeader;