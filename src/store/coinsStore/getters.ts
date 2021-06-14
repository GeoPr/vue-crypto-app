import { IState } from '@/store/coinsStore/types';

export const getters = {
    coins(state: IState) {
        return state.coins;
    },
    filteredCoins(state: IState) {
        return state.filteredCoins;
    },
};
