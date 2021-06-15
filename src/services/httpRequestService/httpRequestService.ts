export class HttpRequestService {
    static async fetch<T>(url: string, options?: RequestInit): Promise<T> {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
            throw e;
            // todo: errors handling
        }
    }
}
