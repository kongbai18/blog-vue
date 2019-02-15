<template>
    <div class="col-sm-4 hidden-xs">
        <div class="panel panel-default">
            <div class="panel-body" >
                <div class="input-group">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                    <input type="text" class="form-control" placeholder="手机/邮箱/用户名" aria-describedby="basic-addon1">
                </div>
                <div class="input-group" style="margin-top: 15px">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
                    <input type="text" class="form-control" placeholder="密码" aria-describedby="basic-addon1">
                </div>
                <div style="margin-top:25px;width: 100%;">
                    <div style="position:absolute;width: 40px;height: 40px;background: white;left:calc(50% - 20px);border-radius: 20px;box-sizing: border-box;border: 1px solid #f3f3f3;font-size: 24px;padding-left: 12px;padding-top: 2px;color: gray">?</div>
                    <div class="btn btn-success" style="overflow:hidden;box-sizing:border-box;margin-right:1%;height:40px;padding-top:10px;width: 49%;">登录</div><!--
                          --><div class="btn btn-danger" style="overflow:hidden;box-sizing:border-box;margin-left:1%;height:40px;padding-top:10px;width: 49%;">注册</div>
                </div>
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
    }
</script>

<style scoped>
    .panel-body{
        text-align: left;
    }
</style>