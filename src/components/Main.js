import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Single from './Single';
import { Route, Link } from 'react-router-dom';

class Main extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.startLoadingRecipes().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div className="homepage">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="background">
                <h1>
                  <Link to="/">
                    <img
                      className="logo"
                      src={require('../assets/logo.png')}
                      alt="recipe finder logo"
                    />
                  </Link>
                </h1>
              </div>
              <div>
                <RecipeList {...this.props} />
              </div>
            </div>
          )}
        />

        <Route
          path="/single/:id"
          render={params => (
            <Single loading={this.state.loading} {...this.props} {...params} />
          )}
        />
      </div>
    );
  }
}

export default Main;
