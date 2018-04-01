import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Single from './Single';
import SearchBtn from './SearchBtn';
import Search from './Search';
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
              <div>
                <Link to="/search">
                  <SearchBtn {...this.props} />
                </Link>
              </div>
            </div>
          )}
        />

        <Route path="/search" render={params => <Search {...this.props} />} />

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
