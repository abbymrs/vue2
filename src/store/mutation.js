export default {
    setUser(state, user) {
        state.user = user;
    },
    increaseActiveCalls(state) {
        state.activeCalls++;
    },
    decreaseActiveCalls(state) {
        state.activeCalls--;
    },
    setLogin(state, isLogin) {
        state.isLogin = isLogin;
    },
    setRedirectUrl(state, url) {
        state.redirectUrl = url;
    },
    setError(state, hasError) {
        state.hasError = hasError;
    },
    setErrorMsg(state, msg) {
        state.errorMsg = msg;
    }
};