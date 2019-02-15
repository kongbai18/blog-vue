<template>
    <nav class="navbar navbar-default navbar-fixed-top hidden-xs">
        <div class="container-fluid ">
            <div class="navbar-header">
                <img alt="Brand" src="/static/img/logo.png" class="img-responsive" style="margin-top: 5px">
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">首页</a></li>
                <li><a href="#">编程</a></li>
                <li><a href="#">网站</a></li>
                <li><a href="#">读书</a></li>
                <li><a href="#">关于</a></li>
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
    export default {
        data(){
            return {

            }
        },
    }
</script>

<style scoped>
    .container-fluid{
        max-width: 1350px;
    }
</style>