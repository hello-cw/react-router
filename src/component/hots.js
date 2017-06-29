import React,{Component,props} from 'react';
import {Link} from 'react-router';
import {tool} from './tool.js';

class Hots extends Component{
	constructor(props){
		super(props);
		this.state={
			hotList:[],
			id:""
		}
	}
	toList(src,id,title,price){
		var obj={
			id:id,
			src:src,
			title:title,
			price:price
		}
		var str=JSON.stringify(obj);
		sessionStorage.obj = str;
	}
	componentWillMount(){
		fetch('http://localhost:3000/nav',{
			method:"get"
		}).then((res)=>res.json())
		.then((res)=>{
			this.setState({
			hotList:res.hot
			})
		})
	}
	render(){
		return(
				<div>
					{
						this.state.hotList.map(function(item,index){
								return (
										<dl className="hots_dl" key={index}>
											<dt className="hots_img">
												<Link to="/listDetail" onClick={this.toList.bind(this,item.src,item.id,item.title,item.price)}>
													<img src={item.src} alt=""/>
												
												</Link>
											</dt>
											<dd className="hots_title">{item.title}</dd>
											<dd className="hots_price">{item.price}</dd>
										</dl>
									)
						}.bind(this))
					}
				</div>
			)
	}
}
export default Hots;