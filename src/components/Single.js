import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Single extends Component {
  componentWillUnmount() {
    this.props.startLoadingResults([]);
  }

  render() {
    const recipes = this.props.recipes;
    const results = this.props.results;
    const match = this.props.match;
    const id = match.params.id;
    let recipe, meal;

    if (results.length === 0) {
      recipe = recipes.find(recipe => recipe.meals[0].idMeal === id);
      meal = recipe.meals[0];
    } else {
      recipe = results.meals.find(recipe => recipe.idMeal === id);
      meal = recipe;
    }
    let ingredients = [];
    if (this.props.loading === true) {
      return <div className="loader">...loading</div>;
    } else if (recipe) {
      // get ingredients
      for (const prop in meal) {
        if (prop.indexOf('strIngredient') > -1 && meal[prop]) {
          let index = prop.substring(prop.length - 1);
          ingredients.push(meal['strMeasure' + index] + ' ' + meal[prop]);
        }
      }

      return (
        <div className="single-recipe">
          <div className="nav-banner">
            <Link to="/">
              <FontAwesome className="back-btn" name="arrow-left" />
            </Link>
            <FontAwesome className="fav-btn" name="heart" />
          </div>
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
      return (
        <div className="single-recipe">
          <div className="nav-banner">
            <Link to="/">
              <FontAwesome className="back-btn" name="arrow-left" />
            </Link>
            <FontAwesome className="fav-btn" name="heart" />
          </div>
          <h1>...no recipe found</h1>
        </div>
      );
    }
  }
}

export default Single;
