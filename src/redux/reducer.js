import _recipes from '../data/recipes';
import { combineReducers } from 'redux';

function comments(state = [], action) {
  switch (action.type) {
    case 'REMOVE_COMMENT':
      // [...state.slice(0, action.index), ...state.slice(action.index + 1)]
      return state.filter(p => p.id !== action.index);

    case 'ADD_COMMENT':
      if (!state[action.postId]) {
        // havent added comments to this pic yet
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment]
        };
      }

    case 'LOAD_COMMENTS':
      return action.comments;

    default:
      return state;
  }
}

function recipes(state = _recipes, action) {
  switch (action.type) {
    case 'REMOVE_POST':
      // [...state.slice(0, action.index), ...state.slice(action.index + 1)]
      return state.filter(p => p.id !== action.index);

    case 'ADD_POST':
      // return [...state, action.post]
      return state.concat(action.recipe);

    case 'LOAD_RECIPES':
      return action.recipes;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes, comments });

export default rootReducer;
