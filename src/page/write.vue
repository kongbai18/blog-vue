<template>
    <div id="box">
        <input type="email" class="form-control" v-model="tittle"  placeholder="文章标题" style="height: 80px;">
        <mavon-editor ref="md" class="mv-editor" v-model="value" @save="addSub" @imgAdd="imgAdd" :ishljs = "true"/>
        <div v-if="pointMsg.showStatus" class="point-box" :style="{top:fullHeight+'px'}">
            <div class="point-message">{{pointMsg.pointMsg}}</div>
        </div>
    </div>
</template>

<script>
    import {addArticle,upImg} from "../api/getData";

    export default {
        data(){
            return{
                value:'',
                tittle:'',
                themeId:0,
                isUping:false,
                fullHeight: 200,
                upImg:[],
            }
        },

        computed: {
            pointMsg () {
                return this.$store.state.pointMessage;
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
            initData(){
                var routerParams = this.$route.query;
                console.log(routerParams);
                if(routerParams.themeId){
                    this.themeId = routerParams.themeId;
                }
            },

            getFullHeight(){
                this.fullHeight = (document.documentElement.clientHeight-100)/2;
            },

            async imgAdd(pos, $file){
               if(this.isUping){
                   this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'有图片正在上传，请稍后...'});
                   let _this = this;
                   window.setTimeout(function(){
                       _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'有图片正在上传，请稍后...'});
                   },2000);
                   this.$refs.md.$img2Url(pos,'');
               }else{
                   this.isUping = true;
                   // 第一步.将图片上传到服务器.
                   var formdata = {'image':$file};
                   const res = await upImg(formdata);
                   if(res.status == 1){
                       this.isUping = false;
                       this.upImg.push(res.data.image_url);
                       this.$refs.md.$img2Url(pos, res.data.image_url);
                   }else{
                       this.isUping = false;
                       this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'图片上传失败！'});
                       let _this = this;
                       window.setTimeout(function(){
                           _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'图片上传失败！'});
                       },2000);
                       this.$refs.md.$img2Url(pos,'');
                   }
               }
            },

            async addSub(val,ren){
                if(!this.tittle){
                    this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'请输入文章标题！'});
                    let _this = this;
                    window.setTimeout(function(){
                        _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'请输入文章标题！'});
                    },2000);
                    return false;
                }
                if(this.strLength(ren) < 1){
                    this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'文章内容不能为空！'});
                    let _this = this;
                    window.setTimeout(function(){
                        _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'文章内容不能为空！'});
                    },2000);
                    return false;
                }

                const res = await addArticle({article_tittle:this.tittle,article_cate_id:this.themeId,article_content:ren,image:this.upImg});
                if(res.status == 1){
                    this.$store.dispatch('changePonit',{showStatus:true,pointMsg:'添加文章成功！'});
                    let _this = this;
                    window.setTimeout(function(){
                        _this.$store.dispatch('changePonit',{showStatus:false,pointMsg:'添加文章成功！'});
                    },2000);
                    if(this.themeId){
                        this.$router.push({path:'/themeDetail',query:{navId:this.themeId}});
                    }else{
                        this.$router.push({path:'/'});
                    }
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
        }
    }
</script>

<style scoped>
    #box{
        height: 100%;
    }
    .mv-editor{
        height:calc(100% - 80px);
    }
    .point-box{
        position: absolute;
        width: 100%;
        height: 60px;
        z-index: 99999999;
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