<template>
    <div class="max-w-xs">
        <label
            for="filter"
            class="block text-sm font-medium text-gray-700"
        >
            Фильтр:
        </label
        >
        <div class="mt-1 relative rounded-md shadow-md">
            <input
                type="text"
                name="filter"
                id="filter"
                class="block w-full p-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md h-10"
                placeholder="Например DOGE, BCH, CHD"
                v-model="tickerName"
                @input="filter"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'Filter',
    data() {
        return {
            tickerName: '',
        }
    },
    computed: {
        ...mapGetters({
            filteredTickers: 'tickersStore/filteredTickers',
        }),
    },
    methods: {
        ...mapMutations({
            filterTickers: 'tickersStore/filter',
        }),
        filter() {
            this.filterTickers(this.tickerName);
        },
    },
};
</script>
