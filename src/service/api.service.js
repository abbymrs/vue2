import http from 'axios';

const baseUrl = '/api/';

export default {
    randomError(){
        return http.get(`${baseUrl}error`);
    },
    login(data){
        return http.post(`${baseUrl}login`,data);
    }
}