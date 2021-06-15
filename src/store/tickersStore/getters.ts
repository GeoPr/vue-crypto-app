import { IState } from '@/store/tickersStore/types';

export const getters = {
    tickers(state: IState) {
        return state.tickers;
    },
    filteredTickers(state: IState) {
        return state.filteredTickers;
    },
    selectedTicker(state: IState) {
        return state.selectedTicker;
    },
};
