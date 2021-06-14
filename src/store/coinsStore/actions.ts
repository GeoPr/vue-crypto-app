import { ActionContext } from 'vuex';
import {
    ICoin,
    ICoinsBackendOutput,
    ICoinsOutput,
    IState,
} from '@/store/coinsStore/types';
import { HttpRequestService } from '@/services/httpRequestService/httpRequestService';

const URL = 'https://min-api.cryptocompare.com/data/all/coinlist?summary=true';

// todo: any
const transformData = (data: ICoinsOutput): ICoin[] => {
    return Object.entries(data).reduce((acc: ICoin[], [, value]) => {
        acc.push(value);
        return acc;
    }, []);
};

export const actions = {
    async getCoins({ commit }: ActionContext<IState, IState>) {
        try {
            const { Data: data } = await HttpRequestService.fetch<ICoinsBackendOutput>(URL);
            const coins = transformData(data);
            commit('saveCoins', coins);
        } catch (e) {
            return Promise.reject(e);
        }
    },
};
