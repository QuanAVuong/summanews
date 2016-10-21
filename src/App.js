// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import store from './store/store.js';
// REACT-REDUX
import { Provider } from 'react-redux';

// PRESENTATIONAL COMPONENTS

// CONTAINER COMPONENTS
import InputContainer from './components/InputContainer.js';
import OutputContainer from './components/OutputContainer.js';

// ACTIONS
// import { addItem, removeItem, countItem, showCart } from './actions/actions.js'

// STYLES
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

const App = () => (
	<div id="landing-main">
		<InputContainer />
		<OutputContainer />

	</div>
)

ReactDOM.render(
	<Provider store={store}>
	  	<App />
	</Provider>,
	document.getElementById('root')
);
