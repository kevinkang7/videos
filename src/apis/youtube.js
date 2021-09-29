import axios from 'axios';

const KEY = 'AIzaSyA7gK4-aGvM1frrdgxXAR96tawDVUuNS4o';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key:KEY
    }
});