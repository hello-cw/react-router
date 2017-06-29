import React,{Component} from 'react';
import Hearder from './header.js';

class TicketOrder extends Component{
		render(){
			return (
					<div>
						<Hearder HeaderL={"<a href='javascript:history.go(-1);'><</a>"}
						Headertitle={'我的订单'} />
						<div>这是门票订单页面</div>
					</div>
				)
		}
}
export default TicketOrder;