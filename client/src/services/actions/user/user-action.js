export const doLogin = (user) => ({
    type: 'USER_LOGIN',
    payload: user
})

export const doLogout = () => ({
    type: 'USER_LOGOUT'
})