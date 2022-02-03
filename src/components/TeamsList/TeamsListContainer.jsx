import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TeamsList from './TeamsList';
import { requestLeagueTeams } from './../../redux/leagueTeamsReducer';
import { useMatch } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';

const TeamListContainer = (props) => {

    useEffect(() => {
        props.requestLeagueTeams(props.match.params.leagueId);
    }, [props.match.params])

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

const TeamListURLMatch = (props) => {
    const match = useMatch('/league-list/team-list/:leagueId');
    return <TeamListContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {
    requestLeagueTeams,
})(TeamListURLMatch);