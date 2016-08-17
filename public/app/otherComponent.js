import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Layout from './Layout';
import Archive from './Archive';
import Settings from './Settings';

ReactDOM.render(
	<Router history = {hashHistory}>
		<Route path = "/" component = {Layout}>
		<Route path = 'archives' component = {Archive}></Route>
		<Route path = 'settings' component = {Settings}></Route>
		</Route>
	</Router>
	,document.querySelector('#app'));