<template>
    <h1 class="something">Hello World</h1>
</template>

<script>
    export default {
        name: "Demo"
    }
</script>

<style lang="scss" scoped>
    @use "./settings";

    .something {
        color: settings.$grey;
    }
</style>
