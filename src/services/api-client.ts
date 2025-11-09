import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const baseURL = import.meta.env.VITE_RAWG_BASE_URL || "https://api.rawg.io/api";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

if (!apiKey) console.warn("[GameHub] Missing VITE_RAWG_API_KEY — RAWG requests will fail.");

const axiosInstance = axios.create({
    baseURL,
    params: { key: apiKey },
    timeout: 15000,
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
    get = (id: number | string) => {
       return axiosInstance.get<T>(this.endpoint + '/' + id)
        .then(res => res.data);
    }
}

export default APIClient;