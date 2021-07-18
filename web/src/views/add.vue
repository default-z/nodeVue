<template>
    <div class="add-box">
        <h1>{{id ? '编辑表单':'新建表单'}}</h1>
        <el-form>
            <el-form-item label="上级分类">
                <!--<el-input v-model="model.parent"></el-input>-->
                <el-select v-model="model.parent" placeholder="请选择">
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
                // name:'',
                // desc:''
            }
        },
        mounted(){
            this.id && this.getDetail();
            this.getOptions();
        },
        methods:{
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
               // console.log(res,111)
               this.model = res.data
            },
            async getOptions(){
                const res = await this.$http.get('categories');
                // console.log(res,111)
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

<style scoped>

</style>
