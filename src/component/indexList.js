import React,{Component,props} from 'react';
import {Link} from 'react-router';
import {tool} from './tool.js';

class IndexList extends Component{
	constructor(props){
		super(props);
		this.state={
			indexList:[]
		}
	}
	componentWillMount(){
		fetch('http://localhost:3000/indexList',{
			method:"get"
		}).then((res)=>res.json())
		.then((res)=>{
			this.setState({
				indexList:res.list
			})
		})
		.catch((res)=>{
			tool.alert("网络异常")
		})
	}
	listClick(e,src,title,price){
		e.stopepropagation();
		var obj={
			src:src,
			title:title,
			price:price
		}
		var str=JSON.stringify(obj);
		sessionStorage.obj = str;
		// window.location.href="http://localhost:3100/#/listDetail";
		this.context.router.push('/listDetail')
	}

	render(){
		return(
			<div className="index_list">
				
			{
				this.state.indexList.map(function(item,index){
					return (
							<dl key={index} onClick={(e)=>this.listClick(e,item.src,item.title,item.price)}>
								<dt><a href="www.baidu.com"><img src={item.src} alt=""/></a></dt>
								<dd className="indexTitle">{item.title}</dd>
								<dd>价格:{item.price}</dd>
							</dl>
						
					)
				}.bind(this))
			}
			</div>
			)
	}
}
IndexList.contextTypes={
	router: React.PropTypes.object.isRequired
}
export default IndexList;
