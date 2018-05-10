<template>
  <h1>profile page</h1>
</template>
<script>
import apiService from '../service/api.service';
export default {
  mounted(){
      apiService.randomError()
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
  }
}
</script>
