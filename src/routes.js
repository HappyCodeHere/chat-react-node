import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

/*IndexRoute
Redirect*/

import App from './components/App';

import Audience from './components/Audience';
import Speaker from './components/Speaker';
import Board from './components/Board';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Audience} />
		<Route path="audience" component={Audience} />
		<Route path="board" component={Board} />
		<Route path="speaker" component={Speaker} />

	<Redirect from='*' to='/' />
	</Route>
);
