import React from 'react';
import GameList from './GameList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Display() {
  return(
    <div>
      <GameList />

    </div>
  )
}

Display.propTypes = {
  game: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  console.log(state);
  // const game = state.gamesById[state.currentGameId];
  // if (!state.gamesById[state.currentGameId].isFetching) {
  //   info = {
  //     id: state.currentGameId,
  //     title: game.title
  //   };
  // } else {
  //   info = {
  //     title: ''
  //   };
  // }
  return {
    state
  }
}

export default connect(mapStateToProps)(Display);
