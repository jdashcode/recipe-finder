import _recipes from '../data/recipes';
import { combineReducers } from 'redux';

function recipes(state = _recipes, action) {
  switch (action.type) {
    case 'LOAD_RECIPES':
      return action.recipes;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes });

export default rootReducer;
