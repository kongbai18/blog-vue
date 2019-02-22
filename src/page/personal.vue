<template>
    <div id="box">
        <top-nav></top-nav>
        <div class="container" style="padding-top: 75px">
            <div class="row" style="margin-top: 60px;">
                <div class="col-sm-12">
                  <img style="width: 120px;height: 120px;border-radius: 60px;margin: 0 auto" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2255384485,690736213&fm=26&gp=0.jpg" class="img-responsive">
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-sm-12" style="color: white;font-size: 24px;font-weight: 500">
                    kongbai18
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-sm-12" style="color: white;font-size: 16px;font-weight: 400">
                    简介：
                </div>
            </div>
            <div class="row" style="margin-top:80px;background: white">
                <div class="col-sm-4" style="height: 50px">
                    <a href="javascript:;" style="line-height: 50px">我的主页</a>
                </div>
                <div class="col-sm-4" style="height: 50px">
                    <a href="javascript:;" style="line-height: 50px">我的相册</a>
                </div>
                <div class="col-sm-4" style="height: 50px">
                    <a href="javascript:;" style="line-height: 50px">管理中心</a>
                </div>
            </div>

            <div class="row" style="margin-top: 40px">
                <div class="col-sm-4">
                    <div style="width: 100%;height: 80px;padding:10px 0;font-size: 0;background: white">
                        <div class="record-list">
                            <div class="record-list-num">548</div>
                            <div class="record-list-tittle">关注</div>
                        </div>
                        <div class="record-list">
                            <div class="record-list-num">548</div>
                            <div class="record-list-tittle">粉丝</div>
                        </div>
                        <div class="record-list">
                            <div class="record-list-num">548</div>
                            <div class="record-list-tittle">喜欢</div>
                        </div>
                        <div class="record-list" style="border-right: 0px">
                            <div class="record-list-num">548</div>
                            <div class="record-list-tittle">内容</div>
                        </div>
                    </div>


                    <div style="margin-top: 20px;background: white;padding: 20px 10px;text-align: left">
                        <div style="margin-bottom: 20px;">
                            <div style="display: inline-block;width: 4px;height: 20px;background: #25c6fc;"></div>
                            <div style="display: inline-block;height: 20px;line-height: 20px;font-size: 16px;overflow: hidden;margin-left: 8px;">资料简介</div>
                        </div>
                        <div class="info-hr">
                            <div style="float: left;overflow: hidden;">账号：</div>
                        </div>
                        <div class="info-hr">
                            <div style="float: left;overflow: hidden;">性别：</div>
                        </div>
                        <div class="info-hr" >
                            <div style="float: left;overflow: hidden;">位置：</div>
                        </div>
                        <div class="info-hr">
                            <div style="float: left;overflow: hidden;">说明：</div>
                        </div>
                        <div class="info-hr">
                            <div>QQ：</div>
                        </div>
                        <div class="info-hr">
                            <div>微信：</div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-8" >

                    <div v-if="articleData.length == 0">
                        <img style="width: 75px;height: 50px" src="/static/img/nodata.png" alt="">
                        <div style="font-size: 12px;fongt-weight:300;margin-top: 5px;color: white">暂无数据</div>
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
                        </div>
                        <div style="height: 40px;margin-left: 60px">
                            <ul class="nav nav-pills">
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-heart-empty"></span> 1</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-share" aria-hidden="true"></span>0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>0</a></li>
                            </ul>
                        </div>
                    </div>

                    <button v-if="articleData.length > 0 && pageData.page_num < pageData.page_total" @click="getMore" class="btn btn-default" style="background: #f8f8f8;">加载更多</button>
                    <div v-if="articleData.length > 0 && pageData.page_num == pageData.page_total" style="color: white">无更多数据</div>

                </div>
            </div>


        </div>
        <footer-view></footer-view>
    </div>
</template>

<script>
    import topNav from '@/components/topNav'
    import footerView from '@/components/footer'
    import {personalArticle} from "../api/getData";

    export default {
        data(){
            return{
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
            footerView,
        },

        mounted(){
            this.initData();
        },

        methods:{
            async initData(){
                const res = await personalArticle({page:this.pageData.page_num,size:this.pageData.page_size});
                console.log(res);
                if(res.status == 1){
                    this.articleData = res.data.article;
                    this.pageData = res.data.pageData;
                }
            },

            async getMore(){
                const article = await personalArticle({page:1+parseInt(this.pageData.page_num),size:this.pageData.page_size});
                if(article.status == 1){
                    this.articleData = this.articleData.concat(article.data.article);
                    this.pageData = article.data.pageData;
                }
            },
        }
    }
</script>

<style scoped>
    #box{
        min-height: 100%;
        width: 100%;
        position: relative;
        padding-bottom: 70px;
        background-image: url("https://zhangjia.tv/wp-content/themes/LightSNS_1.5_beta_198.7/images/member_bg/04.jpg");
        background-repeat: no-repeat;
        background-size:100% 800px;
        background-color: #003442;
    }
    .record-list{
        box-sizing: border-box;
        border-right: 1px solid #ccc;
        display: inline-block;
        width: 25%;
        font-size: 16px;
    }
    .record-list-num{
        font-size: 18px;
        font-weight: 520;
        line-height: 40px;
    }
    .record-list-tittle{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }
    .panel-body{
        text-align: left;
    }
    .info-hr{
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        height: 60px;
        line-height:60px;
        width: 100%;
        font-size: 16px;
    }
    p {
        overflow: hidden;
        display: -webkit-box;
        margin-top: 10px;
        margin-left: 60px;
        line-height: 25px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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