<template>
    <div id="box">
        <input type="email" class="form-control" v-model="tittle"  placeholder="文章标题" style="height: 80px;">
        <mavon-editor ref="md" class="mv-editor" v-model="value" @save="addSub" @imgAdd="imgAdd" @imgDel="imgDel" :ishljs = "true"/>
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
            }
        },

        mounted(){
            this.initData();
        },

        methods:{
            initData(){
                var routerParams = this.$route.query;
                console.log(routerParams);
                if(routerParams.themeId){
                    this.themeId = routerParams.themeId;
                }
            },

            async imgAdd(pos, $file){
                console.log(pos);
                // 第一步.将图片上传到服务器.
                var formdata = {'image':$file};
                const res = await upImg(formdata);
                if(res.status == 1){
                    this.$refs.md.$img2Url(pos, res.data.image_url);
                }
            },

            imgDel(pos){
                console.log(pos);
            },

            async addSub(val,ren){
                if(!this.tittle){
                    return false;
                }
                if(this.strLength(ren) < 50){
                    return false;
                }

                const res = await addArticle({'article_tittle':this.tittle,'article_content':ren});
                console.log(res);
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
</style>