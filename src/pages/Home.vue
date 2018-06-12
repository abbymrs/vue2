<template>
    <h1>home page</h1>
</template>
<script>
import apiService from '../service/api.service';
import { mapMutations } from 'vuex';

export default {
    mounted(){
        apiService.randomError()
            .then(res=>{
                // console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
                this.setErrorMsg(err.response.data.msg);
            })
    },
    methods: {
        ...mapMutations([
            'setErrorMsg'
        ])
    }
};
</script>
<style lang="scss">

</style>


