import React, { useState } from 'react';
import {
  Route, BrowserRouter as Router
  , withRouter, Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import Settings from './components/Settings/settings';
import TodoList from './components/addTask/addTask';
import Todo from './components/Todo/Todo';
import ShowItem from './components/Todo/showItem';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Todo />
        <Switch>

          <Route path="/todo/:Id" exact component={ShowItem} />

        </Switch>
        <Settings />
        <TodoList />
      </Router>
    </div>
  );
}

export default App;
