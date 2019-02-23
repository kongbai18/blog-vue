<template>
    <div id="box">
        <top-nav></top-nav>

        <div class="container" style="padding-top: 75px">
            <carousel></carousel>

            <div class="row" style="margin-top: 20px">
                <div class="col-sm-8">
                    <ul class="nav nav-tabs" style="margin-bottom: 20px">
                        <li role="presentation" class="active"><a href="#">全部</a></li>
                        <li role="presentation"><a href="#">关注</a></li>
                        <li v-for="item in labelData" role="presentation"><a href="#">{{item.label_name}}</a></li>
                    </ul>

                    <div v-if="articleData.length == 0">
                        <img style="width: 75px;height: 50px" src="/static/img/nodata.png" alt="">
                        <div style="font-size: 12px;fongt-weight:300;margin-top: 5px">暂无数据</div>
                    </div>

                    <div class="panel panel-default" v-for="item in articleData">
                        <div class="panel-body">
                            <div class="head-img" style="display: inline-block;overflow:hidden;width: 60px;height:70px;padding-top:10px;">
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
                            <div v-if="item.article_pic" style="margin-left: 60px">
                                <div style="width: 400px;">
                                    <div v-for="item in strSplit(item.article_pic)" style="width: 110px;height: 110px;margin:2px;display: inline-block;overflow: hidden">
                                        <img :src="item" style="height:110px;width: 110px;vertical-align:middle;" alt="" class="img-responsive center-block">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="height: 40px;margin-left: 60px">
                            <ul class="nav nav-pills">
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-heart-empty"></span> 1</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span> 0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-share" aria-hidden="true"></span> 0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> 0</a></li>
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
    import carousel from '@/components/carousel'
    import asideInfo from '@/components/asideInfo'
    import footerView from '@/components/footer'
    import {labelList,articleList} from "../api/getData";

    export default {
        data(){
            return {
                labelData:[],
                articleData:[],
                pageData:{
                    page_num:1,
                    page_size:10,
                    page_total:1,
                },
            }
        },

        components: {
            topNav,
            carousel,
            asideInfo,
            footerView,
        },

        mounted(){
            this.initData();
        },

        methods:{
            async initData(){
                const res = await labelList();
                if(res.status == 1){
                    this.labelData = res.data;
                }

                const article = await articleList({page:this.pageData.page_num,size:this.pageData.page_size});
                if(article.status == 1){
                    this.articleData = article.data.article;
                    this.pageData = article.data.pageData;
                }
            },

            strSplit(value){
                return value.split(",").splice(0,8);
            },

            async getMore(){
                const article = await articleList({page:1+parseInt(this.pageData.page_num),size:this.pageData.page_size});
                if(article.status == 1){
                    this.articleData = this.articleData.concat(article.data.article);
                    this.pageData = article.data.pageData;
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
        padding-bottom: 120px;
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