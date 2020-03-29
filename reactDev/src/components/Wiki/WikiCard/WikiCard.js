import React, {Component} from 'react';
import {connect}          from 'react-redux';
import './WikiCard.scss';

import Cross          from '../../ComCom/Buttons/Cross/Cross';
import Animator       from '../../ComCom/Animator/Animator';
import RequestService from '../../../servises/requestService';
import Bg             from '../../ComCom/Bg/Bg';

class WikCard extends Component {

	RequestService = new RequestService(this.props.domen);

	state = {
		titile : '',
		text   : '',
		image  : '',
	}

	componentDidMount() {
		this.update();
	}

	update = () => {
		//console.log(this.props.hashtag);
		this.RequestService.getWikiCard(this.props.hashtag)
		.then(res => {
			this.setState({
				title  : res.title,
				text   : res.text,
				image  : res.image,
			})
		})
	}

	render() {

		return(
			<div className='WikiCard'>
				<Animator type = 'fade'><h1>{this.state.title}</h1></Animator>
				<Animator 
					type    = 'rise'
					timeout = '100'>
					<Bg src = {this.state.image}></Bg>
				</Animator>
				<Animator 
					type    = 'fade'
					timeout = '50'>
					<div className = 'content'>{this.state.text}</div>
					<Cross/>
				</Animator>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		domen : state.domen
	}
}

export default connect(mapStateToProps)(WikCard)