import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router-dom';
import { requestTeamMatches } from './../../redux/teamCalendarReducer';
import TeamCalendar from './TeamCalendar';

const TeamCalendarContainer = (props) => {

    let teamId =props.match.params.teamId;
    useEffect(() => {
        props.requestLeagueMatches(teamId);
        console.log('33');
    }, props.match.params)

    return (
        <>
            <TeamCalendar {...this.props} />
        </>
    )
}

const TeamCalendarURLMatch = (props) => {
    const match = useMatch('/league-list/team-list/team-calendar/:teamId');
    return <TeamCalendarContainer {...props} match={match} />;
}

let mapStateToProps = (state) => ({
    teamCalendar: state.teamCalendar,
});

export default connect(mapStateToProps, {
    requestTeamMatches,
})(TeamCalendarURLMatch);