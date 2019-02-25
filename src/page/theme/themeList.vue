<template>
    <div id="container">
        <topNav></topNav>
        <div class="container" style="padding-top: 75px">
            <div class="row">
                <div v-for="item in themeData" class="col-sm-4 col-md-3 theme-list-box">
                    <a @click="goTheme(item.cate_id)">
                    <div class="thumbnail">
                        <div class="list-content">
                            <div class="list-name">{{item.cate_name}}</div>
                            <button v-if="!isInArray(item.cate_id,userCate)" @click.stop="concernTheme(item.cate_id)" class="btn btn-info" type="button"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 关注</button>
                            <button v-if="isInArray(item.cate_id,userCate)" @click.stop="disConcernTheme(item.cate_id)" class="btn btn-default" type="button"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> 已关注</button>
                            <div class="list-line"></div>
                            <div class="list-record">
                                <div class="record-content">
                                    <div class="record-content-num">{{item.content_count}}</div>
                                    <div class="record-content-tittle">内容</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">{{item.concern_count}}</div>
                                    <div class="record-content-tittle">关注</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">{{item.view_count}}</div>
                                    <div class="record-content-tittle">浏览</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                    <div class="list-img">
                        <img src="https://zhangjia.tv/wp-content/themes/LightSNS_1.5_beta_198.7/images/topic-cover.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <footer-view></footer-view>
    </div>
</template>

<script>
    import topNav from '@/components/topNav'
    import footerView from '@/components/footer'
    import {cateList,concernTheme,disConcernTheme} from "../../api/getData";

    export default {
        data(){
            return {
                themeData:[],
            }
        },

        components: {
            topNav,
            footerView,
        },

        computed: {
            userCate () {
                return this.$store.state.userCate;
            },
        },

        mounted(){
            this.initData();
        },

        methods:{
            async initData(){
                const res = await cateList();
                console.log(res);
                if(res.status == 1){
                    this.themeData = res.data;
                }
            },

            goTheme(themeId){
                this.$router.push({path:'/themeDetail',query:{navId:themeId}});
            },

            async concernTheme(themeId){
                if(localStorage.getItem('loginStorage') == 'true'){
                    const res = await concernTheme({cate_id:themeId});
                    if(res.status == 1){
                        //改变用户关注话题数组
                        this.userCate.push(themeId);
                        this.$store.dispatch('changeUserCate',this.userCate);

                        this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'关注成功！'});
                        let _this = this;
                        window.setTimeout(function(){
                            _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'关注成功！'});
                        },2000);
                    }
                }else{
                    this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'请先登陆！'});
                    let _this = this;
                    window.setTimeout(function(){
                        _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'请先登陆！'});
                    },2000);
                }
            },


            async disConcernTheme(themeId){
                if(localStorage.getItem('loginStorage') == 'true'){
                    const res = await disConcernTheme({cate_id:themeId});
                    if(res.status == 1){
                        //改变用户关注话题数组
                        let key = this.getArrayKey(themeId,this.userCate);
                        this.userCate.splice(key,1);
                        this.$store.dispatch('changeUserLike',this.userCate);

                        this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'取消关注成功！'});
                        let _this = this;
                        window.setTimeout(function(){
                            _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'取消关注成功！'});
                        },2000);
                    }
                }else{
                    this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'请先登陆！'});
                    let _this = this;
                    window.setTimeout(function(){
                        _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'请先登陆！'});
                    },2000);
                }
            },

            getArrayKey(val,arr){
                for(var i = 0;i<arr.length;i++){
                    if(val == arr[i]){
                        return i;
                    }
                }
            },

            isInArray(arr1,arr2){
                if(arr2.indexOf(arr1) == -1){
                    return false;
                }else {
                    return true;
                }
            },
        }
    }
</script>

<style scoped>
    #container{
        min-height:100%;
        position: relative;
        padding-bottom: 70px;
    }
    .theme-list-box{
        margin-top: 80px;
    }
    .thumbnail{
        border: 0px solid white;
        padding: 0;
        margin: 0;
    }
    .list-img{
        position: absolute;
        top:0;
        left:calc(50% - 35px);
    }
    .list-img img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
    }
    .list-content{
        margin-top: 40px;
        padding-top: 40px;
        width: 100%;
        height: 280px;
        border-radius: 5px;
        background: white;
    }
    .list-name{
        font-size: 21px;
        font-weight: 500;
    }
    .btn-info{
        background: #25c6fc;
        margin-top: 80px;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        font-size: 15px;
    }
    .btn-default{
        margin-top: 80px;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        font-size: 15px;
    }
    .list-line{
        box-sizing: border-box;
        width: calc(100% - 30px);
        height: 1px;
        background: #f3f3f3;
        margin-top: 20px;
        margin-left: 15px;
    }
    .list-record{
        width: calc(100% - 30px);
        margin-left: 15px;
        margin-top: 10px;
        font-size:0;
    }
    .record-content{
        width: 33.3333%;
        height: 50px;
        margin: 0;
        padding: 0;
        display: inline-block;
        overflow: hidden;
    }
    .record-content-num{
        font-size: 12px;
        font-weight: 300;
        line-height: 25px;
    }
    .record-content-tittle{
        font-size: 16px;
        font-weight: 300;
        line-height: 25px;
    }.record-content-num{
        font-size: 12px;
        font-weight: 300;
        line-height: 25px;
    }
    .record-content-tittle{
        font-size: 16px;
        font-weight: 300;
        line-height: 25px;
    }
    a {
        text-decoration:none;
        color: #2c3e50;
    }
    a:hover{
        text-decoration:none;
        color: #2c3e50;
    }
</style>