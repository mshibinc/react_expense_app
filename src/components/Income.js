import React, { Component } from 'react';
import PageNav from './PageNav';

class Income extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
		};
	}

	render() {
		return (
			<div className="container-fluid padrem">
				<PageNav pagename="Add Income" />

				<div className="container">
					<form>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="amount" />
						</div>
						<div className="form-group">
							<select
								className="form-control"
								value={this.state.category === '' ? 0 : this.state.category}
								name="category">
								<option value="0" disabled style={{ display: 'none' }}>
									Select Category
								</option>
							</select>
						</div>
                        <div className="form-group">
                            <textarea className="form-control" name="" id="" placeholder="desc"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="time" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button className="btn-1">Save</button>
                        </div>
					</form>
				</div>
			</div>
		);
	}
}

export default Income;
