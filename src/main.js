import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import reducers from './store/reducers';

import App from './components/App';

/*eslint-disable */
const MOUNT_ELEMENT = document.getElementById('root');
/*eslint-enable */
const store = createStore(reducers);
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
