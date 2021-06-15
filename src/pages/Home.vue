<template>
    <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">

        <Loader v-if="isLoading" />

        <div class="container">
            <TickerForm />

            <hr
                class="w-full border-t border-gray-600 my-4"
                v-if="canShowLines()"
            />

            <Filter />

            <hr
                class="w-full border-t border-gray-600 my-4"
                v-if="canShowLines()"
            />

            <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">

                <Ticker
                    v-for="ticker in filteredTickers"
                    :key="ticker.name"
                    :ticker="ticker"
                />

            </dl>

            <hr
                class="w-full border-t border-gray-600 my-4"
                v-if="canShowLines()"
            />

            <Graph v-if="canShowLines() && selectedTicker" />
        </div>
    </div>
</template>

<script>
import TickerForm from '@/components/TickerForm';
import { mapActions, mapGetters } from 'vuex';
import Ticker from '@/components/Ticker';
import Loader from '@/components/Loader';
import Graph from '@/components/Graph';
import Filter from '@/components/Filter';

export default {
    name: 'Home',
    components: { Filter, Graph, Loader, Ticker, TickerForm },
    computed: {
        ...mapGetters({
            filteredTickers: 'tickersStore/filteredTickers',
            selectedTicker: 'tickersStore/selectedTicker',
        }),
    },
    data() {
        return {
            isLoading: true,
        };
    },
    methods: {
        ...mapActions({
            getCoins: 'coinsStore/getCoins',
        }),
        canShowLines() {
            return this?.filteredTickers?.length;
        },
    },
    created() {
        (async () => {
            await this.getCoins();
            this.isLoading = false;
        })();
    },
};
</script>

