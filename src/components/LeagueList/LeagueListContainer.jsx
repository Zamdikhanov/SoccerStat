import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LeagueList from './LeagueList';
import { requestLeague } from './../../redux/leagueReducer';
import Preloader from '../../common/Preloader/Preloader';

const LeagueListContainer = (props) => {

    useEffect(() => {
        props.requestLeague();
    }, [])

    return (
        <>
            {props.league.isLoading
                ? <Preloader />
                : <LeagueList {...props} />
            }
        </>)
}

let mapStateToProps = (state) => ({
    league: state.league,
});


export default connect(mapStateToProps, {
    requestLeague,
})(LeagueListContainer);