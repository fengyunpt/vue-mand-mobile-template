export const getToken = () => {
    return window.JSON.parse(window.localStorage.getItem('token') || '[]')
}

export const setToken = (token, refresh_token) => {
    window.localStorage.setItem('token', window.JSON.stringify(token))
    window.localStorage.setItem('refresh_token', window.JSON.stringify(refresh_token))
}

export const removeToken = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("refresh_token");
    window.localStorage.removeItem("username");
}

export const getItem = (name) => {
    return window.JSON.parse(window.localStorage.getItem(name) || '')
}

export const setItem = (name, item) => {
    window.localStorage.setItem(name, window.JSON.stringify(item))
}
