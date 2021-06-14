import { Input } from '@/utils/getQueryParams/types';

export const getQueryParams = (queries: Input): string => {
    return Object.entries(queries).reduce((acc, [key, value], index) => {
        const separator = index ? '&' : '?';
        acc += `${separator}${key}=${value}`;
        return acc;
    }, '');
};
