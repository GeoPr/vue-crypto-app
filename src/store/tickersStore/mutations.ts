import { IState, ITicker } from '@/store/tickersStore/types';

export const mutations = {
    remove(state: IState, { name }: ITicker) {
        state.filteredTickers = state.tickers.filter(ticker => ticker.name !== name);

        if (state.selectedTicker?.name === name) {
            state.selectedTicker = null;
        }

        return true;
    },
    selectTicker(state: IState, ticker: ITicker | null) {
        state.selectedTicker = ticker;
    },
    filter(state: IState, name: string) {
        state.filteredTickers = state.tickers.filter(ticker => ticker.name?.includes(name));
    },
};
