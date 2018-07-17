import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function GameList({dispatch, gameList}) {
  return(
    <div>
      <h3>Search History</h3>
      {Object.keys(gameList)
        .filter(gameId => gameList[gameId].title)
        .map(game =>
          <div>
            <p key={game}>{gameList[game].title}</p>
            <p>{gameList[game].summary}</p>
            <img src={gameList[game].image}/>
          </div>)}
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
