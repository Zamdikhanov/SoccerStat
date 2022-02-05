import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import { requestTeamMatches } from './../../redux/teamCalendarReducer';
import TeamCalendar from './TeamCalendar';

const TeamCalendarContainer = (props) => {

    const [searchParams] = useSearchParams();
    const teamId = searchParams.get('teamId') || '';
    const requestTeamMatches = (teamId) => props.requestTeamMatches(teamId);

    useEffect(() => {
        requestTeamMatches(teamId);
    }, [teamId])

    return (
        <>
            {props.teamCalendar.isLoading
                ? <Preloader />
                : <TeamCalendar {...props} teamId={teamId} />
            }
        </>
    )
}

let mapStateToProps = (state) => ({
    teamCalendar: state.teamCalendar,
});

export default connect(mapStateToProps, {
    requestTeamMatches,
})(TeamCalendarContainer);