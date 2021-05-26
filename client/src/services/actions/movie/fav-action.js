export const addFav = (id) => ({
    type: "ADD_FAV",
    payload: id,
  });
  
  export const removeFav = (id) => ({
    type: "REMOVE_FAV",
    payload: id,
  });
  
  export const getFav = (data) => ({
    type: "GET_FAV",
    payload: data,
  });