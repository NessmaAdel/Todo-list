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
import Todos from './components/Todo/Todos';
import ShowTodo from './components/Todo/showTodo';


class App extends Component {
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
  render() {
    const { language } = this.props;
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Todos />} />
            <Route path="/todos" exact component={Todos} />
            <Route path="/view/:Id" exact component={ShowTodo} />
          </Switch>
          <Settings />
          <AddTodo />
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
