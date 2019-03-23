import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../App';
import rootReducer from '../../reducers';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <App />
    </Provider>, div);
  unmountComponentAtNode(div);
});
