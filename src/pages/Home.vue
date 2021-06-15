<template>
    <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">

        <Loader v-if="isLoading" />

        <div class="container">
            <TickerForm />

            <hr
                class="w-full border-t border-gray-600 my-4"
            />

            <Filter />

            <hr
                class="w-full border-t border-gray-600 my-4"
            />

            <Navigation
                :items-per-page="6"
                :max-length="tickers.length"
                @change="onNavigationChange"
            />

            <hr
                class="w-full border-t border-gray-600 my-4"
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
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Ticker from '@/components/Ticker';
import Loader from '@/components/Loader';
import Graph from '@/components/Graph';
import Filter from '@/components/Filter';
import Navigation from '@/components/Navigation';

export default {
    name: 'Home',
    components: { Navigation, Filter, Graph, Loader, Ticker, TickerForm },
    computed: {
        ...mapGetters({
            tickers: 'tickersStore/tickers',
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
        ...mapMutations({
            filterTickers: 'tickersStore/filter',
        }),
        canShowLines() {
            return this?.filteredTickers?.length;
        },
        onNavigationChange({ start, end }) {
            this.filterTickers({ start, end });
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

