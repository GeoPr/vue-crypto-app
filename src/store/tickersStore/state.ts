import { IState } from '@/store/tickersStore/types';

export const state = (): IState => ({
    tickers: [],
    selectedTicker: null,
    filteredTickers: [],
});
