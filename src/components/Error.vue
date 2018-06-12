<template>
    <h1>{{errorMsg}}</h1>
</template>
<script>
import { mapState } from "vuex";

export default {
    computed: mapState([
        'errorMsg'
    ])
}
</script>
<style lang="scss">

</style>