<template>
    <div id="app" class="container">
        <my-header></my-header>
        <router-view v-show="activeCalls<=0 && !hasError" />
        <div v-show="activeCalls>0">Loading......</div>
        <error v-show="hasError" :msg="errorMsg"></error>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Error from "@/components/Error";
import { mapState } from "vuex";

export default {
    name: "App",
    components: {
        "my-header": Header,
        "error": Error
    },
    computed: mapState([
        // 映射 this.activeCalls 为 store.state.activeCalls
        "activeCalls",
        "hasError",
        'errorMsg'
    ])
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #eee;
    min-height: 100vh;
    /* margin-top: 60px; */
}
</style>
