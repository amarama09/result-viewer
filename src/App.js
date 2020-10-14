import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SinglePage from './components/singlepage';
import ErrorBoundary from './components/errorboundary';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/projects/:pipelineId"
          render={props => (
            <ErrorBoundary>
              <SinglePage {...props} />
            </ErrorBoundary>
          )}
        />
      </Switch>
    );
  }
}

export default App;
