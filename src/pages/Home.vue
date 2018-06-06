<template>
    <h1>home page</h1>
</template>
<script>
import apiService from '../service/api.service';

export default {
    mounted(){
        apiService.randomError()
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }
};
</script>
<style lang="scss">

</style>


