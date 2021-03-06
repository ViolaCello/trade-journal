import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import tradesReducer from './reducers/tradesReducer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import reportWebVitals from './reportWebVitals';
// let reducer = () => console.log("Hello World")
const store = createStore(
  tradesReducer, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(

  <Provider store={store}>
  <Router>
  <App />
  </Router>
</Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
