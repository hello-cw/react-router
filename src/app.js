import React,{Component} from 'react';
import {render} from 'react-dom';
import Index from '../src/index.js';
import Footer from '../src/component/footer.js';

class App extends Component{
	render(){
		return(
				<div>
					{this.props.children}
					<Footer />
				</div>
			)
	}
}
export default App;