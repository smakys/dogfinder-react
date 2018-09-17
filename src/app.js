import React from 'react';
import { render } from 'react-dom';
import Loadable from 'react-loadable';
import { Router } from '@reach/router';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import store from './store';

const LoadableDetails = Loadable({
  loader: () => import('./Details'),
  loading() {
    return (
      <h1>Loading details...</h1>
    )
  }
});

const LoadableResults = Loadable({
  loader: () => import('./Results'),
  loading() {
    return (
      <h1>Loading results...</h1>
    )
  }
});

const LoadableSearchParams= Loadable({
  loader: () => import('./SearchParams'),
  loading() {
    return (
      <h1>Loading results...</h1>
    )
  }
});


class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar></NavBar>
        {/*
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
        */}
        <Provider store={store}>
          <Router>
            <LoadableResults path="/"></LoadableResults>
            <LoadableDetails path="/details/:id"></LoadableDetails>
            <LoadableSearchParams path="/search-params"></LoadableSearchParams>
          </Router>
        </Provider>
      </div>
    )
  }
}

render(<App></App>, document.querySelector('#root'));