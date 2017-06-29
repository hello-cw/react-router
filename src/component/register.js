import React,{Component,props} from 'react';
import {Link} from 'react-router';
import Hearder from './header.js';
import '../css/login.scss';
import {tool} from './tool.js';


class Register extends Component{
	constructor(props){
		super(props);
		this.state={
			'nameValue':'',
			'passValue':''
		}
	}
	registerClick(){
		let url=sessionStorage.getItem('theURL') || '';
		let name=this.refs.login_iptName.value;
		let password=this.refs.login_iptPassword.value;
		fetch('http://localhost:3000/login',{
			method:'get'
		}).then((res)=>res.json())
		.then((res)=>{
			res.forEach( function(item, index) {
				if(item.name!=name){
					return false;
				}
				if(item.password!=password){
					tool.alert("密码错误，请重新输入");
					return false;
				}
				if(name==item.name && password==item.password){
					tool.alert("登录成功")
					setTimeout(()=>{
						window.location.href="http://localhost:3100/#/"+url;
					},800)
				}
			});
		})
		.catch((res)=>{
			tool.alert("网络异常")
		})
	}
	render(){
		return(
			<div>
				<Hearder Headertitle={'登录'} />
				<div className="login_wrap">
					<input type="text"  className="login_iptName" ref="login_iptName" />
					<input type='number'  className="login_iptPassword" ref="login_iptPassword" />
					<input type="button" value="登录" className="login_btn" onClick={()=>this.registerClick()} />
					<p>
						还没注册，请先<Link to="login">注册</Link>
					</p>
				</div>
			</div>
			)
	}
}
export default Register;