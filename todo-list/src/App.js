import React, { Component } from 'react';
import {
  Route, BrowserRouter as Router
  , withRouter, Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setLanguage
} from './Store/actions';
import './App.scss';
import Header from './components/Header/Header';
import Settings from './components/Settings/settings';
import AddTodo from './components/addTodo/addTodo';
import data from '../src/components/todo.json';
import Todos from './components/Todo/Todos';
import ShowTodo from './components/Todo/showTodo';
import uuid from 'uuid'

class App extends Component {
  state = {
    Items: data,
    id: uuid(),
    Item: { name: '', describtion: '', completed: false },
  }
  componentDidMount() {
    const { setLanguageAction } = this.props;
    const languages = [{
      "id": 1,
      "isDefault": false,
      "isDeleted": false,
      "language_code": "ar",
      "language_name": "العربية",
      "ltr": false
    }, {
      "id": 2,
      "isDefault": true,
      "isDeleted": false,
      "language_code": "en",
      "language_name": "english",
      "ltr": true
    }];
    const localStorageLang = localStorage.getItem('lang');
    const lang = (localStorageLang ? languages.find(l => l.language_code === localStorageLang) : null) || languages.find(l => l.isDefault);
    if (localStorageLang !== lang.language_code) window.localStorage.setItem('lang', lang.language_code);
    setLanguageAction(lang);
  }
  handleChange = (e) => {
    this.setState({
      Item: { name: e.target.value, describtion: e.target.value, }
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      Item: { name: this.state.Item, describtion: this.state.Item, completed: true }
    }
    const updateItem = [...this.state.Items, newItem];
    this.setState({
      Items: updateItem,
      Item: { name: '', describtion: '', completed: false },
      id: uuid()
    });
  }
  handleDelete = (id) => {
    const filtered = this.state.Items.filter(item => item.id !== id);
    this.setState({
      Items: filtered,

    })
  }
  render() {
    const { language } = this.props;
    const { Item, Items } = this.state;
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Todos Items={Items} handleDelete={this.handleDelete} />} />
            <Route path="/todos" exact component={Todos} />
            <Route path="/view/:Id" exact component={ShowTodo} />
          </Switch>
          <Settings />
          <AddTodo
            Item={Item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  language: state.language
});
const mapDispatchToProps = dispatch => ({
  setLanguageAction: lang => dispatch(setLanguage(lang))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
