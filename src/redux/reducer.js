import _recipes from '../data/recipes';
import _results from '../data/results';
import { combineReducers } from 'redux';

function recipes(state = _recipes, action) {
  switch (action.type) {
    case 'LOAD_RECIPES':
      return action.recipes;

    default:
      return state;
  }
}

function results(state = _results, action) {
  switch (action.type) {
    case 'LOAD_RESULTS':
      return action.results;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes, results });

export default rootReducer;
