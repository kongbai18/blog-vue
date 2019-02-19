<template>
    <div id="container">
        <topNav></topNav>
        <div class="container" style="padding-top: 75px">
            <div class="row">
                <div class="col-sm-4 col-md-3 theme-list-box">
                    <div class="thumbnail">
                        <div class="list-content">
                            <div class="list-name">编程</div>
                            <button class="btn btn-info" type="button"><span class="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span> 关注</button>
                            <div class="list-line"></div>
                            <div class="list-record">
                                <div class="record-content">
                                    <div class="record-content-num">78</div>
                                    <div class="record-content-tittle">内容</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">548</div>
                                    <div class="record-content-tittle">关注</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">785</div>
                                    <div class="record-content-tittle">浏览</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list-img">
                        <img src="https://zhangjia.tv/wp-content/themes/LightSNS_1.5_beta_198.7/images/topic-cover.png" alt="">
                    </div>
                </div>


                <div class="col-sm-4 col-md-3 theme-list-box">
                    <div class="thumbnail">
                        <div class="list-content">
                            <div class="list-name">编程</div>
                            <button class="btn btn-info" type="button"><span class="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span> 关注</button>
                            <div class="list-line"></div>
                            <div class="list-record">
                                <div class="record-content">
                                    <div class="record-content-num">78</div>
                                    <div class="record-content-tittle">内容</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">548</div>
                                    <div class="record-content-tittle">关注</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">785</div>
                                    <div class="record-content-tittle">浏览</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list-img">
                        <img src="https://zhangjia.tv/wp-content/themes/LightSNS_1.5_beta_198.7/images/topic-cover.png" alt="">
                    </div>
                </div>


                <div class="col-sm-4 col-md-3 theme-list-box">
                    <div class="thumbnail">
                        <div class="list-content">
                            <div class="list-name">编程</div>
                            <button class="btn btn-info" type="button"><span class="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span> 关注</button>
                            <div class="list-line"></div>
                            <div class="list-record">
                                <div class="record-content">
                                    <div class="record-content-num">78</div>
                                    <div class="record-content-tittle">内容</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">548</div>
                                    <div class="record-content-tittle">关注</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">785</div>
                                    <div class="record-content-tittle">浏览</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list-img">
                        <img src="https://zhangjia.tv/wp-content/themes/LightSNS_1.5_beta_198.7/images/topic-cover.png" alt="">
                    </div>
                </div>


                <div class="col-sm-4 col-md-3 theme-list-box">
                    <div class="thumbnail">
                        <div class="list-content">
                            <div class="list-name">编程</div>
                            <button class="btn btn-info" type="button"><span class="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span> 关注</button>
                            <div class="list-line"></div>
                            <div class="list-record">
                                <div class="record-content">
                                    <div class="record-content-num">78</div>
                                    <div class="record-content-tittle">内容</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">548</div>
                                    <div class="record-content-tittle">关注</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">785</div>
                                    <div class="record-content-tittle">浏览</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list-img">
                        <img src="https://zhangjia.tv/wp-content/themes/LightSNS_1.5_beta_198.7/images/topic-cover.png" alt="">
                    </div>
                </div>

                <div class="col-sm-4 col-md-3 theme-list-box">
                    <div class="thumbnail">
                        <div class="list-content">
                            <div class="list-name">编程</div>
                            <button class="btn btn-info" type="button"><span class="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span> 关注</button>
                            <div class="list-line"></div>
                            <div class="list-record">
                                <div class="record-content">
                                    <div class="record-content-num">78</div>
                                    <div class="record-content-tittle">内容</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">548</div>
                                    <div class="record-content-tittle">关注</div>
                                </div>
                                <div class="record-content">
                                    <div class="record-content-num">785</div>
                                    <div class="record-content-tittle">浏览</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list-img">
                        <img src="https://zhangjia.tv/wp-content/themes/LightSNS_1.5_beta_198.7/images/topic-cover.png" alt="">
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
                clientHeight:0,
                fontSize:16,
            }
        },

        components: {
            topNav,
            footerView,
        },

        mounted(){
            this.clientHeight =   document.documentElement.clientHeight;
            console.log(this.clientHeight);
        },

        watch:{
            clientHeight: function () {
                this.changeFixed(this.clientHeight)
            }
        },

        methods:{
            changeFixed(clientHeight){
                console.log(clientHeight);
            },
        }
    }
</script>

<style scoped>
    #container{
        min-height:100%;
        position: relative;
        padding-bottom: 70px;
    }
    .theme-list-box{
        margin-top: 80px;
    }
    .thumbnail{
        border: 0px solid white;
        padding: 0;
        margin: 0;
    }
    .list-img{
        position: absolute;
        top:0;
        left:calc(50% - 35px);
    }
    .list-img img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
    }
    .list-content{
        margin-top: 40px;
        padding-top: 40px;
        width: 100%;
        height: 280px;
        border-radius: 5px;
        background: white;
    }
    .list-name{
        font-size: 21px;
        font-weight: 500;
    }
    .btn-info{
        background: #25c6fc;
        margin-top: 80px;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        font-size: 16px;
    }
    .list-line{
        box-sizing: border-box;
        width: calc(100% - 30px);
        height: 1px;
        background: #f3f3f3;
        margin-top: 20px;
        margin-left: 15px;
    }
    .list-record{
        width: calc(100% - 30px);
        margin-left: 15px;
        margin-top: 10px;
        font-size:0;
    }
    .record-content{
        width: 33.3333%;
        height: 50px;
        margin: 0;
        padding: 0;
        display: inline-block;
        overflow: hidden;
    }
    .record-content-num{
        font-size: 12px;
        font-weight: 300;
        line-height: 25px;
    }
    .record-content-tittle{
        font-size: 16px;
        font-weight: 300;
        line-height: 25px;
    }
</style>