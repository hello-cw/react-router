import React,{Component,props} from 'react';
import Hearder from './header.js';
import Footer from './footer.js';
import News from './news.js';
import Hots from './hots.js';
import Looks from './look.js';
import '../css/shop.scss';


class Shopping extends Component{
	constructor(props) {
	    super(props)
	    
	    this.state={
	    	tabs:[
				{"tabName":"最新","id":"1","type":"New"},
				{"tabName":"热门","id":"2","type":"Hot"},
				{"tabName":"关注","id":"3","type":"Focus"}
			],
			tabId:sessionStorage.getItem("id") || 1,
			tabType:"new"
	    }
	 }
	tabChoiced(id,tabType){
	 	this.setState({
			tabId:id,
			tabType:tabType
	 	});
	 	sessionStorage.setItem("id",id)
	 }
	render(){
		let lodeType=''
		var choiced={
	            borderBottom:"2px solid #ffa6a6",
	            color:"#ffa6a6",
	            fontWeight:"500"
	        }
		let tabList=this.state.tabs.map(function(res,index){
			var myStyle={};
			if(res.id==this.state.tabId){
				myStyle=choiced;
			};
			if(this.state.tabId==1){

				lodeType=<News />
			}else if (this.state.tabId==2) {

				lodeType=<Hots />
			}else if (this.state.tabId==3) {
		
				lodeType=<Looks />
			}
			return <li key={index} onClick={this.tabChoiced.bind(this,res.id,res.type)} style={myStyle} className="shop_tab">{res.tabName}</li>
		}.bind(this))
		return (
				<div className="shop">
					<Hearder HeaderL={'左侧'} 
						Headertitle={'商城'}
						HearderR={'右侧'} />
						<div className="shop_content">
							<ul>
								{tabList}
							</ul>
							{lodeType}
						</div>
				</div>
			)
	}
}

export default Shopping;