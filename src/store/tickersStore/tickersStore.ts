import { ModuleStore } from '@/utils/getStoreModules/types';
import { state } from '@/store/tickersStore/state';
import { getters } from '@/store/tickersStore/getters';
import { mutations } from '@/store/tickersStore/mutations';
import { actions } from '@/store/tickersStore/actions';
import { IState } from '@/store/tickersStore/types';

export const tickersStore: ModuleStore<IState> = {
    name: 'tickersStore',
    state,
    getters,
    mutations,
    actions,
};
