import React from 'react';
import {render} from 'react-dom';
import {Router,Route, IndexRoute, Link, IndexLink,hashHistory,applyRouterMiddleware } from 'react-router';
import App from '../src/app.js';
import Index from '../src/index.js';
import Shopping from '../src/component/shopping.js';
import Shopcar from '../src/component/shopCar.js';
import Person from '../src/component/personCenter.js';
import ListDetails from '../src/component/listDetail.js';
import Type from '../src/component/type.js';
import OrderWrap from '../src/component/orderWrap.js';
import OrderWrite from '../src/component/orderWrite.js';
import Login from '../src/component/login.js';
import Register from '../src/component/register.js';



const shopping = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/shopping.js').default)
    },'shopping')
}
const type = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/type.js').default)
    },'type')
}
const listDetails = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/listDetail.js').default)
    },'listDetails')
}
const orderWrap = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/orderWrap.js').default)
    },'orderWrap')
}
const shopcar = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/shopCar.js').default)
    },'shopcar')
}
const person = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/personCenter.js').default)
    },'person')
}
const orderWrite = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/orderWrite.js').default)
    },'orderWrite')
}
const login = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/login.js').default)
    },'login')
}
const register = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/register.js').default)
    },'register')
}
const myOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/myOrder.js').default)
    },'myOrder')
}
const activeOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/activeOrder.js').default)
    },'activeOrder')
}
const myCollect = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/myCollect.js').default)
    },'myCollect')
}
const myFavorable = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/myFavorable.js').default)
    },'myFavorable')
}
const ticketOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/ticketOrder.js').default)
    },'ticketOrder')
}
const equipOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../src/component/equipOrder.js').default)
    },'equipOrder')
}


render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute path="index" component={Index} />
				<Route path="shopping" getComponent={shopping} />
				<Route path="type/:typeNav" getComponent={type} />
				<Route path="listDetail" getComponent={listDetails} />
				<Route path="orderWrap" getComponent={orderWrap} />
				<Route path="shopcar" getComponent={shopcar} />
				<Route path="personcenter" getComponent={person} />
				<Route path="orderWrite" getComponent={orderWrite} />
				<Route path="login" getComponent={login} />
				<Route path="register" getComponent={register} />
                <Route path="myOrder" getComponent={myOrder} />
                <Route path="activeOrder" getComponent={activeOrder} />
                <Route path="myCollect" getComponent={myCollect} />
                <Route path="myFavorable" getComponent={myFavorable} />
                <Route path="ticketOrder" getComponent={ticketOrder} />
                <Route path="equipOrder" getComponent={equipOrder} />
			</Route>
		</Router>
	),document.getElementById('root'))