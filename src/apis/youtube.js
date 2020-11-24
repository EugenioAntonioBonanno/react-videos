import axios from 'axios';

const KEY = 'AIzaSyB9Sxh3hkI8ORlnzoELQOKlk1MAgpa1xUc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params : {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
