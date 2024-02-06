<template>
    <div style="display: flex; flex-direction: row; align-items: center">
        <el-button
            @click="$router.back()"
            style="margin-right: 15px"
            text
            circle
        >
            <el-icon> <ArrowLeft /> </el-icon>
        </el-button>
        <h1>{{ title }}</h1>
    </div>
    <el-divider />
    <slot name="default"></slot>
</template>

<script lang="ts">
import { ArrowLeft } from "@element-plus/icons-vue";

export default {
    props: {
        title: {
            type: String,
        },
    },
    components: {
        ArrowLeft,
    },
};
</script>
