import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SearchBtn extends Component {
  render() {
    return (
      <div className="search-btn-container">
        <FontAwesome className="search-btn" name="search" />
      </div>
    );
  }
}

export default SearchBtn;
