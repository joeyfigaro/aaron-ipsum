import React, { Component } from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.paragraphCount = 3;
		this.state = {
			text: props.generate({
				count: this.paragraphCount,
				units: 'paragraphs',
				lowerBound: 2,
				upperBound: 5,
				sentenceLowerBound: 2,
				format: 'html',
				words: props.seeds
			})
		};
	}

	onInputUpdate(event) {
		const { generate, seeds } = this.props;
		if (event.target.value) {
			this.paragraphCount = (event.target.value > 0) ? event.target.value : 1;
			this.setState({
				text: generate({
					count: this.paragraphCount,
					units: 'paragraphs',
					lowerBound: 2,
					upperBound: 3,
					sentenceLowerBound: 2,
					format: 'html',
					words: seeds
				})
			});
		}
	}

	render() {
		const { generate } = this.props;
		const { text } = this.state;

		return(
			<form className="form">
				<div className="input-group">
					<input type="text" onChange={this.onInputUpdate.bind(this)} defaultValue="3" step="1" min="1" max="10" className="paragraph-count"/> paragraphs
				</div>
				<div className="generated" dangerouslySetInnerHTML={{__html: text}}>
				</div>
			</form>
		);
	}
}
