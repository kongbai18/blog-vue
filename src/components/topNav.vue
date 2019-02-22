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


            <button v-if="!user.logStatus" type="button" class="btn btn-warning navbar-btn navbar-right" data-toggle="modal" data-target=".register-modal-sm">注册</button>

            <button v-if="!user.logStatus" type="button" class="btn btn-success navbar-btn navbar-right" style="margin-right: 15px;" data-toggle="modal" data-target=".login-modal-sm">登陆</button>

            <div v-if="user.logStatus" class="navbar-header navbar-right">
                <ul class="nav navbar-nav">
                    <li>
                        <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:;" role="button" aria-haspopup="true" aria-expanded="true">
                             {{user.userName}} <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li style="height: 50px;text-align: center;border-bottom: 1px solid #ccc;margin: 0 10px"><a @click="goPersonal" style="line-height: 45px;" href="javascript:;">我的主页</a></li>
                            <li style="height: 50px;text-align: center;border-bottom: 1px solid #ccc;margin: 0 10px"><a style="line-height: 45px;" href="javascript:;">修改密码</a></li>
                            <li style="height: 50px;text-align: center;margin: 0 10px"><a @click="logoutSub" style="line-height: 45px;" href="javascript:;">退出登陆</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div v-if="user.logStatus" class="navbar-header navbar-right" style="height: 50px;">
                <img style="width: 40px;height: 40px;border-radius: 20px;margin-top: 5px" :src="user.userUrl" class="img-responsive">
            </div>

            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <a href="#" style="margin: 0 20px;">
                    <span class="glyphicon glyphicon-search" ></span>
                </a>

            </form>
        </div>
        <div class="modal fade login-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content" style="padding: 0 30px">
                    <button style="margin-top: 10px;" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" style="line-height: 40px;margin-top: 10px">登陆</h4>
                    <form :model="loginForm">
                        <div class="input-group" style="height: 40px;margin-top: 20px">
                            <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                            <input v-model="loginForm.user_name" style="height: 40px" type="text" class="form-control" placeholder="手机/邮箱/用户名" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group" style="margin-top: 20px;height: 40px">
                            <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
                            <input v-model="loginForm.user_password" style="height: 40px" type="password" class="form-control" placeholder="密码" aria-describedby="basic-addon1">
                        </div>
                    </form>
                    <div style="margin:25px 0;width: 100%;text-align: left">
                        <button @click="loginSub" class="btn btn-success" style="width:250px;height:45px;line-height:35px;margin-right: 30px ">登录</button><!--
                        --><button @click="openRegisterModal" class="btn btn-danger" style="width: 108px;height:45px;line-height:35px;">去注册</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade register-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content" style="padding: 0 30px">
                    <button style="margin-top: 10px;" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" style="line-height: 40px;margin-top: 10px">账号注册</h4>
                    <form :model="registerForm">
                        <div class="input-group" style="height: 40px;margin-top: 20px">
                            <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                            <input v-model="registerForm.user_name" style="height: 40px" type="text" class="form-control" placeholder="用户名" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group" style="height: 40px;margin-top: 20px">
                            <div class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></div>
                            <input v-model="registerForm.user_phone" style="height: 40px" type="text" class="form-control" placeholder="手机号" aria-describedby="basic-addon1">
                        </div>
                        <div style="margin-top: 20px">
                            <div class="input-group" style="height: 40px;width: 200px;float: left">
                                <div class="input-group-addon"><span class="glyphicon glyphicon-ok"></span></div>
                                <input v-model="registerForm.code" style="height: 40px" type="text" class="form-control" placeholder="验证码" aria-describedby="basic-addon1">
                            </div>
                            <button v-if="showGetCode" @click="getCode" class="btn btn-success" style="width: 150px;height:40px;line-height:30px;margin-left: 30px">获取验证码</button>
                            <button v-if="!showGetCode" class="btn btn-default" disabled="disabled" style="background:#ccc;width: 150px;height:40px;line-height:30px;margin-left: 30px">{{cutDown}}秒后重新获取</button>
                        </div>

                        <div class="input-group" style="margin-top: 20px;height: 40px">
                            <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
                            <input v-model="registerForm.user_password" style="height: 40px" type="password" class="form-control" placeholder="设置密码" aria-describedby="basic-addon1">
                        </div>
                    </form>
                    <div style="margin:25px 0;width: 100%;text-align: left">
                        <button @click="registerSub" class="btn btn-success" style="width:250px;height:45px;line-height:35px;margin-right: 30px ">注册</button><!--
                        --><button @click="openLoginModal" class="btn btn-danger" style="width: 108px;height:45px;line-height:35px;">去登陆</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade warning-modal-lg" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content" style="padding: 0 30px;height:50px;line-height:50px;background: #f0ad4e;">
                    <span>{{tipMessage}}</span>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
            </div>
        </div>

        <div class="modal fade success-modal-lg" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content" style="padding: 0 30px;height:50px;line-height:50px;background:#5cb85c;">
                    <span>{{tipMessage}}</span>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
            </div>
        </div>

        <div v-if="pointMsg.showStatus" class="point-box" :style="{top:fullHeight+'px'}">
            <div class="point-message">{{pointMsg.pointMsg}}</div>
        </div>
    </nav>

</template>

<script>
    import {navTwoStage,sendSms,register,login,logout} from "../api/getData";

    export default {
        data(){
            return {
                navData:[],
                navId:0,
                cutDown:90,
                showGetCode:true,
                getSms:false,
                warningStr:'警告错误！',
                fullHeight: 200,
                loginForm:{
                    user_name:'',
                    user_password:'',
                },
                registerForm:{
                    user_name:'',
                    user_phone:'',
                    code:'',
                    user_password:'',
                },
            }
        },

        computed: {
            user () {
                return this.$store.state.user;
            },
            pointMsg () {
                return this.$store.state.pointMessage;
            },
            tipMessage(){
                return this.$store.state.tipMessage;
            },

        },


        mounted(){
            this.initData();
            let _this = this;
            setInterval(function () {
                _this.getFullHeight();
            },3000)
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

            getFullHeight(){
                this.fullHeight = (document.documentElement.clientHeight-100)/2;
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

            },

            openRegisterModal(){
                $('.login-modal-sm').modal('hide');
                $('.register-modal-sm').modal('show');
            },

            openLoginModal(){
                $('.register-modal-sm').modal('hide');
                $('.login-modal-sm').modal('show');
            },

            async loginSub(){
                let data = this.loginForm;
                if(!data.user_name){
                    return false;
                }
                if(!data.user_password){
                    return false;
                }
                const res = await login(data);
                if(res.status == 1){
                    this.loginForm.user_password = '';
                    localStorage.setItem('loginStorage', true);
                    $('.login-modal-sm').modal('hide');
                    let user = {
                        logStatus:true,
                        userName:res.data.user_name,
                        userUrl:res.data.user_url,
                    };
                    this.$store.dispatch('changeStatus',user);
                    this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'登陆成功！'});
                    let _this = this;
                    window.setTimeout(function(){
                        _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'登陆成功！'});
                    },2000);
                }
            },

            async getCode(){
                let phone = this.registerForm.user_phone;
                console.log(phone);
                let reg = new RegExp("^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\\d{8}$");
                if(reg.test(phone)){
                    const res = await sendSms({user_phone:phone});
                    if(res.status == 1){
                        this.showGetCode = false;
                        this.getSms = true;
                        this.cutDown = 90;
                        var _this = this;
                        setInterval(function () {
                            _this.settime();
                        },1000)
                    }else {
                        this.warningStr = res.message;
                        $('.warning-modal-lg').modal('show');
                        window.setTimeout(function(){
                            $('.warning-modal-lg').modal('hide');
                        },2000);
                    }
                }else{
                    this.$store.dispatch('changeTipMessage','请输入正确的手机号！');
                    $('.warning-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.warning-modal-lg').modal('hide');
                    },2000);
                }
            },

            settime(){
                if(this.cutDown > 0){
                    this.cutDown--;
                }else{
                    this.showGetCode = true;
                }
            },

            async registerSub(){
                let data = this.registerForm;
                if(!this.getSms){
                    this.$store.dispatch('changeTipMessage','请先获取验证码！');
                    $('.warning-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.warning-modal-lg').modal('hide');
                    },2000);
                    return false;
                }

                if(!data.user_name){
                    this.$store.dispatch('changeTipMessage','用户名不能为空！');
                    $('.warning-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.warning-modal-lg').modal('hide');
                    },2000);
                    return false;
                }

                if(this.strLength(data.user_name) > 20){
                    this.$store.dispatch('changeTipMessage','用户名不能超过20字符串！');
                    $('.warning-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.warning-modal-lg').modal('hide');
                    },2000);
                    return false;
                }

                let reg = new RegExp("^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\\d{8}$");
                if(!reg.test(data.user_phone)){
                    this.$store.dispatch('changeTipMessage','请输入正确的手机号！');
                    $('.warning-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.warning-modal-lg').modal('hide');
                    },2000);
                    return false;
                }

                if(!data.code){
                    this.$store.dispatch('changeTipMessage','验证码不能为空！');
                    $('.warning-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.warning-modal-lg').modal('hide');
                    },2000);
                    return false;
                }

                if(this.strLength(data.user_password) < 8){
                    this.$store.dispatch('changeTipMessage','密码不能低于8字符串！');
                    $('.warning-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.warning-modal-lg').modal('hide');
                    },2000);
                    return false;
                }

                if(this.strLength(data.user_password) > 20){
                    this.$store.dispatch('changeTipMessage','密码不能超过20字符串！');
                    $('.warning-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.warning-modal-lg').modal('hide');
                    },2000);
                    return false;
                }

                const res = await register(data);
                if(res.status == 1){
                    $('.register-modal-sm').modal('hide');
                    $('.login-modal-sm').modal('show');
                    this.$store.dispatch('changeTipMessage','注册成功！');
                    $('.success-modal-lg').modal('show');
                    window.setTimeout(function(){
                        $('.success-modal-lg').modal('hide');
                    },2000);
                }
            },

            strLength(str){
                var realLength = 0, len = str.length, charCode = -1;
                for (var i = 0; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode >= 0 && charCode <= 128) realLength += 1;
                    else realLength += 2;
                }
                return realLength;
            },

            async logoutSub(){
                const res = await logout();
                if(res.status == 1){
                    localStorage.setItem('loginStorage',false);
                    this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'退出成功！'});
                    let _this = this;
                    window.setTimeout(function(){
                        _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'退出成功！'});
                    },2000);
                    console.log('456');
                    this.$router.push({path:'/'});
                }
            },

            goPersonal(){
                this.$router.push({path:'/personal'})
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
    .modal-sm{
        width: 450px;
        background: white;
        border-radius: 5px;
        margin-top: 200px;
    }
    .point-box{
        position: absolute;
        width: 100%;
        height: 60px;
    }
    .point-message{
        background: #666666;
        opacity: 0.8;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        border-radius: 3px;
        padding: 0 10px;
        color: white;
    }
</style>