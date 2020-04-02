import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
}