import * as actions from './actions';

function flatten(user) {
  return Object.entries(user).reduce(
    (acc, curr) => acc + curr.reduce((acc, curr) => acc + curr)
  );
}

function searchUser(users, hint) {
  return users.filter((user) => flatten(user).includes(hint));
}

function deleteUser(users, username) {
  return users.filter((x) => {
    return x.username !== username;
  });
}

export default function rootReducer(
  state = {
    users: [],
    filtered: [],
    onLoadError: false,
    isFetching: false,
    hint: '',
  },
  action
) {
  switch (action.type) {
    case actions.SEARCH_USER:
      return {
        ...state,
        filtered: searchUser(state.users, action.hint),
      };
      break;
    case actions.FETCH_USERS:
      return {
        ...state,
        isFetching: true,
      };
    case actions.FETCH_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        onLoadError: true,
      };
    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        filtered: action.users,
        isFetching: false,
      };
    case actions.DELETE_USER:
      return {
        ...state,
        users: deleteUser(state.users, action.user),
        filtered: deleteUser(state.users, action.user),
      };
    default:
      return state;
  }
}
