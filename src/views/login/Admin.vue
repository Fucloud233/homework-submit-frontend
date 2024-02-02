<template>
    <LoginLayout title="管理员登录" v-model:loginInfo="loginInfo"></LoginLayout>
</template>

<script lang="ts">
import LoginLayout from "../../components/layout/Login.vue";

export default {
    components: {
        LoginLayout,
    },
    data() {
        return {
            loginInfo: {
                id: undefined,
                password: "",
            },
        };
    },
};
</script>
