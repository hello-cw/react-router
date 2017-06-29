import React,{Component} from 'react';
import {Link} from 'react-router';
import Hearder from './header.js';
import Footer from './footer.js';
import '../css/personCenter.scss';
import {tool} from './tool.js';

class Person extends Component{
	constructor(props){
		super(props);
		this.state={
			Logged:[]
		}
		this.testClick=this.testClick.bind(this)
	}
	isRegister(url){
		sessionStorage.setItem('theURL',url)
		if(!this.state.Logged.length){
			tool.alert("请先登录")
			setTimeout(()=>{
				// window.location.href="http://localhost:3100/#/register";
				this.context.router.push('/register')
			},800)
		}else {
			// window.location.href="http://localhost:3100/#/"+url;
			this.context.router.push(url)
		}
	}
	testClick(){
		alert(1)
	}
	outRegister(){
		fetch('http://localhost:3000/login/1',{
			method:'delete'
		}).then((res)=>res.json())
		.then((res)=>{
			tool.alert("退出登录");
			this.setState({
				Logged:[]
			})
		})
	}
	componentDidMount(){
		fetch('http://localhost:3000/login',{
			method:'get'
		}).then((res)=>res.json())
		.then((data)=>{
			this.setState({
				Logged:data
			})
		})
	}
	render(){
		let {Logged}=this.state;
		let result=Logged.length ? <p>{Logged[0].name}</p> : <p>未登录</p>
		let title=Logged.length ? <p className="per_name">{Logged[0].name}</p> : <p>未登录</p>
		return(
				<div>
					<Hearder HeaderL={'左侧'}
						Headertitle={'个人中心'}
						HearderR={'右侧'} />
					<div className="per_wrap">
						<div className="per_message">
							<div className="per_left" onClick={()=>this.isRegister()}>
								{result}
							</div>
							<div className="per_c" onClick={this.testClick}>
								{title}
								<p>黄金会员</p>
								<p>账户余额<span>￥998</span></p>
							</div>
							<div className="per_r">
								账户管理 >
							</div>
						</div>
						<div className="per_type">
							<div onClick={()=>this.isRegister('activeOrder')}>
								<p></p>
								<p>活动订单</p>
							</div>
							<div onClick={()=>this.isRegister('ticketOrder')}>
								<p></p>
								<p>门票订单</p>
							</div>
							<div onClick={()=>this.isRegister('equipOrder')}>
								<p></p>
								<p>装备订单</p>
							</div>
						</div>
						<div className="per_content" onClick={()=>this.isRegister('myOrder')}>
								<p className="per_detaile">
									<span>我的订单</span>
								</p>
								<p>></p>
						</div>
						<div className="per_content" onClick={()=>this.isRegister('myCollect')}>
							<p className="per_detaile">
								<span>我的收藏</span>
							</p>
							<p>></p>
						</div>
						<div className="per_content" onClick={()=>this.isRegister('myFavorable')}>
							<p className="per_detaile">
								<span>我的优惠券</span>
							</p>
							<p>></p>
						</div>
						<div  className="quit">
								<input type="button" value="退出登录" onClick={()=>this.outRegister()} />
						</div>
					</div>
				</div>
			)
	}
}
Person.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Person;