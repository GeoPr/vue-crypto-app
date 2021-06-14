import { ModuleStore } from '@/utils/getStoreModules/types';

interface IState {
    graph: number[];
}

export const graphStore: ModuleStore<IState> = {
    name: 'graphStore',
    state: () => ({
        graph: [],
    }),
    mutations: {
        updateGraph(state, price) {
            state.graph.push(price);
        },
        resetGraph(state) {
            state.graph = [];
        },
    },
    getters: {
        graph(state) {
            const maxValue = Math.max(...state.graph);
            const minValue = Math.min(...state.graph);
            const minHeight = 5;

            return state.graph.map(price => {
                return minHeight + ((price - minValue) * (100 - minHeight)) / (maxValue - minValue) || minHeight;
            });
        },
    },
};
