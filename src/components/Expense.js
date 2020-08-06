import React, { Component } from 'react';
import PageNav from './PageNav';
import { addExpense } from '../services/Myservice';
class Expense extends Component {
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
	// saveExpense = (e) => {
    //     e.preventDefault();
    //     // console.log(this.state);
	// 	addExpense(this.state).then((res) => {
	// 		if (res.data === 'success') {
	// 			alert(res.data);
	// 		} else {
	// 			alert(res.data);
	// 		}
	// 	}).catch((err)=>err)
    // };
    saveExpense = (e) => {
        e.preventDefault();
        // console.log(this.state);
        const data =  new FormData()
        data.append('amount',this.state.amount)
        data.append('type',this.state.type)
        data.append('desc',this.state.desc)
        data.append('date',this.state.date)
        data.append('time',this.state.time)
		addExpense(data).then((res) => {
			if (res.data.response === 'success') {
                alert(res.data.response);
                this.formClear.reset();
			} else {
				alert(res.data.response);
			}
		}).catch((err)=>err)
	};
	render() {
		return (
			<div className="container-fluid padrem">
				<PageNav pagename="Add Expense" />
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
									Select Type
								</option>
                                <option value="Food">Food</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Fuel">Fuel</option>
                                <option value="Health">Health</option>
                                <option value="Personal">Personal</option>
                                <option value="Education">Education</option>
                                <option value="Other">Other</option>

							</select>
						</div>
						<div className="form-group">
							<textarea
								className="form-control"
								name="desc"
								placeholder="desc"
								onChange={this.inputChange}
							></textarea>
						</div>
						<div className="form-group">
							<input type="date" className="form-control" name="date" onChange={this.inputChange} />
						</div>
						<div className="form-group">
							<input type="time" className="form-control" name="time" onChange={this.inputChange} />
						</div>
						<div className="form-group">
							<button className="btn-1" onClick={this.saveExpense}>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Expense;
