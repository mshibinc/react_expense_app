import React, { Component } from 'react';
import PageNav from './PageNav';
import { addIncome } from '../services/Myservice';
class Income extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
			amount: '',
			desc: '',
			date: '',
			time: '',
		};
	}
	inputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	saveIncome = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append('amount', this.state.amount);
		data.append('type', this.state.type);
		data.append('desc', this.state.desc);
		data.append('date', this.state.date);
		data.append('time', this.state.time);
		addIncome(data)
			.then((res) => {
				if (res.data.response === 'success') {
					alert(res.data.response);
					this.formClear.reset();
				} else {
					alert(res.data.response);
				}
			})
			.catch((err) => err);
	};
	render() {
		return (
			<div className="container-fluid padrem">
				<PageNav pagename="Add Income" />

				<div className="container">
					<form ref={(form) => (this.formClear = form)}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="amount"
								name="amount"
								onChange={this.inputChange}
							/>
						</div>
						<div className="form-group">
							<select
								className="form-control"
								value={this.state.type === '' ? 0 : this.state.type}
								name="type"
								onChange={this.inputChange}
							>
								<option value="0" disabled style={{ display: 'none' }}>
									Select type
								</option>
                                <option value="Salary">Salary</option>
                                <option value="Sales">Sales</option>
                                <option value="Commission">Commission </option>
                                <option value="Other">Other</option>
							</select>
						</div>
						<div className="form-group">
							<textarea
								className="form-control" name="desc" placeholder="desc" onChange={this.inputChange}
							></textarea>
						</div>
						<div className="form-group">
							<input type="date" className="form-control" name="date" onChange={this.inputChange} />
						</div>
						<div className="form-group">
							<input type="time" className="form-control" name="time" onChange={this.inputChange} />
						</div>
						<div className="form-group">
							<button className="btn-1" onClick={this.saveIncome}>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Income;
