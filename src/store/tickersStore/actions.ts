import { CryptoService } from '@/services/cryptoService/cryptoService';
import { ActionContext } from 'vuex';
import { IState } from '@/store/tickersStore/types';

export const actions = {
    async add({ state }: ActionContext<IState, IState>, name: string) {
        const getCurrent = () => {
            return state.tickers.find(ticker => ticker.name?.toLowerCase() === name.toLowerCase());
        };

        const candidate = getCurrent();

        if (candidate) {
            return Promise.reject();
        }

        state.tickers.push({
            name,
            price: null,
            graph: [],
            normalizedGraph: [],
        });

        const currentTicker = getCurrent();

        let i = 0;

        const CHECK_FOR_CANCEL_REQUEST_COUNT = 3;

        if (currentTicker) {
            const intervalId = setInterval(async () => {
                i++;
                const { USD } = await CryptoService.getCrypto(name);
                currentTicker.price = +USD?.[USD > 1 ? 'toFixed' : 'toPrecision'](2);

                if (state.selectedTicker) {
                    const maxValue = Math.max(...state.selectedTicker.graph);
                    const minValue = Math.min(...state.selectedTicker.graph);
                    const minHeight = 5;

                    // commit('graphStore/updateGraph', USD, { root: true });
                    currentTicker.graph.push(USD);
                    currentTicker.normalizedGraph = state.selectedTicker.graph.map(price => {
                        const diff = maxValue - minValue;
                        const percent = 100 - minHeight;
                        const result = minHeight + ((price - minValue) * percent) / diff;
                        return (result > 100 ? 100 : result) || minHeight;
                    });
                }

                if (i === CHECK_FOR_CANCEL_REQUEST_COUNT) {
                    i = 0;
                    if (!getCurrent()) {
                        clearInterval(intervalId);
                        // commit('graphStore/resetGraph', null, { root: true });
                    }
                }
            }, 3000);
        }

        return Promise.resolve();
    },
};
