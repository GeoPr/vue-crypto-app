<template>
    <form @submit.prevent="addTicker()">
        <div class="flex">
            <div class="max-w-xs">
                <label
                    for="wallet"
                    class="block text-sm font-medium text-gray-700"
                >
                    Тикер
                </label
                >
                <div class="mt-1 relative rounded-md shadow-md">
                    <input
                        type="text"
                        name="wallet"
                        id="wallet"
                        class="block w-full p-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md h-10"
                        placeholder="Например DOGE, BCH, CHD"
                        v-model="tickerName"
                        @input="onInputChange"
                    />
                </div>
                <div
                    class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap"
                    v-if="filteredCoins?.length"
                >
                    <span
                        class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
                        v-for="coin in filteredCoins"
                        :key="coin.Symbol"
                        @click="addTicker(coin.Symbol)"
                    >
                      {{ coin?.Symbol.toUpperCase() }}
                    </span>
                </div>
                <div class="text-sm text-red-600" v-if="error || !tickerName">
                    {{ error }}
                </div>
            </div>
        </div>
        <button
            type="submit"
            class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
            <!-- Heroicon name: solid/mail -->
            <svg
                class="-ml-0.5 mr-2 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#ffffff"
            >
                <path
                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                ></path>
            </svg>
            Добавить
        </button>
    </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'TickerForm',
    computed: {
        ...mapGetters({
            tickers: 'tickersStore/tickers',
            filteredCoins: 'coinsStore/filteredCoins',
        }),
    },
    data() {
        return {
            tickerName: '',
            error: '',
        };
    },
    methods: {
        ...mapActions({
            add: 'tickersStore/add',
        }),
        ...mapMutations({
            validateCoins: 'coinsStore/validateCoins',
            resetFilteredCoins: 'coinsStore/resetFilteredCoins',
        }),
        addTicker(name) {
            const trimmed = this.tickerName.trim();

            if (trimmed) {
                this.add(name ?? trimmed)
                    .then(() => {
                        this.error = '';
                        this.tickerName = '';
                        this.resetFilteredCoins();
                    })
                    .catch(() => {
                        this.error = 'This ticker exists already';
                    });
                // .finally(() => {
                //     this.tickerName = '';
                //     this.resetCoins();
                // });
            } else {
                this.error = 'Cannot be empty';
            }
        },
        onInputChange() {
            this.validateCoins({ length: 4, tickerName: this.tickerName });
        },
    },
};
</script>
