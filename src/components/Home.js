import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				{/* income & expense button */}
				<div className="container">
					<div className="row">
						<div className="col-6 padrem">
							<Link to="/income">
								<div className="card-1 m-2 bg-dark">
									<i className="las la-plus"></i>
									<p>Income</p>
								</div>
							</Link>
						</div>
						<div className="col-6 padrem">
							<Link to="/expense">
								<div className="card-1 m-2 bg-dark">
									<i className="las la-minus"></i>
									<p>Expense</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<hr className="hr-1" />
				{/* current status */}
				<div className="container ex-in-box">
					<div className="row">
						<div className="col-6 br-1">
							<div className="in-1">
								<p>₹8000</p>
								<div>Income</div>
							</div>
						</div>
						<div className="col-6">
							<div className="in-1">
								<p>₹8000</p>
								<div>Expense</div>
							</div>
						</div>
					</div>
				</div>
				{/* last income & expense */}
				<div className="container">
					<table className="table-1">
						<thead>
							<tr>
								<th colSpan="2">Last Expense</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Food</td>
								<td>₹ 200</td>
							</tr>
							<tr>
								<td>Food</td>
								<td>₹ 2000</td>
							</tr>
							<tr>
								<td>Food</td>
								<td>₹ 200</td>
							</tr>
						</tbody>
					</table>
					<table className="table-1">
						<thead>
							<tr>
								<th colSpan="2">Last Income</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Salary</td>
								<td>₹ 200</td>
							</tr>
							<tr>
								<td>Sales</td>
								<td>₹ 200</td>
							</tr>
							<tr>
								<td>Other</td>
								<td>₹ 200</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Home;
