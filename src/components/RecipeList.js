import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeList(props) {
  return (
    <div>
      <div className="rod-title">Recipes of the Day</div>
      <div className="recipe-list">
        {props.recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} {...props} />
        ))}
      </div>
    </div>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;
