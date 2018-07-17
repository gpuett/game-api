import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Display({dispatch, game}) {
  const {name, id} = game;
  return(
    <div>
      <h1>{name}</h1>
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

  return {
    game: state
  }
}


export default connect(mapStateToProps)(Display);
