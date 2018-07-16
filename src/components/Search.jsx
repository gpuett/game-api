import React from 'react';
import { fetchGameId } from './../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Search({dispatch}){
  let input;
  return(
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchGameId(input.value.trim()))
          console.log('SEARCHED TITLE:');
          console.log(input.value.trim());
          input.value = '';
        }}>
        <input placeholder="Game Title" ref={node => {
            input = node;
          }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

Search.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(Search);
