import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const changeGame = (newSelectedGameId) => ({
  type: types.CHANGE_GAME,
  newSelectedGameId
});

export const requestGame = (title, localGameId) => ({
  type: types.REQUEST_GAME,
  gameId: localGameId
})

export const receiveGame = (title, gameId) => ({
  type: types.RECEIVE_GAME,
  title,
  gameId,
  recievedAt: Date.now()
});

export function fetchGameId(title) {
  return function (dispatch) {
    const localGameId = v4();
    dispatch(requestGame(title, localGameId));
    title = title.replace(' ', '_');
    return fetch('https://api-endpoint.igdb.com/games/?search=' + title, {
      headers: {
        'user-key': 'd54cef6af94d47e1df51afe1c3d7c472'
      }
    }).then(response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    if (json.length > 0) {
      const gameId = json[0].id;
      fetchGameInfo(title, gameId, dispatch);
    } else {
      console.log('We couldn\'t locate a song under that ID!');
    }
  })
  }
}

export function fetchGameInfo(title, localGameId, dispatch) {
  return fetch('https://api-endpoint.igdb.com/games/' + localGameId, {
    headers: {
      'user-key': 'd54cef6af94d47e1df51afe1c3d7c472'
    }
  }).then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    if (json[0].name) {
      const title = json[0].name;
      dispatch(receiveGame(title, localGameId));
    } else {
      console.log('We couln\'t locate that game!');
    }
  });
}
