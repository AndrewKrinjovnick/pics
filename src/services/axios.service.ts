import axios, {
	AxiosError,
	type AxiosHeaders,
	type AxiosInstance,
	type AxiosRequestConfig,
} from 'axios';
import { type HTTPClient } from './types';

export class AxiosClient implements HTTPClient<AxiosRequestConfig> {
	public instance: AxiosInstance;

	constructor(baseURL: string, headers?: AxiosHeaders) {
		const newHeaders = headers ?? {};
		this.instance = axios.create({
			baseURL,
			headers: newHeaders,
		});
	}

	async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
		try {
			const { data } = await this.instance({
				method: 'GET',
				url,
				...options,
			});

			return data;
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.response?.data.message);
			}

			throw err;
		}
	}

	async post<T, K>(url: string, body: K, options?: AxiosRequestConfig): Promise<T> {
		try {
			const { data } = await this.instance({
				method: 'POST',
				url,
				data: body,
				...options,
			});

			return data;
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.response?.data.message);
			}

			throw err;
		}
	}
}
