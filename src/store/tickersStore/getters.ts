import { IState } from '@/store/tickersStore/types';

export const getters = {
    tickers(state: IState) {
        return state.tickers;
    },
    selectedTicker(state: IState) {
        return state.selectedTicker;
    },
};
