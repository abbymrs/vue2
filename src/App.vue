<template>
  <div id="app" class="container">
    <my-header></my-header>
    <router-view v-show="activeCalls<=0"/>
    <div v-show="activeCalls>0">Loading......</div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    "my-header": Header
  },
  computed: mapState([
    // 映射 this.activeCalls 为 store.state.activeCalls
    "activeCalls"
  ])
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
