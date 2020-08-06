import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { homePageData } from '../services/Myservice';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homepage: {},
			expense: '',
			income:''
		};
	}
	componentDidMount() {
		homePageData()
			.then((res) => {
				this.setState({
					homepage: res.data,
					expense: res.data.incandexp[0].expense,
					income: res.data.incandexp[0].income,
				});
			})
			.catch((err) => err);
	}

	render() {
		if (this.state.homepage.incandexp) {
			console.log(this.state.expense);
		}

		// var obj = JSON.parse(inexp);
		// console.log(obj.expense);
		// inexp.map((itm,key)=>{
		// 	let expense =this.state.homepage.incandexp[itm].expense
		// 	let expenseData =Object.keys(expense)
		// 	// let income =this.state.homepage.incandexp[itm].income
		// 	console.log(expenseData);
		// })
		// console.log(inexp);
		// console.log(inexp);
		// for (i in inexp.incandexp) {
		// 	for (j in inexp.incandexp[i].models) {
		// 	  x += inexp.cars[i].models[j] + "<br>";
		// 	}
		//   }
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
								<p>₹ 800</p>
								<div>Income</div>
							</div>
						</div>
						<div className="col-6">
							<div className="in-1">
								<p>₹ {this.state.expense}</p>
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
