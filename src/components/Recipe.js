import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Recipe(props) {
  const recipe = props.recipe.meals[0];
  return (
    <figure className="recipe">
      <Link className="recipe-link" to={`/single/${recipe.idMeal}`}>
        <h2 className="recipe-title">{recipe.strMeal}</h2>
        <img
          className="recipe-img"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
      </Link>
    </figure>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Recipe;
