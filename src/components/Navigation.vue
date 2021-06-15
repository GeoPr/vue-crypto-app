<template>
    <div class="buttons">
        <button
            class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            @click="prev"
        >
            Назад
        </button>
        <button
            class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            @click="next"
        >
            Вперед
        </button>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    emits: ['change'],
    props: {
        itemsPerPage: Number,
        maxLength: Number,
    },
    data() {
        return {
            page: 1,
            start: 0,
            end: this.itemsPerPage ?? 6,
        };
    },
    methods: {
        next() {
            if (this.end < this.maxLength) {
                this.page++;
            }
        },
        prev() {
            if (this.page > 1) {
                this.page--;
            }
        },
    },
    watch: {
        page() {
            this.start = (this.page - 1) * this.itemsPerPage;
            this.end = this.page * this.itemsPerPage;

            const { page, start, end } = this;

            this.$emit('change', { page, start, end });
        },
    },
};
</script>

<style scoped>
.buttons {
    display: flex;
    gap: 30px;
}
</style>
