import http from 'axios';
import store from '../store/index';

const baseUrl = '/api/';

http.interceptors.request.use(req=>{
    store.state.activeCalls++;
    return req;
}, err=>{
    return Promose.reject(err);
});
http.interceptors.response.use(res=>{
    store.state.activeCalls--;
    return res;
}, err=>{
    store.state.activeCalls--;
    return Promise.reject(err);
});