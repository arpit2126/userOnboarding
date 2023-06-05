import React, { Component } from 'react';
import { render } from 'react-dom';

import * as actions from './state/actions';

import { Provider, connect } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './state/reducers';

import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import Loader from './components/Loader';

import './css/index.scss';

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.filtered.map((user, index) => (
      <UserCard key={index} user={user} deleteUser={this.props.deleteUser} />
    ));
    return (
      <React.Fragment>
        <SearchBar handleChange={this.props.handleChange} />
        {this.props.isFetching ? <Loader /> : null}
        <div>{users}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  filtered: state.filtered,
  onLoadError: state.onLoadError,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(actions.searchUser(event.target.value.trim()));
  },
  fetchUsers: () => {
    dispatch(actions.fetchUsers());
  },
  deleteUser: (event) => {
    console.log('==>', event.target.id);
    dispatch(actions.deleteUser(event.target.id));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
