export const addNote = (note) => ({
    type: '@note/add',
    payload: note
})

export const removeNote = () => ({
    type: '@note/remove',
})