<template>
    <form novalidate>
        <div class="form-group">
            <label for="username">User Name: </label>
            <input type="text" id="username" class="form-control" v-model="loginForm.name">
        </div>
        <div class="form-group">
            <label for="pwd">Password: </label>
            <input type="password" id="pwd" class="form-control" v-model="loginForm.pwd">
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Login" @click="login()">
        </div>
    </form>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import apiService from '../service/api.service';

export default {
  data(){
      return {
          loginForm: {
              name: '',
              pwd: ''
          }
      }
  },
  computed: mapState([
      'user',
      'isLogin'
  ]),
  methods: {
      login(){
        apiService.login(this.loginForm)
            .then(res=>{
                // console.log(res);
                let data = res.data;
                this.setUser(data.user);
                if(data.status === 1){
                    this.setLogin(true);
                    this.$router.push({name: 'Home'});
                }
            })
            .catch(err=>{
                console.log(err);
            })
      },
      ...mapMutations([
          'setUser',
          'setLogin'
      ])
  }
}
</script>
<style lang="scss">
    form{
        text-align: left;
        margin-top: 20px;
    }
</style>


