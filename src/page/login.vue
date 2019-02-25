<template>
    <div id="box">
        <top-nav></top-nav>
        <div class="container">
            <div class="row" style="margin-top: 60px;">
                <div class="col-sm-12">
                    <div class="login-box" style="padding-top: 550px">
                        <h2>用户登陆</h2>
                        <div class="login-info-box">
                            <input type="text" class="form-control" placeholder="手机/邮箱/用户名" style="height:40px;">
                            <input type="text" class="form-control" placeholder="密码" style="height:40px;margin-top: 30px">
                            <div style="margin-top: 30px">忘记密码？</div>
                            <button class="btn btn-default" style="margin-top: 10px;width: 100%;height: 45px">登陆</button>
                            <div style="margin-top: 10px"><span style="color: hotpink">免费注册</span> 如果您还没有账号？</div>
                        </div>
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
    export default {
        data(){
            return {

            }
        },

        components: {
            topNav,
            footerView,
        },

        mounted(){

        },

        methods:{

        }
    }
</script>

<style scoped>
    #box{
        min-height: 100%;
        width: 100%;
        position: relative;
        padding-bottom: 70px;
        background-image: url("http://pic.shimentown.com/banner.jpg");
        background-repeat: no-repeat;
        background-size:100% 100%;
        background-color: #003442;
    }
    .login-box{
        width: 80%;
        height: 80px;
        margin: 0 auto;
        color: white;
    }
    .login-info-box{
        background: rgba(41, 39, 39, 0.46);
        width: 100%;
        height: 350px;
        margin-top: 30px;
        padding: 50px 50px 20px 50px;
    }
</style>