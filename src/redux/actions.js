import { database } from '../database/config';

export function startAddingPost(post) {
  // return dispatch => {
  //   return database
  //     .ref('posts')
  //     .update({
  //       [post.id]: post
  //     })
  //     .then(() => {
  //       dispatch(addPost(post));
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
}

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

export function startRemovingPost(index, id) {
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null
  };
  return dispatch => {
    return database
      .ref(`posts/${id}`)
      .update(updates)
      .then(() => {
        dispatch(removePost(index));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startAddingComment(comment, postId) {
  return dispatch => {
    return database
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startLoadingComments() {
  return dispatch => {
    return database
      .ref('comments')
      .once('value')
      .then(snapshot => {
        let comments = {};
        snapshot.forEach(child => {
          comments[child.key] = Object.values(child.val());
        });
        dispatch(loadComments(comments));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

// remove action creator
export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index
  };
}

// add post action creator
export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  };
}

export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  };
}

export function loadRecipes(recipes) {
  return {
    type: 'LOAD_RECIPES',
    recipes
  };
}

export function loadComments(comments) {
  return {
    type: 'LOAD_COMMENTS',
    comments
  };
}
