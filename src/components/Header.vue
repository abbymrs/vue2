<template>
  <div>
    <header>
      <div><img src="../assets/logo.png" alt=""></div>
        <ul class="nav">
            <li class="nav-item" v-for="menu in menus" :key="menu.name">
                <router-link class="nav-link" :to="menu.path">{{menu.name}}</router-link>
            </li>
        </ul>
      <div class="user-action">
        <span v-show="isLogin">{{user && user.name}}&nbsp;|&nbsp;</span>
        <span v-show="isLogin" @click="logout()">logout</span>
        <span v-show="!isLogin" @click="login()">login</span>
      </div>
    </header>
    
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      menus: [
        {
          name: "home",
          path: "/home"
        },
        {
          name: "profile",
          path: "/profile"
        },
        {
          name: "products",
          path: "/products"
        }
      ]
    };
  },
  computed: {
    ...mapState(["isLogin", "user"]),
  },
  methods: {
    ...mapMutations(["setLogin"]),
    login() {
      this.$router.push({ name: "login" });
    },
    logout() {
      this.setLogin(false);
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style lang="scss">
header {
  //   text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50px;
  }
  span {
    cursor: pointer;
  }
}
</style>

