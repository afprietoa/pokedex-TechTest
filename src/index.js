import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';



ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
    </Provider>,
  document.getElementById('root')
);


