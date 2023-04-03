import axios from "axios";

const searchImages = async () => {
    return await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: "Client-ID i4YLjl7eRO_1YTICFwjzfHasr7wbI8LfagA8ZV-im24"
        },
        params: {
            query: 'cars'
        }
    });
};

export default searchImages;