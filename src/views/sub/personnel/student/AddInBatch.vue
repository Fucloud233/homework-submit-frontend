<template>
    <sub-layout title="批量添加学生">
        <el-upload
            drag
            v-if="table == undefined"
            :multiple="false"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="handleUpload"
        >
            <el-icon style="font-size: 72px; color: gray">
                <upload-filled />
            </el-icon>
            <div>
                拖拽文件上传,或<span style="color: #409eff">点击上传</span>
            </div>

            <template #tip>
                <el-button text size="small" style="margin-top: 10px">
                    点击下载模板
                </el-button>
            </template>
        </el-upload>

        <!-- <el-table :data="list" :border="true" :stripe="true"> </el-table> -->
        <div v-if="table != undefined">
            <student-table :data="table.list" has-password></student-table>
            <div style="text-align: right; padding-top: 15px">
                <el-button type="primary">确认</el-button>
                <el-button @click="table = undefined">取消</el-button>
            </div>
        </div>
    </sub-layout>
</template>

<script lang="ts">
import { UploadFile } from "element-plus/lib/components/upload";
import { UploadFilled } from "@element-plus/icons-vue/global";

import SubLayout from "@/components/layout/Sub.vue";
import StudentTable from "@/components/table/Student.vue";

import { StudentSimpleTable } from "@/utils/excel/student";

export default {
    components: {
        UploadFilled,
        SubLayout,
        StudentTable,
    },
    data() {
        return {
            url: "",
            table: undefined as StudentSimpleTable | undefined,
        };
    },
    methods: {
        async handleUpload(file: UploadFile) {
            const data = file.raw;
            if (data == undefined) {
                console.log("file is empty");
                return;
            }
            const blob = new Blob([data], { type: data.type });
            const table = await StudentSimpleTable.fromBlob(blob);
            this.table = table;
            // this.list = table.list;
        },
    },
};
</script>
