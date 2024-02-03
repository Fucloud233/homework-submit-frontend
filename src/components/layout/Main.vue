<template>
    <el-container>
        <el-header>
            <slot name="header"></slot>
        </el-header>
        <div id="main-container">
            <el-aside width="300px">
                <slot name="aside"></slot>
            </el-aside>
            <el-main> <slot name="main"></slot> </el-main>
        </div>
    </el-container>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.el-container {
    height: 100%;
}
.el-header {
    background-color: #409eff;
    color: white;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
#avatar {
    border-radius: 50%;
}
#main-container {
    height: 100%;

    display: flex;
}
</style>
