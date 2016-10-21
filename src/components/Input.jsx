import React from 'react';
import store from'../store/store.js'
import { sum } from '../actions/actions.js'

const Input = () => (
	<div>
		<h2>Input</h2>

		<input id="find" type="text" placeholder="Enter Article's URL"></input>
		<button onClick={store.dispatch.bind( this, sum() )}>SumMaNews!</button>

	</div>
)

export default Input;

