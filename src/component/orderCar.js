import React,{Component,props} from 'react';
import ReactDOM from 'react-dom';
import {tool} from './tool.js';
import '../css/orderCar.scss'

class OrderCar extends Component{
	constructor(props){
		super(props);
		this.state={
			'flag':false,
			choose:false,
			num:0,
			price:0
		}
	}
	
	chooseSelect(e){
		this.setState({
			choose:!this.state.choose
		})
	}
	add(){
		if(this.state.choose){
			let index=this.state.num;
			index++;
			this.setState({
				num:index
			},()=>{
				this.props.totalClick()
			})
		}else{
			tool.alert("请先选中商品")
		}
	}
	
	sub(){
		if(this.state.choose){
			let index=this.state.num;
			if(index<=0){
				return false
			}
			index--;
			this.setState({
				num:index--
			},()=>{
				this.props.totalClick()
			})
		}else{
			tool.alert("请先选中商品")
		}
	}
	componentWillMount(){

	}
	render(){
			return (
					<div className="order_wrap">
						<div className="order_top">
							<span className="all"></span>
							<span className="merchant">MI人直营</span>
							<span className="order_editor">编辑</span>
						</div>
						<div className="order_content"  ref="order_content">
							<div className="order_content_left" onClick={(e)=>this.chooseSelect(e)}>
								<span className={`${this.state.choose ? 'cur' :null } order_span`} name="order_sapn"></span>
							</div>
							<div className="order_img">
								<img src={this.props.src} alt=""/>
							</div>
							<div className="order_word">
								<p className="order_title">{this.props.title}</p>
								<p className="order_describe">我嫉妒你 的贷款阿萨德啊</p>
								<p className="order_thePrice">
									<span className="order_num">
										<button onClick={() =>this.add()}>+</button>
										<b className="shopNum">{this.state.num}</b>
										<button onClick={() =>this.sub()} >-</button>
									</span>
									<span className="order_price"><em style={{fontStyle:'normal'}}>￥</em><b className="shop_price">{this.props.price}</b></span>
								</p>
							</div>
						</div>
				</div>
			)
	}
	componentDidUpdate(){
		
	// 	// oContent.setAttribute('data-index','aaa')
	
	}
	componentDidMount(){
		// console.log(oContent)
		// console.log($('.order_content'))
		// $('.order_content').on('click',function(){
		// 	$('.order_span').eq($(this).index()).toggleClass('cur');
		// })
		// var oContent=document.getElementsByName("order_content");
		// console.log(oContent)
		// var orderSpan=document.getElementsByName("order_span");
		// for(var i=0;i<oContent.length;i++){
		// 	oContent[i].index=i;
		// 	oContent[i].onclick=function(){
		// 		alert(1)
		// 		// for(var j=0;j<oContent.length;j++){
		// 		// 	orderSpan.className='';
		// 		// }
		// 		// orderSpan[this.index].className='cur';
		// 	}
		// }
	}

}

export default OrderCar;