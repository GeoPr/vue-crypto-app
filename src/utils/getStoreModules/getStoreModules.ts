import { Input, Output } from '@/utils/getStoreModules/types';
import { withNamespacing } from '@/utils/withNamespacing/withNamespacing';

export const getStoreModules = (
    { modules, includeNamespacing = true }: Input,
): Output => {
    return modules.reduce((acc: Output, module) => {
        const name = module.name;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete module.name;
        acc[name] = includeNamespacing ? withNamespacing(module) : module;
        return acc;
    }, {});
};
