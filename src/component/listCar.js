import React,{Component} from 'react';
import Hearder from './header.js';
import '../css/listCar.scss';

class ListCar extends Component{
	render(){
		return(
				<div className="123">
					<img src={sessionStorage.getItem('list_src')} alt="" className="listcar_img" />
					<div className="listCar_wrap">
						<div className="listCar_content">
							<p>这是旅游产品标题</p>
							<p>￥998</p>
						</div>
						<div className=""></div>
					</div>
					<div className="listcar_footer">
						<p className="listcar_price">
							购物车
						</p>
						<p className="listcar_ask">
							加入购物车
						</p>
						<p className="buy_now">立即预定</p>
					</div>		
				</div>
			)
	}
}

export default ListCar; 