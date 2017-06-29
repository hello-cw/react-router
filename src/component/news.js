import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import "./MsgListPage.scss";
import iScroll from "iscroll/build/iscroll-probe";
import '../js/jquery.min.js'

var _this=null;
class News extends Component{
	constructor(props){
		super(props)
		this.state={
			hotList:[],
			id:'',
			pullDownStatus: 3,
            pullUpStatus: 0
		}
		_this=this;
        this.page = 1;
        this.itemsChanged = false;

        this.pullDownTips = {
            // 下拉状态
            0: '下拉发起刷新',
            1: '继续下拉刷新',
            2: '松手即可刷新',
            3: '正在刷新',
            4: '刷新成功'
        };

        this.pullUpTips = {
            // 上拉状态
            0: '上拉发起加载',
            1: '松手即可加载',
            2: '正在加载',
            3: '加载成功'
        };

        this.isTouching = false;

        // this.onItemClicked = this.onItemClicked.bind(this);

        // this.onScroll = this.onScroll.bind(this);
        // this.onScrollEnd = this.onScrollEnd.bind(this);

        // this.onTouchStart = this.onTouchStart.bind(this);
        // this.onTouchEnd = this.onTouchEnd.bind(this);
	}
	saveNum(src,id,title,price){
		var obj={
			id:id,
			src:src,
			title:title,
			price:price
		}
		var str=JSON.stringify(obj);
		sessionStorage.obj = str;
		sessionStorage.setItem("list_src",name)
        this.context.router.push('/listDetail');
        // this.context.router.goForward(); 
		this.setState({
			id:id
		})
	}
	componentWillMount(){
		// fetch('http://localhost:3000/nav',{
		// 	method:'get'
		// }).then((res)=>res.json())
		// .then((res)=>{
		// 	this.setState({
		// 	hotList:res.news
		// })
		// })
	}
	componentDidMount(){
		const options = {
            // 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
            preventDefault: false,
            // 禁止缩放
            zoom: false,
            // 支持鼠标事件，因为我开发是PC鼠标模拟的
            mouseWheel: true,
            // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
            probeType: 3,
            // 拖拽超过上下界后出现弹射动画效果，用于实现下拉/上拉刷新
            bounce: true,
            // 展示滚动条
            scrollbars:false,
        };
        _this.iScrollInstance = new iScroll("#div1", options);
        _this.iScrollInstance.on('scroll', _this.onScroll);
        _this.iScrollInstance.on('scrollEnd', _this.onScrollEnd);
        
        _this.fetchItems(true);
	}
	fetchItems(isRefresh) {
        if (isRefresh) {
            _this.page = 1;
        }
        $.ajax({
            url: 'http://localhost:3000/nav',
            data: {page: _this.page},
            type: 'GET',
            dataType: 'json',
            success: (res) => {
                if (isRefresh) {    // 刷新操作
                    if (_this.state.pullDownStatus == 3) {
                        _this.setState({
                            pullDownStatus: 4,
                            hotList: res.news
                        });
                        _this.iScrollInstance.scrollTo(0, -1 * $(_this.refs.PullDown).height(), 500);
                    }
                } else {    // 加载操作
                    if (_this.state.pullUpStatus == 2) {
                        _this.setState({
                            pullUpStatus: 0,
                            hotList: _this.state.hotList.concat(res.news)
                        });
                    }
                }
                ++_this.page;
                console.log(`fetchItems=effected isRefresh=${isRefresh}`);
            }
        });
    }

    /**
     * 点击跳转详情页
     */
    // onItemClicked(ev) {
    //     // 获取对应的DOM节点, 转换成jquery对象
    //     let item = $(ev.target);
    //     // 操作router实现页面切换
    //     this.context.router.push(item.attr('to'));
    //     this.context.router.goForward();
    // }

    onTouchStart(ev) {
        _this.isTouching = true;
        
    }

    onTouchEnd(ev) {
        _this.isTouching = false;
    }

    onPullDown() {
        // 手势
       
        if (_this.isTouching) {
            if (_this.iScrollInstance.y > 5) {
               
                _this.state.pullDownStatus != 2 && _this.setState({pullDownStatus: 2});
            } else {
                _this.state.pullDownStatus != 1 && _this.setState({pullDownStatus: 1});
            }
        }
    }

    onPullUp() {
        // 手势
       
        if (_this.isTouching) {
            if (_this.iScrollInstance.y <= _this.iScrollInstance.maxScrollY - 5) {
                _this.state.pullUpStatus != 1 && _this.setState({pullUpStatus: 1});
            } else {
                _this.state.pullUpStatus != 0 && _this.setState({pullUpStatus: 0});
            }
        }
    }

    onScroll() {
        let pullDown = $(_this.refs.PullDown);
        // 上拉区域
        if (_this.iScrollInstance.y > -1 * pullDown.height()) {
            _this.onPullDown();
        } else {
            _this.state.pullDownStatus != 0 && _this.setState({pullDownStatus: 0});
        }
        // 下拉区域
        if (_this.iScrollInstance.y <= _this.iScrollInstance.maxScrollY + 5) {
            _this.onPullUp();
        }
    }

    onScrollEnd() {
        let pullDown = $(_this.refs.PullDown);

   
        // 滑动结束后，停在刷新区域
        if (_this.iScrollInstance.y > -1 * pullDown.height()) {
            if (_this.state.pullDownStatus <= 1) {   // 没有发起刷新,那么弹回去
                _this.iScrollInstance.scrollTo(0, -1 * $(_this.refs.PullDown).height(), 500);
            } else if (_this.state.pullDownStatus == 2) { // 发起了刷新,那么更新状态
                _this.setState({pullDownStatus: 3});
                _this.fetchItems(true);
            }
        }

        // 滑动结束后，停在加载区域
        if (_this.iScrollInstance.y <= _this.iScrollInstance.maxScrollY) {
            if (_this.state.pullUpStatus == 1) { // 发起了加载，那么更新状态
                _this.setState({pullUpStatus: 2});
                _this.fetchItems(false);
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 列表发生了变化, 那么应该在componentDidUpdate时调用iscroll进行refresh
        _this.itemsChanged = nextState.hotList !== _this.state.hotList;
        return true;
    }

    componentDidUpdate() {
        // 仅当列表发生了变更，才调用iscroll的refresh重新计算滚动条信息
        if (_this.itemsChanged) {
            _this.iScrollInstance.refresh();
        }
        return true;
    }
	render(){
		let lis = [];
		_this.state.hotList.map((item , index) =>{
			lis.push(
					<dl className="hots_dl" key={index}>
						<dt className="hots_img" onClick={this.saveNum.bind(this,item.src,item.id,item.title,item.price)}>
							
								<img src={item.src} alt="" />
							
						</dt>
						<dd className="hots_title">{item.title}</dd>
						<dd className="hots_price">{item.price}</dd>
					</dl>
				)
		})
		return(
				<div id='ScrollContainer' className="ScrollContainer">
	                <div id="div1" style={{height: window.innerHeight}}
	                     onTouchStart={()=>this.onTouchStart()} onTouchEnd={() =>this.onTouchEnd()}>
                         <div id="ListInside">
    	                     <p ref="PullDown" id='PullDown'>{this.pullDownTips[this.state.pullDownStatus]}</p>
    	                     {lis}
    	                     <p ref="PullUp" id='PullUp'>{this.pullUpTips[this.state.pullUpStatus]}</p>
                         </div>
	                </div>
	            </div>
			)
	}
}

News.contextTypes = {
    router: () => { React.PropTypes.object.isRequired }
};

export default News;