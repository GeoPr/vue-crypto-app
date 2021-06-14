export class HttpRequestService {
    static async fetch<T>(url: string, options?: RequestInit): Promise<T> {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return Promise.resolve(data);
        } catch (e) {
            console.log(e);
            return Promise.reject(e);
            // todo: errors handling
        }
    }
}
