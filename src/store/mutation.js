export default {
    setUser(state, user) {
        state.user = user;
    },
    setLogin(state, isLogin) {
        state.isLogin = isLogin;
    },
    setRedirectUrl(state, url) {
        state.redirectUrl = url;
    },
    setError(state, hasError) {
        state.hasError = hasError;
    }
};