import React,{Component} from 'react';
import Hearder from './header.js';
import { createStore } from 'redux';


class Counter extends Component{
	render(){
		return(
				<div>
					<h3>{this.props.value}</h3>
					<button onClick={this.props.onAdd}>+</button>
					<button onClick={this.props.onSub}>-</button>
				</div>
			)
	}
}
const reducer=(state=0,action)=>{
	switch(action.type) {
		case 'ADD':
			return state+1;
			break;
		case 'SUB':
			return state-1;
			break;
	}
}
const store = createStore(reducer);
class Myfavorable extends Component{
		constructor(props){
			super(props);
		}
		render(){
			return (
					<div>
						<Hearder HeaderL={"<a href='javascript:history.go(-1);'><</a>"}
						Headertitle={'我的订单'} />
						<div>这是我的优惠页面</div>
						<Counter value={store.getState()} onAdd={()=>store.dispatch({type:'ADD'})} onSub={()=>store.dispatch({type:'SUB'})} />
					</div>
				)
		}
}
export default Myfavorable;