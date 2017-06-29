import React,{Component,props} from 'react';
import {Link} from 'react-router';
import Hearder from './header.js';
import '../css/login.scss';
import {tool} from './tool.js';

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			'name':'',
			'password':''
		}
		this.commit=this.commit.bind(this);
	}
	loginClick(file,value,type='string'){
		if(type=='number'){
			value=+value
		}
		this.setState({
			[file]:value
		})
	}
	commit(){
		const {name,password}=this.state;
		fetch('http://localhost:3000/login',{
			method:'post',
			body:JSON.stringify({name,password}),
			headers:
				{
					'Content-Type': 'application/json'
				}
		}).then((res)=>res.json())
		.then((res)=>{
			if(res.id){
				tool.alert("注册成功");
				setTimeout(()=>{
					// window.location.href="http://localhost:3100/#/register";
					this.context.router.push('/register')
				},800)
			}
		})
		.catch((res)=>{
			tool.alert("注册失败")
		})
	}
	render(){
		const {name,password}=this.state;
		return (
				<div>
					<Hearder Headertitle={'注册'} />
					<div className="login_wrap">
						<input type="text"  onChange={(e)=>this.loginClick('name',e.target.value)} className="login_iptName" />
						<input type='number' onChange={(e)=>this.loginClick('password',e.target.value,'number')} className="login_iptPassword" />
						<input type="button" value="注册" onClick={this.commit} className="login_btn" />
						<p>
							已注册请
							<Link to="register">登录</Link>
						</p>
					</div>
				</div>
			)
	}
}
Login.contextTypes={
	router: React.PropTypes.object.isRequired
}
export default Login;