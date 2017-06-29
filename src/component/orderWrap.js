import React,{Component,props} from 'react';
import Hearder from './header.js';
import ListCar from './listCar.js';

class OrderWrap extends Component{
	constructor(props){
		super(props);
		this.state={
			"num":"3"
		};
	}
	render(){
		return (
				<div>
					<Hearder HeaderL={'<a href="javascript:history.go(-1);"><</a>'}
							Headertitle={'购物车'} />
					<ListCar />
				</div>
			)
	}
}
export default OrderWrap;