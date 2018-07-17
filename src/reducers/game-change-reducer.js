import constants from './../constants';
const { InitialState, types } = constants;

const gameChangeReducer = (state = InitialState.gamesById, action) => {
  let newGamesByIdEntry;
  let newGamesByIdStateSlice;
  switch (action.type) {
    case types.CHANGE_GAME:
      return action.newSelectedGameId;
    case types.REQUEST_GAME:
      newGamesByIdEntry = {
        isFetching: true,
        title: action.title,
        gameId: action.gameId,
        summary: action.summary,
        image: action.image
      };
      newGamesByIdStateSlice = Object.assign({}, state, {
        [action.gameId]: newGamesByIdEntry
      });
      return newGamesByIdStateSlice;
    case types.RECEIVE_GAME:
      newGamesByIdEntry = Object.assign({}, state[action.gameId], {
        isFetching: false,
        receivedAt: action.receivedAt,
        title: action.title,
        image: action.image,
        summary: action.summary,
        gameArray: action.gameArray,
        arrayPosition: 0,
        gameId: action.gameId
      });
      newGamesByIdStateSlice = Object.assign({}, state, {
        [action.gameId]: newGamesByIdEntry
      });
      return newGamesByIdStateSlice;
    default:
      return state;
  }
};

export default gameChangeReducer;
