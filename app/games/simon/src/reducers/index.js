import { combineReducers } from 'redux';
import { routerReducer as routing } from 'connected-next-router';

import pads from './pads';
import game from './game';
import match from './match';

export default combineReducers({
  pads,
  game,
  match,
  routing,
});

