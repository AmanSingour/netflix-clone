export const doLogin = (user) => ({
    type: '@user/login',
    payload: user
})

export const doLogout = () => ({
    type: '@user/logout'
})