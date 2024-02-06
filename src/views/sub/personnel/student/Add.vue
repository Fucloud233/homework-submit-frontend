<template>
    <SubLayout title="添加学生">
        <div style="display: flex; flex-direction: column; align-items: center">
            <el-form :model="info" label-position="right" style="width: 360px">
                <el-form-item label="学号">
                    <el-input v-model.number="info.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="info.name">></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="info.gender" d>
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年级">
                    <el-select v-model="info.grade">
                        <el-option
                            v-for="option in gradeOptions"
                            :key="option.value"
                            :label="option.label"
                            :value="option.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="密码">
                    <div
                        style="display: flex; flex-direction: row; width: 100%"
                    >
                        <el-checkbox
                            label="自动生成"
                            :checked="randomPassword"
                            @click="randomPassword = !randomPassword"
                            style="padding-right: 15px"
                        ></el-checkbox>
                        <el-input
                            v-model="info.password"
                            :disabled="randomPassword"
                            type="password"
                            :show-password="true"
                        ></el-input>
                    </div>
                </el-form-item>
                <div style="text-align: right">
                    <el-button @click="handleAdd()" type="primary">
                        添加
                    </el-button>
                    <el-button @click="$router.back()">取消</el-button>
                </div>
            </el-form>
        </div>
    </SubLayout>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";

import SubLayout from "@/components/layout/Sub.vue";
import { Student, add } from "@/api/student";
import { getGradeOptions } from "@/utils/info/grade";
export default {
    components: {
        SubLayout,
    },
    data() {
        const info = new Student();
        // info.name = "Tom";
        // info.id = 50;
        // info.gender = 1;
        // info.grade = 2021;

        return {
            info: info,
            gradeOptions: getGradeOptions(),

            randomPassword: true,
        };
    },
    methods: {
        async handleAdd() {
            const result = await add(this.info, this.randomPassword);
            if (result.code) {
                ElMessage({
                    message: result.msg,
                    type: "error",
                });

                return;
            }

            this.info = new Student();
            this.$router.back();
        },
    },
};
</script>

<style scoped>
.el-icon {
    font-size: 15px;
}
</style>
