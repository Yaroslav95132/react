
import React from 'react'
import { connect } from 'react-redux'
import { addTicket } from '../actionCreators'
import Ticket from './Ticket'
import Filters from './Filters'
const App = props =>
	<div className="container-fluid">
		<div className="logo">
            <img className="logo" src="https://api.fnkr.net/testimg/200x100/00CED1/FFF/?text=avia+sales" />
        </div>

		<div className="row">
			<div className="col-md-3 filters">
				<h4 className="filters__header"> Пересадок </h4>
				<div className="filter">
					<label for="0" className="filter__text"><input type="checkbox" className="filter__checkbox" name="0" />пересадок</label>
					<label for="1" className="filter__text"><input type="checkbox" className="filter__checkbox" name="1" />пересадок</label>
					<label for="2" className="filter__text"><input type="checkbox" className="filter__checkbox" name="2" />пересадок</label>
					<label for="3" className="filter__text"><input type="checkbox" className="filter__checkbox" name="3" />пересадок</label>
				</div>
			
			</div>

		
			<div className="col-md-8">
				{props.tickets.map((ticket, i) => <Ticket {...ticket} />)}
			</div>
			
		</div>
	</div>

const mapStateToProps = state => ({
	tickets: state.tickets,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
