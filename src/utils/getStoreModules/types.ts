import { StoreOptions } from 'vuex';

export interface ModuleStore<T = any> extends StoreOptions<T> {
    name: string;
}

export interface Output<T = any> {
    [key: string]: StoreOptions<T>;
}

export interface Input {
    modules: ModuleStore[];
    includeNamespacing?: boolean;
}
