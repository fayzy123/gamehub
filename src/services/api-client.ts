import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'ad04d28ce18d4f09b631546b9bc7ab3f'
    }
})