import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from '../App/AppContainer';
import store from '../../Redux/store';

const WrappedApp = () => (
	<Provider store={ store }>
		<Router>
			<AppContainer/>
		</Router>
	</Provider>
);

export default WrappedApp;
