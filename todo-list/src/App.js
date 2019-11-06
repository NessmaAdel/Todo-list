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
import uuid from 'uuid';


class App extends Component {
  state = {
    Items: data,
    id: uuid(),
    name: '',
    describ: '',
    completed: false,

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
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeDescribe = (e) => {
    this.setState({
      describ: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/');
    const newItem = {
      id: this.state.id,
      name: this.state.name,
      describ: this.state.describ,
      completed: true,
    }
    const updateItem = [newItem, ...this.state.Items];
    this.setState({
      Items: updateItem,
      name: '',
      describ: '',
      id: uuid()
    });
  }
  handleDelete = (id) => {
    const filtered = this.state.Items.filter(item => item.id !== id);
    this.setState({
      Items: filtered,

    })
  }
  handleSort =() =>{
    const sorting = this.state.Items.sort((a, b) =>{
      var keyA = a.id,
          keyB = b.id;
      // Compare the 2 dates
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  });
  this.setState({
    Items: sorting,

  })
  }
  render() {
    const { language } = this.props;
    const { name, Items, describ } = this.state;
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Todos Items={Items} handleDelete={this.handleDelete} />} />
            <Route path="/todos" exact component={Todos} />
            <Route path="/view/:Id" exact component={ShowTodo} />
          </Switch>
          <Settings handleSort={this.handleSort}/>
          <AddTodo
            name={name}
            describ={describ}
            handleChangeName={this.handleChangeName}
            handleChangeDescribe={this.handleChangeDescribe}
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
