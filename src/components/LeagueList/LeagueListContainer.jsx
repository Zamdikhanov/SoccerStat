import React from 'react';
import { connect } from 'react-redux';
import LeagueList from './LeagueList';
import { requestLeague } from './../../redux/leagueReducer';

class LeagueListContainer extends React.Component {

    componentDidMount() {
        this.props.requestLeague();
    }

    render() {
        return (
            <>
                <LeagueList {...this.props} />
            </>)
    }
}

let mapStateToProps = (state) => ({
    league: state.league,
});


export default connect(mapStateToProps, {
    requestLeague,
})(LeagueListContainer);