import { createStore } from 'vuex';
import { tickersStore } from '@/store/tickersStore/tickersStore';
import { getStoreModules } from '@/utils/getStoreModules/getStoreModules';
import { coinsStore } from '@/store/coinsStore/coinsStore';

// namespaced: true - tickersStore/add
// namespaced: false - add

const modulesArray = [tickersStore, coinsStore];

export const store = createStore({
    modules: getStoreModules({ modules: modulesArray }),
});

export type AppState = typeof store;

// export const storeKey: InjectionKey<Store<AppState>> = Symbol('storte');
// export const useAppStore = () => useStore(storeKey);
