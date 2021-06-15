import { ICoin, IState, IValidateCoinsInput } from '@/store/coinsStore/types';

export const mutations = {
    saveCoins(state: IState, coins: ICoin[]) {
        state.coins = coins;
    },
    validateCoins(state: IState, { tickerName, length }: IValidateCoinsInput) {
        const filtered = state.coins.filter(({ Symbol }) => {
            return Symbol.toLowerCase().includes(tickerName.toLowerCase());
        });

        state.filteredCoins = filtered.slice(0, length);
    },
    resetFilteredCoins(state: IState) {
        state.filteredCoins = [];
    },
};
