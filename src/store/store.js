import { createStore } from 'redux';
import reducer from '../reducers/reducers.js'

// const store = createStore(reducers)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
