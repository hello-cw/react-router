import React,{Component,props} from 'react';

class Cake extends Component{
	constructor(props){
		super(props);
		this.state={
			List:[]
		}
	}
	listClick(src,title,price){
		var obj={
			src:src,
			title:title,
			price:price
		}
		var str=JSON.stringify(obj);
		sessionStorage.obj = str;
		window.location.href="http://localhost:3100/#/listDetail";
	}
	componentDidMount(){
		fetch('http://localhost:3000/type',{
			method:"get"
		}).then((res)=>res.json())
		.then((res)=>{
			console.log(res.cooky)
			this.setState({
				List:res.cake
			})
		})
	}
	render(){
		return (
			<div className="index_list">
				{
					this.state.List.map(function(item,index){
					return(
							<dl key={index} onClick={this.listClick.bind(this,item.src,item.title,item.price)}>
								<dt><img src={item.src} alt=""/></dt>
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
export default Cake;