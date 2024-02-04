<template>
    <el-container>
        <el-header>
            <slot name="header"></slot>
        </el-header>
        <div id="main-container">
            <el-aside width="300px">
                <slot name="aside"></slot>
            </el-aside>
            <el-main>
                <div id="content-container">
                    <slot name="main"></slot>
                </div>
            </el-main>
        </div>
    </el-container>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.el-container {
    height: 100%;
    padding: 0;
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
.el-main {
    background-color: #e9e9eb;
}
#content-container {
    background-color: white;
    border-radius: 15px;
    box-sizing: border-box;
    height: 100%;
    padding: 20px 30px;

    box-shadow: 3px 3px 5px rgb(150, 150, 150);
}
#avatar {
    border-radius: 50%;
}
#main-container {
    height: 100%;

    display: flex;
}
</style>
