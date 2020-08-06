import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Income from './components/Income';
import Expense from './components/Expense';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/income" component={Income}></Route>
      <Route path="/expense" component={Expense}></Route>
    </Router>
  //  <Home/>
  );
}

export default App;
