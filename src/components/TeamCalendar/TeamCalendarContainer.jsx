import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router-dom';
import { requestLeagueMatches } from './../../redux/teamCalendarReducer';
import TeamCalendar from './TeamCalendar';

class TeamCalendarContainer extends React.Component {
    componentDidMount() {
        if (this.props.match == null) {
            <Navigate to='/league-list' />
        } else {
            this.props.requestLeagueMatches(this.props.match.params.teamId);
        }
    }
    render() {
        return (
            <>
                <TeamCalendar {...this.props} />
            </>
        )
    }
}

const TeamCalendarURLMatch = (props) => {
    const match = useMatch('/team-calendar/:teamId');
    return <TeamCalendarContainer {...props} match={match} />;
}

let mapStateToProps = (state) => ({
    teamCalendar: state.teamCalendar,
});

export default connect(mapStateToProps, {
    requestLeagueMatches,
})(TeamCalendarURLMatch);