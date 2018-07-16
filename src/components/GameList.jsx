import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeGame } from './../actions';

function GameList({dispatch, gameList}) {
  return(
    <div>
      <h3>Search History</h3>
      {Object.keys(gameList).map(gameId => {
        let game = gameList[gameId];
        return <li key = {gameId} onClick = {() => {
            dispatch(changeGame(gameId));
          }}>
          {game.title}</li>;
      })}

    </div>
  );
};


GameList.propTypes = {
  gameList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    gameList: state
  };
};

export default connect(mapStateToProps)(GameList);
