import React, {Component} from 'react';
import Moment from 'moment';
import Nav from './Nav';
import Body from './Body';
import Head from './Head';
import {nextItemInArray} from '../utils';

class Calendar extends Component {

	state = {
		displayedPeriod: Moment(this.props.activeDate),
		viewType: "days",
		views: ["days", "months", "years"]
	};

	changeViewType () {
		const { viewType, views } = this.state;
		let switchTo = nextItemInArray(viewType, views);
		this.goToViewType(switchTo);
	}

	goToViewType (switchTo, displayedPeriod = "") {
		this.setState({
			viewType: switchTo,
			displayedPeriod: displayedPeriod || this.state.displayedPeriod
		});
	}

	moveDisplayedPeriod (delta) {
		const { viewType, displayedPeriod } = this.state;
		const period = viewType === 'days' ? 'months' : 'years';

		this.setState({
			displayedPeriod: displayedPeriod.clone().add(delta, period)
		});
	}

	render () {
		const {selectDay, activeDate, minDate, maxDate} = this.props;
		const { viewType, displayedPeriod } = this.state;

		return (
			<React.Fragment>
			<div className="m-datepicker__nav">
					<Nav
						viewType={viewType}
						displayedPeriod={displayedPeriod}
						onClickPrevious={this.moveDisplayedPeriod.bind(this, -1)}
						onClickViewType={this.changeViewType.bind(this)}
						onClickNext={this.moveDisplayedPeriod.bind(this, 1)}
					/>
				</div>
			<table cellPadding='0' cellSpacing='0'>
				<thead>
					<Head
						displayedPeriod={displayedPeriod}
						viewType={viewType}
					/>
				</thead>
				<tbody className="m-datepicker__calendar">
					<Body viewType={viewType}
								displayedPeriod={displayedPeriod}
								selectDay={selectDay.bind(this)}
								minDate={minDate}
								maxDate={maxDate}
								activeDate={activeDate}
								goToViewType={this.goToViewType.bind(this)}
					/>
				</tbody>
			</table>
			</React.Fragment>
		);
	}
}

export default Calendar;