import axios from "../config/axios";

export default class menuService {

    
    static getItems(category) {
        return axios.post("menu/"+category);
    }
    
}