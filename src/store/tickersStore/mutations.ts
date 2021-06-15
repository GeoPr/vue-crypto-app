import { IFilterOptions, IState, ITicker } from '@/store/tickersStore/types';

export const mutations = {
    remove(state: IState, { name }: ITicker) {
        state.tickers = state.tickers.filter(ticker => ticker.name !== name);
        state.filteredTickers = state.tickers.slice(0, 6); // todo: remove hardcode

        if (state.selectedTicker?.name === name) {
            state.selectedTicker = null;
        }

        return true;
    },
    selectTicker(state: IState, ticker: ITicker | null) {
        state.selectedTicker = ticker;
    },
    filter(state: IState, options: string | IFilterOptions) {
        if (typeof options === 'object' && !Array.isArray(options)) {
            state.filteredTickers = state.tickers.slice(options.start, options.end);
        } else {
            state.filteredTickers = state.tickers.filter(ticker => ticker.name?.includes(options as string));

            if (state.filteredTickers.length === state.tickers.length) {
                state.filteredTickers = state.tickers.slice(0, 6); // todo: remove hardcode
            }
        }
    },
};
