<template>
    <div id="box">
        <top-nav></top-nav>
        <div class="container" style="padding-top: 75px;">
            <div class="row" style="margin-top: 20px">
                <div class="col-sm-8 col-xs-12">
                    <div class="panel panel-default" style="padding-bottom:30px">
                        <div class="panel-body">
                            <div class="head-img" style="display: inline-block;overflow:hidden;width: 60px;height:70px;padding-top:10px;">
                                <img style="width: 50px;height: 50px" :src="articleInfo.user_photo_url" alt="" class="img-circle">
                            </div>
                            <div style="display: inline-block;overflow:hidden;height: 70px;">
                                <div style="height: 35px;line-height: 40px">{{articleInfo.user_name}}</div>
                                <div style="height: 35px;line-height: 35px;">{{articleInfo.create_time | setTime}}</div>
                            </div>
                            <h3>{{articleInfo.article_tittle}}</h3>
                            <div class="content" v-html="articleInfo.article_content"></div>
                            
                            <div style="height: 40px;border-bottom: 1px solid #ccc">
                                <ul class="nav nav-pills">
                                    <li role="presentation"><a href="javascript:;"><span class="glyphicon glyphicon-heart-empty"></span> {{articleInfo.article_like_count}}</a></li>
                                    <li role="presentation"><a href="javascript:;"><span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span> {{articleInfo.article_comment_count}}</a></li>
                                    <li role="presentation"><a href="javascript:;"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> {{articleInfo.article_view_count}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div style="padding: 0 15px;">
                            <textarea name="" style="width: 100%;resize:none" id="" rows="5"></textarea>
                        </div>
                        <div style="text-align: right;padding-right: 15px">
                            <button class="btn btn-success" style="width: 70px">评论</button>
                        </div>

                    </div>

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
    import {articleInfo} from "../api/getData";

    export default {
        data(){
            return {
                articleInfo:[],
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

                if(routerParams.articleId){
                    this.articleId = routerParams.articleId;
                }else{
                    this.$router.push({path:'/'});
                }

                const res = await articleInfo(this.articleId);
                console.log(res);
                if(res.status == 1){
                    this.articleInfo = res.data;
                }
            }
        }
    }
</script>

<style>
    #box{
        min-height: 100%;
        position: relative;
        padding-bottom: 120px;
    }
    .panel-body{
        text-align: left;
    }
    .content img{
        max-width: 100%;
    }
</style>