import React,{Component} from 'react';
import {render} from 'react-dom';

class Header extends Component{
	render(){
		return(
				<div className='header'>
					<div className='header_l'>
						<p dangerouslySetInnerHTML={{__html:this.props.HeaderL}}></p>
					</div>
					<div className='header_c'>
						<p>
							{this.props.Headertitle}
						</p>
					</div>
					<div className='header_r'>
						<p dangerouslySetInnerHTML={{__html:this.props.HearderR}}></p>
					</div>
				</div>
			)
	}
}
export default Header;