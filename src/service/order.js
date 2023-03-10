import axios from "../config/axios";

export default class order {

    // static baseURL = 'user';

    static detailUser(id, data) {
        return axios.get('/details-user/' + id, { params: data });
    }
    static save(data) {
        return axios.post("/order/book", data,);
    }
    static list(data) {
        return axios.post("/order/get/All", data);
    }
    static cancel(data) {
        return axios.post("/order/cancel", data);
    }
    
}