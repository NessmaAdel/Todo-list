import React from 'react';
import { Route, BrowserRouter,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import Settings from './components/Settings/settings';
import AddTask from './components/addTask/addTask';
import {
  setLanguage,
} from './actions';

class App extends React.Component {
  state={
ltr:'en'
  }
  componentDidMount() {
    this.setState({ltr:'ar'})
    const language=['ar','en'];
    const lang=localStorage.setItem('selectedLanguage', language);
    console.log("lang",lang);
  }
  render() {
    const{ltr}=this.state
    return (
      <div className="appContainer" dir={ltr ? 'ltr' : 'rtl'}>
        <BrowserRouter>
          <Header />
          <Route path="/settings" exact component={Settings} />
          <Route path ="/addTask" exact component={AddTask} />
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  language: state.language,
});
const mapDispatchToProps = dispatch => ({
  setLanguageAction: lang => dispatch(setLanguage(lang)),
});

export default (App);
