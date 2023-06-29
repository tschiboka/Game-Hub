import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "cf739f8227b1482b9ca0c327a451b9c6"
    }
})