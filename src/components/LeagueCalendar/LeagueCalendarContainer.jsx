import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router-dom';
import { requestLeagueMatches } from '../../redux/leagueMatchesReducer';
import LeagueCalendar from './LeagueCalendar';

class LeagueCalendarContainer extends React.Component {
    componentDidMount() {
        if (this.props.match==null) {
            <Navigate to='/league-list' />
        } else {
        this.props.requestLeagueMatches(this.props.match.params.leagueId);
        }
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

const LeagueCalendarURLMatch = (props) => {
    const match = useMatch('/league-list/league-calendar/:leagueId');
    return <LeagueCalendarContainer {...props} match={match} />;
  }

export default connect(mapStateToProps, {
    requestLeagueMatches,
})(LeagueCalendarURLMatch);