import React,{Component} from 'react';
import {Router, Route, IndexRoute, Link, IndexLink} from 'react-router';

class Footer extends Component{
	render(){
		let styles={
			color:"#333",
			textDecoration:"none",
			
		}
		let active={
			color:"#ff9600"
		}
		return (
				<div className="footer">
					<ul>
						<li>
							<IndexLink to='/' className='footer_li' style={styles}  activeStyle={active}>
								<p><i className="iconfont">&#xe601;</i></p>
								<p>首页</p>
							</IndexLink>
						</li>
						<li>
							<Link to='/shopping' className='footer_li' style={styles} activeStyle={active}>
								<p><i className="iconfont">&#xe60e;</i></p>
								<p>商城</p>
							</Link>
						</li>
						<li>
							<Link to='/shopcar' className='footer_li' style={styles} activeStyle={active}>
								<p><i className="iconfont">&#xe619;</i></p>
								<p>购物车</p>
							</Link>
						</li>
						<li>
							<Link to='/personcenter' className='footer_li' style={styles} activeStyle={active}>
								<p><i className="iconfont">&#xe603;</i></p>
								<p>我的</p>
							</Link>
						</li>
					</ul>
				</div>
			)
	}
}
export default Footer;