import constants from './../../src/constants';
import {createStore} from 'redux';
import gameChangeReducer from './../../src/reducers/game-change-reducer';

describe('Giant Bomb', () => {
  const {initialState, types} = constants;
  const store = createStore(gameChangeReducer, initialState);


});
