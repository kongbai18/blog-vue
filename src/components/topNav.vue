<template>
    <nav class="navbar navbar-default navbar-fixed-top hidden-xs">
        <div class="container-fluid ">
            <div class="navbar-header">
                <a href="javascript:;" @click="goToTheme(0)"><img alt="Brand" src="/static/img/logo.png" class="img-responsive" style="margin-top: 5px"></a>
            </div>
            <ul class="nav navbar-nav">
                <li :class="{active:navId == 0}"><a href="javascript:;" @click="goToTheme(0)">首页</a></li>
                <li v-for="item in navData" :class="{active:navId == item.cate_id}">
                    <a href="javascript:;" v-if="item.child.length == 0" @click="goToTheme(item.cate_id)">{{item.cate_name}}</a>
                    <a v-if="item.child.length > 0" @click="goToTheme(item.cate_id)" class="dropdown-toggle" data-toggle="dropdown" href="javascript:;" role="button" aria-haspopup="true" aria-expanded="true">
                        {{item.cate_name}} <span class="caret"></span>
                    </a>
                    <ul v-if="item.child.length > 0" class="dropdown-menu">
                        <li v-for="child in item.child" :class="{active:navId == child.cate_id}" ><a href="javascript:;" @click="goToTheme(child.cate_id)">{{child.cate_name}}</a></li>
                    </ul>
                </li>

                <li :class="{active:navId == -2}"><a href="javascript:;" @click="goToTheme(-2)">关于</a></li>
                <li :class="{active:navId == -1}"><a href="javascript:;" @click="goToTheme(-1)">更多</a></li>

            </ul>


            <button type="button" class="btn btn-warning navbar-btn navbar-right">注册</button>

            <button type="button" class="btn btn-success navbar-btn navbar-right" style="margin-right: 15px;" data-toggle="modal" data-target=".bs-example-modal-sm">登陆</button>

            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <a href="#" style="margin: 0 20px;">
                    <span class="glyphicon glyphicon-search" ></span>
                </a>

            </form>
        </div>
        <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content" style="width: 400px;height: 800px;margin: auto;">

                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {navTwoStage} from "../api/getData";

    export default {
        data(){
            return {
                navData:[],
                navId:0,
            }
        },

        mounted(){
            this.initData();
        },

        methods:{
            async initData(){
                const res = await navTwoStage();
                console.log(res);
                if(res.status == 1){
                    this.navData = res.data;
                }

                var routerParams = this.$route.query;
                console.log(routerParams);
                if(routerParams.navId){
                    this.navId = routerParams.navId;
                }
            },

            goToTheme(cateId){
                if(cateId == 0){
                    this.$router.push({path:'/'});
                }else if(cateId == -1){
                    this.$router.push({path:'/themeList',query:{navId:cateId}});
                }else if(cateId == -2){
                    this.$router.push({path:'/about',query:{navId:cateId}});
                }else{
                    this.$router.push({path:'/themeDetail',query:{navId:cateId}});
                }

            }
        }
    }
</script>

<style scoped>
    .container-fluid{
        max-width: 1350px;
    }
    .nav > li:hover .dropdown-menu {
        display: block;
    }
</style>