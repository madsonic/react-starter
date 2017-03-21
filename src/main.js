import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import reducers from './store/reducers';

import App from './components/App';

const MOUNT_ELEMENT = document.getElementById('root');
const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    MOUNT_ELEMENT,
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
