import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router";
import Results from './Results';
import Details from './Details';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        {/*
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
        */}
        <Router>
          <Results path="/"></Results>
          <Details path="/details/:id"></Details>
        </Router>
      </div>
    )
  }
}

render(<App></App>, document.querySelector('#root'));