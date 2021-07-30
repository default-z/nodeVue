<template>
    <div class="add-box">
        <h1>{{id ? '编辑表单':'新建表单'}}</h1>
        <el-form>
            <el-form-item label="上级分类">
                <!--<el-input v-model="model.parent"></el-input>-->
                <el-select v-model="model.parent" multiple  placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item._id"
                            :label="item.name"
                            :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>

            <el-form-item label="描述">
                <el-input v-model="model.desc"></el-input>
            </el-form-item>

            <el-form-item label="图标">
                <el-upload
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL + '/upload'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="model.icon" :src="model.icon" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                 </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "add",
        props:{
           id:{}
        },
        data(){
            return{
                model:{},
                options:[]
            }
        },
        mounted(){
            this.id && this.getDetail();
            this.getOptions();
        },
        methods:{       
            handleAvatarSuccess(res){
                console.log(res)
                this.$set(this.model,'icon',res.url)
            },
            beforeAvatarUpload(){

            },
           async save(){
               let res;
               if(this.id){
                   res = await this.$http.put(`categories/${this.id}`,this.model);
               }else {
                   res = await this.$http.post('categories',this.model);
               }
               console.log(res)

              this.$router.push('/categories/list');
               this.$message({
                   type:'success',
                   message:'保存成功'
               })
            },
           async getDetail(){
               const res = await this.$http.get(`getCategoryById/${this.id}`);
               this.model = res.data
            },
            async getOptions(){
                const res = await this.$http.get('categories');
                this.options = res.data
            }
            // save(){
            //     this.$http.post('categories',this.model).then(res =>{
            //         this.$router.push('/categories/list');
            //         this.$message({
            //             type:'success',
            //             message:'保存成功'
            //         })
            //     })
            //
            // }
        }
    }
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
