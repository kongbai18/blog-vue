<template>
    <div id="box">
        <top-nav></top-nav>
        <div class="container" style="padding-top: 75px;">
            <div class="row" style="margin-top: 20px">
                <div class="col-sm-8 col-xs-12">

                    <img style="width: 100%;height: 200px;" src="http://pic.shimentown.com/047da95597f822ae5259eb928eb9de3a.jpg" alt="">
                    <div style="width: 100%;height: 60px;background: white;padding: 0 15px;margin-bottom: 20px">
                        <div style="float: left;">
                            <span style="height: 60px;line-height: 60px;font-size: 24px;font-weight: 550"># {{cateInfo.cate_name}} #</span>
                            <button v-if="!isInArray(cateInfo.cate_id,userCate)" @click.stop="concernTheme(cateInfo.cate_id)" class="btn btn-success" style="margin-left: 10px;margin-top: -8px;"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 关注</button>
                            <button v-if="isInArray(cateInfo.cate_id,userCate)" @click.stop="disConcernTheme(cateInfo.cate_id)" class="btn btn-default" style="margin-left: 10px;margin-top: -8px;"><span class="glyphicon glyphicon-ok"></span> 已关注</button>
                            <button @click="goWrite" class="btn btn-info" style="margin-left: 10px;margin-top: -8px;">参与话题</button>
                        </div>
                        <div style="float: right;height: 60px;line-height: 80px;font-size: 10px;" class="hidden-xs">
                            <span>{{cateInfo.view_count}}浏览</span>
                            <span>{{cateInfo.content_count}}内容</span>
                            <span>{{cateInfo.concern_count}}关注</span>
                        </div>
                    </div>

                    <div v-if="articleData.length == 0">
                        <img style="width: 75px;height: 50px" src="/static/img/nodata.png" alt="">
                        <div style="font-size: 12px;fongt-weight:300;margin-top: 5px">暂无数据</div>
                    </div>


                    <div class="panel panel-default" v-for="(item,index) in articleData">
                        <div class="panel-body">
                            <div style="display: inline-block;overflow:hidden;width: 60px;height:70px;padding-top:10px;">
                                <img style="width: 50px;height: 50px" :src="item.user_photo_url" alt="" class="img-circle">
                            </div>
                            <div style="display: inline-block;overflow:hidden;height: 70px;">
                                <div style="height: 35px;line-height: 40px">{{item.user_name}}</div>
                                <div style="height: 35px;line-height: 35px;">{{item.create_time | setTime}}</div>
                            </div>
                            <router-link class="router-link" :to="{path: 'article', query: {articleId: item.article_id }}">
                                <h3 style="margin-left:60px;">{{item.article_tittle}}</h3>
                                <p>
                                    {{item.article_content | htmlToStr}}
                                </p>
                            </router-link>
                            <div v-if="item.article_pic" style="margin-left: 60px" class="hidden-xs">
                                <div style="width: 400px;">
                                    <div v-for="item in strSplit(item.article_pic)" style="width: 110px;height: 110px;margin:2px;display: inline-block;overflow: hidden">
                                        <img :src="item" style="height:110px;width: 110px;vertical-align:middle;" alt="" class="img-responsive center-block">
                                    </div>
                                </div>
                            </div>
                            <div v-if="item.article_pic" style="margin-left: 60px" class="visible-xs">
                                <div style="width: 200px;">
                                    <div v-for="item in strSplit(item.article_pic)" style="width: 60px;height: 60px;margin:2px;display: inline-block;overflow: hidden">
                                        <img :src="item" style="height:60px;width: 60px;vertical-align:middle;" alt="" class="img-responsive center-block">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="height: 40px;margin-left: 60px">
                            <ul class="nav nav-pills">
                                <li v-if="!isInArray(item.article_id,userLike)" role="presentation"><a href="javascript:;" @click="like(index,item.article_id)"><span class="glyphicon glyphicon-heart-empty"></span> {{item.article_like_count}}</a></li>
                                <li v-if="isInArray(item.article_id,userLike)" role="presentation"><a href="javascript:;" @click="dislike(index,item.article_id)"><span class="glyphicon glyphicon-heart"></span> {{item.article_like_count}}</a></li>
                                <li role="presentation"><a href="javascript:;"><span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span> {{item.article_comment_count}}</a></li>
                                <li role="presentation"><a href="javascript:;"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> {{item.article_view_count}}</a></li>
                            </ul>
                        </div>
                    </div>

                    <button v-if="articleData.length > 0 && pageData.page_num < pageData.page_total" @click="getMore" class="btn btn-default" style="background: #f8f8f8;">加载更多</button>
                    <div v-if="articleData.length > 0 && pageData.page_num == pageData.page_total">无更多数据</div>
                </div>
                <aside-info></aside-info>
            </div>
        </div>
        <footer-view></footer-view>
    </div>
</template>

<script>
    import topNav from '@/components/topNav'
    import asideInfo from '@/components/asideInfo'
    import footerView from '@/components/footer'
    import {cateInfo,articleList,like,dislike,concernTheme,disConcernTheme} from "../../api/getData";

    export default {
        data(){
            return {
                themeId:'',
                cateInfo:{},
                articleData:[],
                pageData:{
                    page_num:1,
                    page_size:10,
                    page_total:1,
                },
            }
        },

        watch: {
            '$route' (to, from) {
                this.$router.go(0);
            }
        },

        components: {
            topNav,
            asideInfo,
            footerView,
        },

        computed: {
            user () {
                return this.$store.state.user;
            },
            userLike () {
                return this.$store.state.userLike;
            },
            userCate () {
                return this.$store.state.userCate;
            },
        },

        mounted(){
            this.initData();
        },

        methods:{
            async initData(){
                var routerParams = this.$route.query;

                if(routerParams.navId){
                    this.themeId = routerParams.navId;
                }else{
                    this.$router.push({path:'/'});
                }

                this.getCateInfo();
                this.getCateArticle();
            },

            async getCateInfo(){
                const res = await cateInfo(this.themeId);
                console.log(res);
                if(res.status == 1){
                    this.cateInfo = res.data;
                }
            },

            async getCateArticle(){
                console.log(this.articleData);
                const article = await articleList({cate_id:this.themeId,page:this.pageData.page_num,size:this.pageData.page_size});
                console.log(article);
                if(article.status == 1){
                    this.articleData = article.data.article;
                    this.pageData = article.data.pageData;
                }
                console.log(this.articleData);
            },

            async getMore(){
                const article = await articleList({cate_id:this.themeId,page:1+parseInt(this.pageData.page_num),size:this.pageData.page_size});
                if(article.status == 1){
                    this.articleData = this.articleData.concat(article.data.article);
                    this.pageData = article.data.pageData;
                }
            },

            goWrite(){
                const {href} = this.$router.resolve({
                    path: "/write",
                    query: {
                        themeId:this.cateInfo.cate_id,
                    }
                });
                window.open(href, '_blank');
            },

            strSplit(value){
                return value.split(",").splice(0,8);
            },

            async like(index,articleId){
                if(localStorage.getItem('loginStorage') == 'true'){
                    const res = await like({article_id:articleId});
                    if(res.status == 1){
                        //改变用点赞数组
                        this.userLike.push(articleId);
                        this.$store.dispatch('changeUserLike',this.userLike);
                        //改变文章点赞数
                        this.articleData[index].article_like_count = this.articleData[index].article_like_count+1;
                        //改变用户点赞数
                        this.user.like_count = this.user.like_count + 1;
                        this.$store.dispatch('changeStatus',this.user);

                        this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'点赞成功！'});
                        let _this = this;
                        window.setTimeout(function(){
                            _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'点赞成功！'});
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

            async dislike(index,articleId){
                if(localStorage.getItem('loginStorage')){
                    const res = await dislike({article_id:articleId});
                    if(res.status == 1){
                        //改变用点赞数组
                        let key = this.getArrayKey(articleId,this.userLike);
                        this.userLike.splice(key,1);
                        this.$store.dispatch('changeUserLike',this.userLike);
                        //改变文章点赞数
                        this.articleData[index].article_like_count = this.articleData[index].article_like_count-1;
                        //改变用户点赞数
                        this.user.like_count = this.user.like_count - 1;
                        this.$store.dispatch('changeStatus',this.user);

                        this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'取消点赞成功！'});
                        let _this = this;
                        window.setTimeout(function(){
                            _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'取消点赞成功！'});
                        },2000);
                    }
                }
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
    p {
        overflow: hidden;
        display: -webkit-box;
        margin-top: 10px;
        margin-left: 60px;
        line-height: 25px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    #box{
        min-height: 100%;
        position: relative;
        padding-bottom: 70px;
    }
    .panel-body{
        text-align: left;
    }
    a {
        text-decoration:none;
        color: #2c3e50;
    }
    a:hover{
        text-decoration:none;
        color: #2c3e50;
    }
    .router-link-active {
        text-decoration: none;
    }
</style>