<template>
    <div class="row">
        <div class="col-sm-12">
            <div id="myCarousel" class="carousel slide" data-ride="carousel" style="height: 400px;width: 100%;overflow: hidden">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1547716217&di=957fde1376f8f5d4a6d4c5f76b0df29f&src=http://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/lvpics/h=800/sign=b49dc48f8718367ab28972dd1e728b68/9922720e0cf3d7ca7f0736d0f31fbe096a63a9a6.jpg" class="img-responsive">
                    </div>
                    <div class="item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547726411796&di=6e5acba44247a1ceac1286d6ef5a3f4f&imgtype=0&src=http%3A%2F%2Fchina.cnr.cn%2Fgdgg%2F200911%2FW020091124627155022638.jpg" class="img-responsive">
                    </div>
                    <div class="item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547726411796&di=f7e4a0d5a3bf48f0a2116e436e17c7b0&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170322%2F10907510b2204f9d907d90b7123225e3_th.jpeg" class="img-responsive">
                    </div>
                </div>

                <a href="#myCarousel" data-slide="prev" class="carousel-control left">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a href="#myCarousel" data-slide="next" class="carousel-control right">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
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

</style>