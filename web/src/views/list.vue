<template>
    <div class="about">
        <el-table :data="tableData" border style="width: 100%">>
            <el-table-column prop="_id" label="id">
            </el-table-column>
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <el-table-column prop="parent.name" label="上级分组">
            </el-table-column>
            <el-table-column prop="desc" label="描述">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="$router.push(`/categories/edit/${scope.row._id}`)">编辑</el-button>
                    <el-button type="text" size="small" @click="deleteItem(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "list",
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                this.$http.get('categories').then(res => {
                    this.tableData = res.data;
                })
            },
            deleteItem(id){
                // deleteCategoryById
                this.$http.delete(`deleteCategoryById/${id}`).then(res => {
                    console.log(res)
                    this.getList();
                })
            }
        }
    }
</script>

<style scoped>

</style>
