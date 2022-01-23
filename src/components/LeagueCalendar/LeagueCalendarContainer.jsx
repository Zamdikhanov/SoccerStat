import React from 'react';
import { connect } from 'react-redux';
import { requestLeagueMatches } from '../../redux/leagueMatchesReducer';
import LeagueCalendar from './LeagueCalendar';

class LeagueCalendarContainer extends React.Component {
    componentDidMount() {
        this.props.requestLeagueMatches();
    }
    render() {
        return (
            <>
            <LeagueCalendar {...this.props.leagueMathes} />
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    leagueMathes: state.leagueMatches,
});

export default connect(mapStateToProps, {
    requestLeagueMatches,
})(LeagueCalendarContainer);