import axios from "axios";

const instance=axios.create({
    // baseURL: "https://hidden-reaches-52625.herokuapp.com"
    baseURL: "http://localhost:8000"
});

export default instance;