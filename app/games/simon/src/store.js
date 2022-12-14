import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
  )
);

export default createStore(rootReducer, {}, enhancer);
