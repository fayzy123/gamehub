import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'ad04d28ce18d4f09b631546b9bc7ab3f'
    }
})