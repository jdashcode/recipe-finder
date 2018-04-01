import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: []
    };
  }

  handleInputChange = () => {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.setState({
        query: this.search.value
      });
      this.searchMeals();
    }, 1000);
  };

  searchMeals = () => {
    fetch(API_URL + this.search.value)
      .then(response => {
        return response.json();
      })
      .then(results => {
        const meals = results.meals;
        this.props.startLoadingResults(results);
        const mealNames = [];
        meals.forEach(meal => {
          mealNames.push({ id: meal.idMeal, meal: meal.strMeal });
        });
        this.setState({ results: mealNames });
      })
      .catch(err => {
        console.log('error fetching search results', err);
      });
  };

  render() {
    return (
      <div>
        <div className="nav-banner">
          <Link to="/">
            <FontAwesome className="back-btn" name="arrow-left" />
          </Link>
          <form>
            <input
              className="search-input"
              type="text"
              placeholder="I'm craving..."
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
        <div className="search-results-container">
          {this.state.results.map((meal, index) => {
            return (
              <Link key={index} to={`/single/${meal.id}`}>
                <li className="search-result" key={meal.id}>
                  {meal.meal}
                </li>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
