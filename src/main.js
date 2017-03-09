import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import reducers from './components/reducers';
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

store.subscribe(render);
render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
