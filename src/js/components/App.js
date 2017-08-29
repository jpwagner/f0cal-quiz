import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import SVGContainer from './Canvas';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={SVGContainer} />
  </Router>,
  document.getElementById('app')
)
