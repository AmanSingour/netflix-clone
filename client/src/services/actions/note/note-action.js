export const addNote = (note) => ({
    type: '@note/add',
    payload: note
})

export const removeNote = (index) => ({
    type: '@note/remove',
    payload: index
})