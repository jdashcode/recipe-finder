import React, { Component } from 'react';
import Recipe from './Recipe';
import Comments from './Comments';
import { Link } from 'react-router-dom';

class Single extends Component {
  render() {
    const recipes = this.props.recipes;
    const match = this.props.match;
    const id = match.params.id;
    const recipe = recipes.find(recipe => recipe.meals[0].idMeal === id);
    const index = this.props.recipes.findIndex(
      recipe => recipe.meals[0].idMeal === id
    );
    let ingredients = [];
    if (this.props.loading === true) {
      return <div className="loader">...loading</div>;
    } else if (recipe) {
      const meal = recipe.meals[0];

      // get ingredients
      for (const prop in meal) {
        if (prop.indexOf('strIngredient') > -1 && meal[prop]) {
          let index = prop.substring(prop.length - 1);
          ingredients.push(meal['strMeasure' + index] + ' ' + meal[prop]);
        }
      }

      return (
        <div className="single-recipe">
          <Link to="/">
            <div className="nav-banner">
              <i className="fas fa-arrow-left" />
            </div>
          </Link>
          <h1>
            <img
              className="recipe-img"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </h1>
          <div className="recipe-contents">
            <h2 className="recipe-title">{meal.strMeal}</h2>
            {ingredients.map((ingr, index) => (
              <div className="ingredient" key={index}>
                {ingr}
              </div>
            ))}
            <h2 className="recipe-title">Directions</h2>
            {meal.strInstructions}
          </div>
        </div>
      );
    } else {
      return <h1>...no recipe found</h1>;
    }
  }
}

export default Single;
