import axios from "axios";


const baseURL = "https://nse-stocks-test.herokuapp.com/";

export default axios.create({
    baseURL: baseURL,
    headers: {
        "Content-type": "application/json"
    }
});
