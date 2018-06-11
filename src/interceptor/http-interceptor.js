import http from 'axios';
import store from '../store/index';

const baseUrl = '/api/';

http.interceptors.request.use(req => {
    store.commit('increaseActiveCalls');
    return req;
}, err => {
    return Promose.reject(err);
});
http.interceptors.response.use(res => {
    store.commit('decreaseActiveCalls');
    return res;
}, err => {
    store.commit('decreaseActiveCalls');
    store.commit('setError', true);
    return Promise.reject(err);
});