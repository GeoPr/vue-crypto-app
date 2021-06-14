import { StoreOptions } from 'vuex';

export const withNamespacing = <T = any>(module: StoreOptions<T>) => ({
    namespaced: true,
    ...module,
});
