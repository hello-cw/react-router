import React,{Component,props} from 'react';
import Header from './component/index_header.js';
import IndexNav from './component/nav.js';
import IndexList from './component/indexList.js';
import Footer from './component/footer.js';
// import './js/swiper-3.4.1.min.scss';
import './css/swiper.less';
import './css/index.scss';
// import Swipe from './js/swipe.js';
import ModalBottom from './component/modal_bottom.js';
import ModalFromRight from './component/modal_from_right.js';
import Swiper from 'swiper';

// import '../src/js/swiper-3.4.0.min.js';
// import ReactSwipe from 'react-swipe';

class Index extends Component{
	constructor(props){
		super(props);
		this.state={
			lbList:[],
			'message':'hide',
			'rule':'hide'
		}
		this.maskShow=this.maskShow.bind(this);
	}
	maskShow(active){
		this.setState({
			'message':active
		})
	}

	ruleShow(show){
		this.setState({
			'rule':show
		})
	}
	ruleHide(){
		this.setState({
			'rule':'hide'
		})
	}
	render(){
		let mask=this.state.rule=='active' ? 'block':'none';
		var modalShow="translateY(0%)";
		var modalHide="translateY(150%)";
		let maskWrap=this.state.rule=='active' ? modalShow : modalHide;
		let maskStyle={
			'display':mask
		}
		let maskWrapStyle={
			'transform':maskWrap
		}
		return(
				<div>
					<Header 
						Headertitle={'这是首页头部'} 
						maskShow={this.maskShow}
						ruleShow={this.ruleShow.bind(this)}
					/>
					<div style={{width:"100%",height:"240px",overflow:"hidden",position:"relative"}}>
					 	<div className="swiper-container">
							<div className="swiper-wrapper">
								{
									this.state.lbList.map((item,index)=>{
											return(
													<div className="swiper-slide">
														<a href={item.item}>
															<img src={item.src} alt="" style={{width:"100%",height:"100%"}} />
														</a>
													</div>
												)
									})
									
								}
							</div>
							<div className="swiper-pagination"></div>
						</div>
		            </div>
					<IndexNav />
					<IndexList />
					<div className="mask" style={maskStyle} onClick={this.ruleHide.bind(this)}>
						
					</div>
					<div className="mask_wrap" style={maskWrapStyle}>
							这是测试页面
						</div>
					<ModalFromRight 
					modalStateForRight={this.state.message}
					showModalFromRight={this.maskShow}  />
					
				</div>
			)
	}
	componentWillUnmount() {
		// this.swipe.destroy()
	}
	componentDidUpdate(){
		$('container').click(function(){
			alert(1)
		})
		// this.swipe = new Swipe(this.container, {
		// 	dots: true,
		// 	interval: 5000,
		// 	index: 0
		// })
		// this.swipe.init()
		
	}
	componentDidMount(){
		fetch('http://localhost:3000/indexList',{
			method:"get"
			

		}).then((res)=>res.json()).then((data)=>{
			this.setState({
				lbList:data.lunbo
			},()=>{
				var swiper = new Swiper('.swiper-container', {
		            /*base*/
		            autoplay: 1000,//是否自动滑动及间隔时间,
		            autoHeight:true, //自动高度,wrapper和container会随着当前slide的高度而发生变化。
		            effect:'slide', //slide的切换效果，默认为"slide"（位移切换），可设置为"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
		            loop : true, //开启无缝模式
		            /*分页及导航按钮*/
		            pagination: '.swiper-pagination',//设置分页(小圆点)
		            paginationClickable: true,//设置点击小圆点切换

		        });
			})
		})
		// $.get('http://localhost:3000/indexList',function(data){
		// 		alert(1)
		// })
		
	}
}

export default Index;