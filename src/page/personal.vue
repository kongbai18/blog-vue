<template>
    <div id="box">
        <top-nav></top-nav>
        <div class="container" style="padding-top: 75px">
            <div class="row" style="margin-top: 100px;">
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
                    个人说明：
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
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="head-img" style="display: inline-block;overflow:hidden;width: 60px;height:70px;padding-top:10px;">
                                <img style="width: 50px;height: 50px" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2255384485,690736213&fm=26&gp=0.jpg" alt="" class="img-circle">
                            </div>
                            <div style="display: inline-block;overflow:hidden;height: 70px;">
                                <div style="height: 35px;line-height: 40px">ligo</div>
                                <div style="height: 35px;line-height: 35px;">2019-1-17</div>
                            </div>
                            <h3 style="margin-left:60px;">bootstrap的使用</h3>
                            <p>“行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
                                通过“行（row）”在水平方向创建一组“列（column）”。
                                你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
                                类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
                                通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。
                                负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
                                栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
                                如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
                                栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-md-* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-lg-* 不存在， 也影响大屏幕设备。</p>
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

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="head-img" style="display: inline-block;overflow:hidden;width: 60px;height:70px;padding-top:10px;">
                                <img style="width: 50px;height: 50px" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2255384485,690736213&fm=26&gp=0.jpg" alt="" class="img-circle">
                            </div>
                            <div style="display: inline-block;overflow:hidden;height: 70px;">
                                <div style="height: 35px;line-height: 40px">ligo</div>
                                <div style="height: 35px;line-height: 35px;">2019-1-17</div>
                            </div>
                            <h3 style="margin-left:60px;">bootstrap的使用</h3>
                            <p>“行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
                                通过“行（row）”在水平方向创建一组“列（column）”。
                                你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
                                类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
                                通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。
                                负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
                                栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
                                如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
                                栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-md-* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-lg-* 不存在， 也影响大屏幕设备。</p>
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

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="head-img" style="display: inline-block;overflow:hidden;width: 60px;height:70px;padding-top:10px;">
                                <img style="width: 50px;height: 50px" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2255384485,690736213&fm=26&gp=0.jpg" alt="" class="img-circle">
                            </div>
                            <div style="display: inline-block;overflow:hidden;height: 70px;">
                                <div style="height: 35px;line-height: 40px">ligo</div>
                                <div style="height: 35px;line-height: 35px;">2019-1-17</div>
                            </div>
                            <h3 style="margin-left:60px;">bootstrap的使用</h3>
                            <p>“行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
                                通过“行（row）”在水平方向创建一组“列（column）”。
                                你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
                                类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
                                通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。
                                负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
                                栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
                                如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
                                栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-md-* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-lg-* 不存在， 也影响大屏幕设备。</p>
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
            return{

            }
        },

        components: {
            topNav,
            footerView,
        },
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
</style>