<template>
    <div id="box">
        <top-nav></top-nav>
        <div class="container" style="padding-top: 75px;">
            <div class="row" style="margin-top: 20px">
                <div class="col-sm-8 col-xs-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <h3>bootstrap的使用</h3>
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
    import asideInfo from '@/components/asideInfo'
    import footerView from '@/components/footer'
    export default {
        data(){
            return {

            }
        },

        components: {
            topNav,
            asideInfo,
            footerView,
        },
    }
</script>

<style scoped>
    #box{
        min-height: 100%;
        position: relative;
        padding-bottom: 70px;
    }
    .panel-body{
        text-align: left;
    }
</style>