const getters = {
    token: state => state.user.token,
    refresh_token: state => state.user.refresh_token,
    name: state => state.user.name
  }
  export default getters
  