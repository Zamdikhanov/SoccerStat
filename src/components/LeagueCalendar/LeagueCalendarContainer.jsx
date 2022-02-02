import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { requestLeagueMatches } from '../../redux/leagueMatchesReducer';
import LeagueCalendar from './LeagueCalendar';

const LeagueCalendarContainer = (props) => {

    useEffect(() => {
        props.requestLeagueMatches(props.match.params.leagueId);
    }, props.match.params);
    
    return (
        <>
            <LeagueCalendar {...props.leagueMathes} />
        </>
    )
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