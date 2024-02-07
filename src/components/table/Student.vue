<template>
    <el-table :data="data" :border="true" :stripe="true">
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="grade" label="年级" />
        <el-table-column prop="gender" label="性别">
            <template #default="scope">
                {{ getGenderLabel(scope.row.gender) }}
            </template>
        </el-table-column>
        <el-table-column
            prop="password"
            label="密码"
            v-if="hasPassword"
        ></el-table-column>
        <slot name="function"></slot>
    </el-table>
</template>

<script lang="ts">
import { Student } from "@/api/student";

export default {
    props: {
        // 这里并没有强制类型限制
        data: { type: Array<Student> },
        hasPassword: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        getGenderLabel(gender: number): string {
            switch (gender) {
                case 1:
                    return "男";
                case 2:
                    return "女";
            }

            return "";
        },
    },
};
</script>
