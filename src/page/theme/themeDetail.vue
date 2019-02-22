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
                            <button class="btn btn-success" style="margin-left: 10px;margin-top: -8px;">+关注</button>
                            <button @click="goWrite" class="btn btn-info" style="margin-left: 10px;margin-top: -8px;">参与话题</button>
                        </div>
                        <div style="float: right;height: 60px;line-height: 80px;font-size: 10px;">
                            <span>786浏览</span>
                            <span>100内容</span>
                            <span>8关注</span>
                        </div>
                    </div>

                    <div v-if="articleData.length == 0">
                        <img style="width: 75px;height: 50px" src="/static/img/nodata.png" alt="">
                        <div style="font-size: 12px;fongt-weight:300;margin-top: 5px">暂无数据</div>
                    </div>


                    <div class="panel panel-default" v-for="item in articleData">
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
                        </div>
                        <div style="height: 40px;margin-left: 60px">
                            <ul class="nav nav-pills">
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-heart-empty"></span>1</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-share" aria-hidden="true"></span>0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>0</a></li>
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
    import {cateInfo,articleList} from "../../api/getData";

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
            }
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