import React,{Component} from 'react';
import Hearder from './header.js';
import Nav from './nav.js';
import Coo from './car/cooky.js';
import Teacake from './car/teacake.js';
import Cake from './car/cake.js';
import Bread from './car/bread.js';
import Footer from './footer.js';

class Type extends Component{
		render(){
			const {typeNav} = this.props.params;
			return (
					<div>
						<Hearder HeaderL={'<a href="javascript:history.go(-1);"><</a>'}
								 Headertitle={typeNav} />
						<Nav />
						<Coo />
						<Footer />
					</div>
				)
		}
}
export default Type;