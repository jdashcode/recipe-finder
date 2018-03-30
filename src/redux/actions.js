export function startLoadingRecipes() {
  const getRecipe1 = fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  ).then(response => {
    return response.json();
  });
  const getRecipe2 = fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  ).then(response => {
    return response.json();
  });
  const getRecipe3 = fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  ).then(response => {
    return response.json();
  });
  const getRecipe4 = fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  ).then(response => {
    return response.json();
  });
  const getRecipe5 = fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  ).then(response => {
    return response.json();
  });

  return dispatch => {
    return Promise.all([
      getRecipe1,
      getRecipe2,
      getRecipe3,
      getRecipe4,
      getRecipe5
    ])
      .then(recipes => {
        dispatch(loadRecipes(recipes));
      })
      .catch(err => {
        console.log('There was an error fetching data from themealdb.com', err);
      });
  };
}

//action creator
export function loadRecipes(recipes) {
  return {
    type: 'LOAD_RECIPES',
    recipes
  };
}
