<template>
    <div id="layout">
        <div id="container">
            <div id="left">
                <h1 id="title">欢迎使用<br />作业提交系统!</h1>
            </div>
            <div id="right">
                <h2 style="padding-bottom: 20px; padding-left: 15px">
                    {{ title }}
                </h2>
                <el-form :model="loginInfo" label-width="50px">
                    <el-form-item label="账号">
                        <el-input
                            v-model.number="loginInfo.id"
                            placeholder=""
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input
                            v-model="loginInfo.password"
                            type="password"
                        ></el-input>
                    </el-form-item>
                </el-form>
                <el-button
                    type="primary"
                    style="border-radius: 10px; margin: 0 10px"
                    >登录</el-button
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            default: "登录界面",
        },
        loginInfo: {
            type: Object,
            default: {},
        },
    },
    watch: {
        curLoginInfo() {
            this.$emit("update:loginInfo", this.curLoginInfo);
        },
    },
    data() {
        return {
            curLoginInfo: {},
        };
    },
};
</script>

<style scoped>
#layout {
    height: 100%;
    background-color: #e9e9eb;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#container {
    width: 800px;
    height: 600px;
    /* padding: 15px; */

    background-color: white;
    box-shadow: 2px 5px 5px gray;

    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
}
#left {
    background-color: #409eff;
    width: 40%;
    height: 100%;
    border-radius: 15px 0 0 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}
#title {
    color: white;
    font-size: 32px;
    text-align: center;
}
#right {
    width: 60%;
    height: 100%;
    padding: 60px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
}
</style>
