import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TeamsList from './TeamsList';
import { requestLeagueTeams } from './../../redux/leagueTeamsReducer';
import { useSearchParams } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';

const TeamListContainer = (props) => {

    const [searchParams] = useSearchParams();
    const leagueId = searchParams.get('leagueId') || '';

    useEffect(() => {
        props.requestLeagueTeams(leagueId);
    }, [leagueId, props.leagueTeams.error])

    return (
        <>
            {props.leagueTeams.isLoading
                ? <Preloader />
                : <TeamsList {...props} />
            }
        </>
    )
}

let mapStateToProps = (state) => ({
    leagueTeams: state.leagueTeams,
});


export default connect(mapStateToProps, {
    requestLeagueTeams,
})(TeamListContainer);