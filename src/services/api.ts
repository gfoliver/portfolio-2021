import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        "Accept": "application/vnd.github.mercy-preview+json"
    }
});