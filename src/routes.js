import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

/*IndexRoute
Redirect*/

import App from './components/App';

import Audience from './components/Audience/Audience';
import Speaker from './components/Speaker/Speaker';
import Board from './components/Board/Board';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Audience} />
		<Route path="audience" component={Audience} />
		<Route path="speaker" component={Speaker} />
		<Route path="board" component={Board} />

		<Redirect from='*' to='/' />
	</Route>
);
