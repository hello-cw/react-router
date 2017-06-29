import React,{Component} from 'react';
import {Link} from 'react-router';

class IndexNav extends Component{
	render(){
		let curStyle={
			"color":"#ff9600"
		}
		return(
				<ul className="index_nav">
					<li>
						<Link to="/type/饼干" activeStyle={curStyle}>
							<p><img src="./src/image/bg_03.png" alt=""/></p>
							<p>饼干</p>
						</Link>
					</li>
					<li>
						<Link to="/type/茶点" activeStyle={curStyle}>
							<p><img src="./src/image/cd_03.png" alt=""/></p>
							<p>茶点</p>
						</Link>
					</li> 
					<li>
						<Link to="/type/蛋糕" activeStyle={curStyle}>
							<p><img src="./src/image/dg_03.png" alt=""/></p>
							<p>蛋糕</p>
						</Link>
					</li>
					<li>
						<Link to="/type/面包" activeStyle={curStyle}>
							<p><img src="./src/image/mb_03.png" alt=""/></p>
							<p>面包</p>
						</Link>
					</li>
				</ul>
			)
	}
}
export default IndexNav;