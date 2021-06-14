import { ModuleStore } from '@/utils/getStoreModules/types';
import { IState } from '@/store/coinsStore/types';
import { state } from '@/store/coinsStore/state';
import { getters } from '@/store/coinsStore/getters';
import { mutations } from '@/store/coinsStore/mutations';
import { actions } from '@/store/coinsStore/actions';

export const coinsStore: ModuleStore<IState> = {
    name: 'coinsStore',
    state,
    getters,
    mutations,
    actions,
};
