<template>
  <div id="app" >
    <router-view></router-view>
  </div>
</template>

<script>
  import {userInfo} from "./api/getData";

  export default {
     data(){
         return {
             loginStatus:'false',
         }
     },

     mounted(){
         this.initData();
     },


     methods:{
         async initData(){
             const res = await userInfo();
             if(res.status == 1){
                 console.log(res);
                 localStorage.setItem('loginStorage',true);
                 this.loginStatus ='true';
                 res.data.user.logStatus = true;
                 this.$store.dispatch('changeStatus',res.data.user);
                 this.$store.dispatch('changeUserLike',res.data.userArticle);
                 this.$store.dispatch('changeUserCate',res.data.userCate);
             }else{
                 localStorage.setItem('loginStorage',false);
                 this.loginStatus ='false';
                 let user = {
                     logStatus:false,
                 };
                 this.$store.dispatch('changeStatus',user);
                 this.$store.dispatch('changeUserLike',[]);
                 this.$store.dispatch('changeUserCate',[]);
             }

             let _this = this;
             setInterval(function () {
                 _this.settime();
             },3000)
         },

         settime(){
             let newStorage = localStorage.getItem('loginStorage');
             if(newStorage != this.loginStatus){
                 this.initData();
             }
         }
     }
  }
</script>

<style>
  html, body { margin: 0; padding: 0; height: 100%;  background: #f6f6fc; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}
</style>
