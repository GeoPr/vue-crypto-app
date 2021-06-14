<template>
    <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">

        <Loader v-if="isLoading" />

        <div class="container">
            <TickerForm />

            <hr
                class="w-full border-t border-gray-600 my-4"
                v-if="canShowLines()"
            />
            <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">

                <Ticker
                    v-for="ticker in tickers"
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
import { mapGetters } from 'vuex';
import Ticker from '@/components/Ticker';
import Loader from '@/components/Loader';
import Graph from '@/components/Graph';

export default {
    name: 'Home',
    components: { Graph, Loader, Ticker, TickerForm },
    computed: {
        ...mapGetters({
            tickers: 'tickersStore/tickers',
            selectedTicker: 'tickersStore/selectedTicker',
        }),
    },
    data() {
        return {
            isLoading: false, // todo: true
        };
    },
    methods: {
        canShowLines() {
            return this?.tickers?.length;
        },
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    },
};
</script>

