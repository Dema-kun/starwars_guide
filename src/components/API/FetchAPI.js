import axios from "axios";

export default class FetchAPI {
    static async getPage(API_URL, page = 1) {
        const response = await axios.get(`${API_URL}/?page=${page}`);
        return response.data
    };
}