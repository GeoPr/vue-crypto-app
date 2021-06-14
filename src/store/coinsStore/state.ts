import { IState } from '@/store/coinsStore/types';

export const state = (): IState => ({
    coins: [],
    filteredCoins: [],
});
