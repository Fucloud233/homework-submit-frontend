<template>
    <sub-layout title="批量添加学生">
        <div style="display: flex">
            <el-upload>
                <el-button type="primary">上传文件</el-button>
            </el-upload>
            <el-button style="margin-left: 15px">下载模板</el-button>
            <el-link :href="url">test</el-link>
        </div>
    </sub-layout>
</template>

<script lang="ts">
import SubLayout from "@/components/layout/Sub.vue";

export default {
    components: {
        SubLayout,
    },
    data() {
        return {
            url: "",
        };
    },
    async mounted() {},
};
</script>
