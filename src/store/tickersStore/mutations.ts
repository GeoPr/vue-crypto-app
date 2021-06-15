import { ITicker } from '@/store/tickersStore/types';
import { IState } from '@/store/tickersStore/types';

export const mutations = {
    remove(state: IState, { name }: ITicker) {
        state.tickers = state.tickers.filter(ticker => ticker.name !== name);

        if (state.selectedTicker?.name === name) {
            state.selectedTicker = null;
        }

        return true;
    },
    selectTicker(state: IState, ticker: ITicker | null) {
        state.selectedTicker = ticker;
    },
};
