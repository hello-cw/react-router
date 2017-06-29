import React,{Component,props} from 'react';
import {Link} from 'react-router';
import Hearder from './header.js';
import Detail from './detail.js';
import Know from './know.js';
import Comment from './comment.js';
import {tool} from './tool.js';

class ListDetails extends Component{
	constructor(props){
		super(props);
		this.state={
			order:[],
			tabs:[
				{"tabName":"详情","tabId":"1","tabType":"Detail"},
				{"tabName":"须知","tabId":"2","tabType":"Know"},
				{"tabName":"评论","tabId":"3","tabType":"Comment"},

			],
			"tabId":"1"
		}
	}
	back(){
		this.context.router.goBack()
	}
	selectTabs(id){
		this.setState({
			tabId:id
		})
	}
	shopUpLoad(){
		let str1 = sessionStorage.obj;
		fetch('http://localhost:3000/shopCar',{
			method:'post',
			body:str1,
			headers:
				{
					'Content-Type': 'application/json'
				}
		}).then((res)=>res.json())
		.then((res)=>{
			if(res.id){
				tool.alert("加入购物车")
			}
		})
		.catch((res)=>{
			tool.alert("提交失败，请重试")
		})
	}
	render(){
		let detailStyle={
			color:"#ff9600",
			borderBottom:"2px solid #ff9600"
		}
		let str=str = sessionStorage.obj;
		let obj=JSON.parse(str); 
		let tabsLoade='';
		let detailList=this.state.tabs.map(function(i,n){
				var curStyle={}
				if(this.state.tabId==i.tabId){
					curStyle=detailStyle;
				}
				if(this.state.tabId==1){
					tabsLoade=<Detail />
				}else if (this.state.tabId==2) {
					tabsLoade=<Know />
				}else if (this.state.tabId==3) {
					tabsLoade=<Comment />
				}
				return <li key={n} onClick={this.selectTabs.bind(this,i.tabId)} className="tabs_lis" style={curStyle}>{i.tabName}</li>
		}.bind(this))
		return (
				<div>
					<Hearder HeaderL={'<a href="javascript:history.go(-1)"><</a>'}
							 Headertitle={'详情'} />
					<div className="detail_wrap">
						<div className="list_wrap">
							<img src={obj.src} alt="" className="list_img" />
							<p>{obj.title}</p>
						</div>
						<div className="buy">
							<div className="the_title">购票</div>
								<div className="order_detail">
									<div className="order_top">
										<p className="order_buy_title">{obj.title}</p>
										<p className="order_buy_time">这是时间大大大是</p>
									</div>
									<div className="order_center">
										{obj.price}
									</div>
									<div className="order_right">
										<input type="button" value="预定" />
									</div>
								</div>
						</div>
						<div className="detail_wrap_bottom">
							<ul className="detail_ul">
								{detailList}
							</ul>
							<div className="detail_content">
								{tabsLoade}
							</div>
						</div>
					</div>
					<div className="list_footer">
						<p className="list_price">
							<Link to="/shopcar" >
							购物车
							</Link>
						</p>
						<p className="list_ask" onClick={()=>this.shopUpLoad()} >
							加入购物车
						</p>
						<p className="buy_now">
							<Link to="orderWrite">
								立即预定
							</Link>
						</p>
					</div>		
				</div>
			)
	}
	componentDidMount(){
		this.setState({
			order:[{
				"title":"你跟看按时给打开就好打卡刷卡按时的"
			},
			{
				"title":"你跟多个卡山东科技啊说的"
			}]
		})
	}
}
ListDetails.contextTypes = {
	router: React.PropTypes.any
}
export default ListDetails;