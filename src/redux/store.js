import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers/combinedReducers';

const store = createStore(combinedReducers,composeWithDevTools())


export default store