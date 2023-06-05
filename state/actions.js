export const SEARCH_USER = 'SEARCH_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const URL = 'https://jsonplaceholder.typicode.com/users';

export const searchUser = (hint) => ({
  type: SEARCH_USER,
  hint,
});

export const receiveUsers = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users,
});

export const fetchError = () => ({ type: FETCH_USERS_ERROR });

export const fetchUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USERS });

  return fetch(URL)
    .then((res) => res.json())
    .catch((err) => {
      dispatch(fetchError());
    })
    .then((data) => {
      dispatch(receiveUsers(data));
    })
    .catch((err) => {
      dispatch(fetchError());
    });
};

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

export const deleteUser = (user) => ({
  type: DELETE_USER,
  user,
});
