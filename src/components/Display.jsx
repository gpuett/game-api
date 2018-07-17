import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Display({dispatch, game}) {
  const {title, id, summary, image} = game;
  return(
    <div>
      <h1>{title}</h1>
      <p>{summary}</p>
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
  let info;
  console.log(state);
  const game = state[state.currentGameId];
  // if (!state[state.currentGameId].isFetching) {
  //   info = {
  //     id: state.currentGameId,
  //     title: game.title,
  //     summary: game.summary,
  //     image: game.image
  //   };
  // } else {
  //   info = {
  //     title: '',
  //     summary: '',
  //     image: ''
  //   };
  // }
  return {
    game: state
  }
}


export default connect(mapStateToProps)(Display);
