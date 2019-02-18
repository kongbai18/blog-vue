<template>
    <nav class="navbar navbar-default navbar-fixed-top hidden-xs">
        <div class="container-fluid ">
            <div class="navbar-header">
                <img alt="Brand" src="/static/img/logo.png" class="img-responsive" style="margin-top: 5px">
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">首页</a></li>
                <li v-for="item in navData">
                    <a href="#" v-if="item.child.length == 0">{{item.cate_name}}</a>
                    <a v-if="item.child.length > 0" class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        {{item.cate_name}} <span class="caret"></span>
                    </a>
                    <ul v-if="item.child.length > 0" class="dropdown-menu">
                        <li v-for="child in item.child"><a href="#">{{child.cate_name}}</a></li>
                    </ul>
                </li>

                <li><a href="#">关于</a></li>
                <li><a href="#">更多</a></li>

            </ul>


            <button type="button" class="btn btn-warning navbar-btn navbar-right">注册</button>

            <button type="button" class="btn btn-success navbar-btn navbar-right" style="margin-right: 15px;">登陆</button>

            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <a href="#" style="margin: 0 20px;">
                    <span class="glyphicon glyphicon-search" ></span>
                </a>

            </form>
        </div>
    </nav>
</template>

<script>
    import {navTwoStage} from "../api/getData";

    export default {
        data(){
            return {
                navData:[],
            }
        },

        created(){
            this.initData();
        },

        methods:{
            async initData(){
                const res = await navTwoStage();
                console.log(res);
                if(res.status == 1){
                    this.navData = res.data;
                }
            }
        }
    }
</script>

<style scoped>
    .container-fluid{
        max-width: 1350px;
    }
</style>