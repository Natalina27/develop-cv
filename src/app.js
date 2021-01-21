//Core
import React from 'react';
import { Router } from 'react-router-dom';

//Routes
import { Routes } from './navigation/index';
//Others
import { history } from './navigation/history';

//Styles
import Styles from './app.module.css';


export const App = () => {
  return (
      <div className={Styles.app}>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
  );
};

