import { ICryptoOutput } from '@/services/cryptoService/types';
import { getQueryParams } from '@/utils/getQueryParams/getQueryParams';

const URL = 'https://min-api.cryptocompare.com/data/price';
const tsyms = ['USD'].join(',');
const api_key = 'f810dcf12cbd68a3d9cba842b01db31fff8130a8ffac161ee6ddb4e50e054e5b';

export class CryptoService {
    static async getCrypto(_fsym: string): Promise<ICryptoOutput> {
        const fsym = _fsym.toUpperCase();
        const queries = getQueryParams({ fsym, tsyms, api_key });
        const requestUrl = URL + queries;

        try {
            const response = await fetch(requestUrl);
            const data: ICryptoOutput = await response.json();
            return Promise.resolve(data);
        } catch (e) {
            return Promise.reject(e);
        }
    }
}
