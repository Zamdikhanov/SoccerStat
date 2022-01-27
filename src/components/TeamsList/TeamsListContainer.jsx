import React from 'react';
import { connect } from 'react-redux';
import TeamsList from './TeamsList';
import { requestLeagueTeams } from './../../redux/leagueTeamsReducer';
import { Navigate, useMatch } from 'react-router-dom';

class TeamListContainer extends React.Component {

    componentDidMount() {
        if (this.props.match ) {
            this.props.requestLeagueTeams(this.props.match.params.leagueId);
        } else {
            <Navigate to='/league-list' replace={true} />
        }
    }


    render() {
        return (
            <>
                <TeamsList {...this.props} />
            </>)
    }
}

let mapStateToProps = (state) => ({
    leagueTeams: state.leagueTeams,
});

const TeamListURLMatch = (props) => {
    const match = useMatch('/team-list/:leagueId');
    return <TeamListContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {
    requestLeagueTeams,
})(TeamListURLMatch);