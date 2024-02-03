<template>
    <MainLayout>
        <template #header>
            <h1 id="title">作业提交系统</h1>
            <div style="display: flex; align-items: center">
                <span style="padding-right: 15px">Fucloud</span>
                <el-image
                    id="avatar"
                    style="border-radius: 50%; width: 50px; height: 50px"
                    :src="avatarUrl"
                ></el-image>
            </div>
        </template>
        <template #aside>
            <el-menu default-active="1" style="height: 100%">
                <el-menu-item index="1">
                    <el-icon><Odometer /></el-icon>Dashboard
                </el-menu-item>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><User /></el-icon>人事管理
                    </template>
                    <el-menu-item index="2-1">学生管理</el-menu-item>
                    <el-menu-item index="2-2">课程管理</el-menu-item>
                    <el-menu-item index="2-3">管理员管理</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon><School /></el-icon>课程管理
                    </template>
                    <el-menu-item index="3-1">课程开设</el-menu-item>
                    <el-menu-item index="3-2">课程管理</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </template>
        <template>
            <router-view></router-view>
        </template>
    </MainLayout>
</template>

<script lang="ts">
import MainLayout from "../components/layout/Main.vue";
import { User, School, Odometer } from "@element-plus/icons-vue";
export default {
    components: {
        MainLayout,
        User,
        School,
        Odometer,
    },
    data() {
        return {
            //临时导入图片，后续对该函数进行封装
            avatarUrl: new URL("../assets/avatar.png", import.meta.url).href,
        };
    },
};
</script>
