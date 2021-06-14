<template>
    <div class="wrapper">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
.wrapper {
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 50px 0;
}
</style>
