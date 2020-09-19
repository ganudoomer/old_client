import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './container/Login';
import LoginDealer from './container/dealer/Login';
import DashAdmin from './container/layout';
import DashDealer from './container/dealer/layout';
import HomeUser from './container/User/Home';
function App() {
	return (
		<Switch>
			<Route path="/dealer/login" component={LoginDealer} />
			<Route path="/dealer/dash" component={DashDealer} />
			<Route path="/login" component={Login} />
			<Route path="/dash" component={DashAdmin} />
		</Switch>
	);
}

export default App;
