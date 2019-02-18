<template>
    <div>
        <top-nav></top-nav>

        <div class="container" style="margin-top: 75px">
            <carousel></carousel>

            <div class="row" style="margin-top: 20px">
                <div class="col-sm-8">
                    <ul class="nav nav-tabs" style="margin-bottom: 20px">
                        <li role="presentation" class="active"><a href="#">全部</a></li>
                        <li role="presentation"><a href="#">关注</a></li>
                        <li v-for="item in labelData" role="presentation"><a href="#">{{item.label_name}}</a></li>
                    </ul>


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
                            <div style="display: inline-block;overflow:hidden;width: 60px;height:70px;padding-top:10px;">
                                <img style="width: 50px;height: 50px" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2255384485,690736213&fm=26&gp=0.jpg" alt="" class="img-circle">
                            </div>
                            <div style="display: inline-block;overflow:hidden;height: 70px;">
                                <div style="height: 35px;line-height: 40px">ligo</div>
                                <div style="height: 35px;line-height: 35px;">2019-1-17</div>
                            </div>
                            <h3 style="margin:0 0 0 60px;">bootstrap的使用</h3>
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
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>1</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-share" aria-hidden="true"></span>0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>0</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div style="display: inline-block;overflow:hidden;width: 60px;height:70px;padding-top:10px;">
                                <img style="width: 50px;height: 50px" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2255384485,690736213&fm=26&gp=0.jpg" alt="" class="img-circle">
                            </div>
                            <div style="display: inline-block;overflow:hidden;height: 70px;">
                                <div style="height: 35px;line-height: 40px">ligo</div>
                                <div style="height: 35px;line-height: 35px;">2019-1-17</div>
                            </div>
                            <h3 style="margin:0 0 0 60px;">bootstrap的使用</h3>
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
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-heart-empty"></span>1</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span> 0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-share" aria-hidden="true"></span>0</a></li>
                                <li role="presentation"><a href="#"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>0</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <aside-info></aside-info>

            </div>
        </div>
        <footer-view></footer-view>
    </div>
</template>

<script>
    import topNav from '@/components/topNav'
    import carousel from '@/components/carousel'
    import asideInfo from '@/components/asideInfo'
    import footerView from '@/components/footer'
    import {labelList} from "../api/getData";

    export default {
        data(){
            return {
                labelData:[],
            }
        },

        components: {
            topNav,
            carousel,
            asideInfo,
            footerView,
        },

        created(){
            this.initData();
        },

        methods:{
            async initData(){
                const res = await labelList();
                console.log(res);
                if(res.status == 1){
                    this.labelData = res.data;
                }
            }
        }
    }
</script>

<style scoped>
    p {
        overflow: hidden;
        display: -webkit-box;
        margin-top: 10px;
        margin-left: 60px;
        line-height: 25px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .panel-body{
        text-align: left;
    }
</style>