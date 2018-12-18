import axios from 'axios';


const KEY = "AIzaSyDRkdBVFIzMUTFwguNycLDx6PYeU16CSyI";


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
		
	}
});