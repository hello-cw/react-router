import React,{Component ,props} from 'react';
import Hearder from './header.js';
import Footer from './footer.js';
import Books from './car/Books.js';
import OrderCar from './orderCar.js';
import '../css/orderCar.scss'

class Shopcar extends Component{
	constructor(props){
		super(props)
		this.state={
			order:[],
			choose:false,
			count:0,
			totalPrice:0
		}
		this.totalNum=this.totalNum.bind(this)
	}
	componentWillMount(){
		fetch('http://localhost:3000/shopCar',{
			method:'get'
		}).then((res)=>res.json())
		.then((data)=>{
			this.setState({
				'order':data
			})

		})
		.catch((res)=>{
			console.log(res)
		})
	}
	totalNum(){
		let totalPrice = 0;
		let oNum = document.getElementsByClassName('shopNum')
		let oPrice=document.getElementsByClassName('shop_price')
		for(var i=0 ; i<oNum.length ; i++){
			totalPrice+=oNum[i].innerHTML*parseInt(oPrice[i].innerHTML)
		}
		this.setState({
			totalPrice:totalPrice
		})
	}
	componentDidMount(){
	}
	render(){
		return (
				<div className="shop_car" style={{width:'100%',overflow:'hidden'}}>
					<Hearder HeaderL={'左侧'} 
						Headertitle={'购物车'}
						HearderR={'右侧'} />
					{
						this.state.order.map((item,index) =>{
							return <OrderCar key={index}  {...item} totalClick={this.totalNum} />
						})
					}
					<div className="order_footer">
						<p>
							<span>总额:</span>
							<span className="order_price">{this.state.totalPrice}</span>
						</p>
						<input type="submit" value="立即支付" />
					</div>
				</div>
			)
	}
}
export default Shopcar;