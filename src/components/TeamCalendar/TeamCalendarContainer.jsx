import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import { requestTeamMatches } from './../../redux/teamCalendarReducer';
import TeamCalendar from './TeamCalendar';

const TeamCalendarContainer = (props) => {

    useEffect(() => {
        props.requestTeamMatches(props.match.params.teamId);
    }, [props.match.params])

    return (
        <>
            {props.teamCalendar.isLoading
                ? <Preloader />
                : <TeamCalendar {...props} />
            }
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