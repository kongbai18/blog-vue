<template>
    <div class="col-sm-4 hidden-xs">
        <div v-if="!user.logStatus" class="panel panel-default">
            <div class="panel-body" >
                <div class="input-group" style="height: 40px;margin-top: 10px">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                    <input style="height: 40px"  type="text" class="form-control" placeholder="手机/邮箱/用户名" aria-describedby="basic-addon1">
                </div>
                <div class="input-group" style="margin-top: 15px;height: 40px">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
                    <input style="height: 40px" type="text" class="form-control" placeholder="密码" aria-describedby="basic-addon1">
                </div>
                <div style="margin-top:25px;width: 100%;">
                    <div style="position:absolute;width: 40px;height: 40px;background: white;left:calc(50% - 20px);border-radius: 20px;box-sizing: border-box;border: 1px solid #f3f3f3;font-size: 24px;padding-left: 12px;padding-top: 2px;color: gray">?</div>
                    <div class="btn btn-success" style="overflow:hidden;box-sizing:border-box;margin-right:1%;height:40px;padding-top:10px;width: 49%;">登录</div><!--
                          --><div class="btn btn-warning" data-toggle="modal" data-target=".register-modal-sm" style="overflow:hidden;box-sizing:border-box;margin-left:1%;height:40px;padding-top:10px;width: 49%;">注册</div>
                </div>
            </div>
        </div>

        <div v-if="user.logStatus" class="panel panel-default">
            <div class="panel-body" style="margin: 0;padding: 0;">
                 <img style="width: 100%;height: 100px;" src="https://zhangjia.tv/wp-content/themes/LightSNS_1.5_beta_198.7/images/member_bg/small/04.jpg" class="img-responsive">
                 <div style="width: 100%;height: 190px;text-align: center;padding-top: 50px">
                     <div style="font-size: 18px;font-weight: 600">{{user.userName}}</div>
                     <div style="width: 100%;height:120px;padding-top: 35px;font-size: 0;">
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
                         <div class="record-list">
                             <div class="record-list-num">548</div>
                             <div class="record-list-tittle">内容</div>
                         </div>
                     </div>
                 </div>
                <img class="img-responsive login-user-img" :src="user.userUrl" >
            </div>
        </div>


        <div class="panel panel-default">
            <div class="panel-body">
                <div style="margin-bottom: 20px;">
                    <div style="display: inline-block;width: 4px;height: 20px;background: #25c6fc;"></div>
                    <div style="display: inline-block;height: 20px;line-height: 20px;font-size: 16px;overflow: hidden;margin-left: 8px;">话题排行榜</div>
                </div>
                <div style="height: 40px;line-height:40px;width: 100%;">
                    <div style="float: left;overflow: hidden;">#编程#</div>
                    <div style="float: right;overflow: hidden;"><span class="glyphicon glyphicon-grain"></span> 778</div>
                </div>
                <div style="height: 40px;line-height:40px;width: 100%;">
                    <div style="float: left;overflow: hidden;">#编程#</div>
                    <div style="float: right;overflow: hidden;"><span class="glyphicon glyphicon-grain"></span> 778</div>
                </div>
                <div style="height: 40px;line-height:40px;width: 100%;">
                    <div style="float: left;overflow: hidden;">#编程#</div>
                    <div style="float: right;overflow: hidden;"><span class="glyphicon glyphicon-grain"></span> 778</div>
                </div>
                <div style="height: 40px;line-height:40px;width: 100%;">
                    <div style="float: left;overflow: hidden;">#编程#</div>
                    <div style="float: right;overflow: hidden;"><span class="glyphicon glyphicon-grain"></span> 778</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },

        computed: {
            user () {
                return this.$store.state.user;
            }
        },
    }
</script>

<style scoped>
    .panel-body{
        text-align: left;
    }
    .login-user-img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        position: absolute;
        top:40px;
        left: calc(50% - 50px);
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
</style>