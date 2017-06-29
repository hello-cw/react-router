import React,{Component,props} from 'react';
import Hearder from './header.js';
import '../css/order.scss';
import {tool} from './tool.js';
import MultiPicker from 'mob-multi-picker';
import DateSelector from 'mob-date-selector';
import { City } from '../city.js'

class OrderWrite extends Component{
	constructor(props){
		let str=str = sessionStorage.obj;
		let obj=JSON.parse(str);
		super(props);
		this.state={
			"age":0,
			"name":"",
			"voucher":0,
			"explain":'',
			"price":obj.price,
			"address":'',
			"date":''
		}
	}
	handleValueChange(file,value,type="string"){
		if(type=='number'){
			value=+value
		}
		this.setState({
			[file]:value
		});
	}
	handleSubmit(e){
		e.preventDefault();
		const {age,name,voucher,explain,address,date}=this.state;
		if(age && name && voucher){
			fetch('http://localhost:3000/user',{
				method:"post",
				body:JSON.stringify({age,name,voucher,explain,address,date}),
				headers:
				{
					'Content-Type': 'application/json'
				}
			}).then((res)=>res.json())
			.then((res)=>{
				if(res.id){
					tool.alert("提交成功");
					this.setState=({
						"age":0,
						"name":"",
						"voucher":0,
						'explain':''
					})
				}
			})
			.catch((erro)=>{
				tool.alert("提交失败")
			})
		}else {
			tool.alert("请把资料填写完整")
		}
	}
	render(){
		let {name,age,voucher,explain,price,address,date}=this.state;
		
		return (
				<div>
					<Hearder HeaderL={'<a href="javascript:history.go(-1)"><</a>'}
						Headertitle={'填写订单'} />
					<form onSubmit={(e)=>this.handleSubmit(e)} className="order_form">
							<p className="linkman">联系人信息</p>
							<p>
								<label>姓名:</label>
								<input type="text" placeholder="姓名" value={name || ''} onChange={(e)=>this.handleValueChange("name",e.target.value)} />
							</p>
							<p>
								<label>年龄:</label>
								<input type="number" placeholder="年龄" value={age || ''} onChange={(e)=>this.handleValueChange("age",e.target.value,"number")} />
							</p>
							<p>
								<label>证件类型:</label>
								<input type="number" placeholder="填写证件号" value={voucher || ''} onChange={(e)=>this.handleValueChange("voucher",e.target.value)} />
							</p>
							<p>
								<label>选择日期:</label>
								<input id="date-selector-input" type="text" readonly placeholder="选择日期" value={date || ''} onChange={(e)=>this.handleValueChange("voucher",e.target.value)} />
								<div id="targetContainer-date"></div>
							</p>
							<p>
								<label>收货地址:</label>
								<input id="targetInput" type="text" readonly placeholder="选择收货地址" value={address || ''} />
								<div id="targetContainer"></div>
							</p>
							<p className="textarea">
								备注:
								<textarea name="" id="" cols="30" rows="10" value={explain || ''} placeholder="选填:对本次交易的说明,建议先与客服沟通" onChange={(e)=>this.handleValueChange('explain',e.target.value)}>
								</textarea>
							</p>
							<div className="order_footer">
								<p>
									<span>总额:</span>
									<span className="order_price">{price}</span>
								</p>
								<input type="submit" value="立即支付" />
							</div>
					</form>
				</div>
			)
	}
	componentDidMount(){
		let _this=this;
		new MultiPicker({
			input:'targetInput',
			container:'targetContainer',
			jsonData:City,
			success:function(res){
				let values=[];
				for(var i =0 ; i<res.length ; i++){
					values.push(res[i].value)
				}
				_this.setState({
					'address': values.join(' ')
				})
			}
		});
		new DateSelector({
			input:'date-selector-input',
			container:'targetContainer-date',
			type:0,
			param:['1','1','1','1','0'],
			beginTime:[],
			endTime:[],
			recentTime : [],
			success:(res)=>{
				_this.setState({
					'date': res.join('-')
				})
			}
		});
	}
}
 export default OrderWrite;