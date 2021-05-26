export const addNote = (note) => ({
  type: "ADD_NOTE",
  payload: note,
});

export const removeNote = (index) => ({
  type: "REMOVE_NOTE",
  payload: index,
});
