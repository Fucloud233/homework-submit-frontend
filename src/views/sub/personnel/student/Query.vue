<template>
    <el-form
        :inline="true"
        :model="queryInfo"
        label-width="80px"
        label-position="left"
    >
        <!-- 操作按钮 -->
        <el-form-item label="操作">
            <el-button
                @click="$router.push({ name: 'studentAdd' })"
                type="success"
                >添加</el-button
            >
            <el-button
                @click="$router.push({ name: 'studentAddInBatch' })"
                type="success"
                >批量添加</el-button
            >
        </el-form-item>
        <br />

        <!-- 根据年级筛选 -->
        <el-form-item label="年级">
            <el-select
                v-model="queryInfo.grade"
                @change="update()"
                style="width: 100px"
                default-first-option
            >
                <el-option
                    v-for="item in gradeOptions"
                    :key="item.key"
                    :value="item.value"
                    :label="item.label"
                ></el-option>
            </el-select>
        </el-form-item>

        <!-- 按照性别查询 -->
        <el-form-item label="性别">
            <el-select
                v-model="queryInfo.gender"
                @change="update()"
                style="width: 100px"
                default-first-option
            >
                <el-option
                    v-for="option in genderOptions"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                ></el-option>
            </el-select>
        </el-form-item>

        <!-- 查询字段 -->
        <el-form-item label="查询类型">
            <el-space>
                <!-- TODO: 添加数字验证 -->
                <el-select
                    v-model="queryInfo.kind"
                    style="width: 100px"
                    :default-first-option="true"
                    @change="queryInfo.clearContent()"
                >
                    <el-option
                        v-for="kind in queryKinds"
                        :key="kind.value"
                        :label="kind.label"
                        :value="kind.value"
                    ></el-option>
                </el-select>

                <el-input
                    style="width: 200px"
                    v-model="queryInfo.content"
                    placeholder="请输入"
                    clearable
                ></el-input>

                <el-button @click="update()" type="primary">查询</el-button>
                <el-button @click="clear()">清除</el-button>
            </el-space>
        </el-form-item>

        <el-form-item> </el-form-item>
        <br />
    </el-form>
    <el-divider />
    <el-table :data="list" :border="true" :stripe="true">
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="grade" label="年级" />
        <el-table-column prop="gender" label="性别">
            <template #default="scope">
                {{ getGenderLabel(scope.row.gender) }}
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default>
                <div style="display: inline">
                    <el-button type="info" size="small" text>
                        修改密码
                    </el-button>
                    <el-button type="danger" size="small" text>删除</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>

    <!-- 表格分页 -->
    <div style="padding-top: 15px">
        <el-pagination
            layout="prev, pager, next"
            :total="listLength"
            v-model:current-page="queryInfo.pageNum"
            :page-size="queryInfo.pageSize"
            @change="update()"
        />
    </div>
</template>

<script lang="ts">
import { Student, query } from "../../../../api/student";

class QueryInfo {
    kind: number;
    content: any;
    grade: number;
    gender: number;

    // 分页属性
    pageNum: number = 0;
    pageSize: number = 5;

    constructor(kind: number, content: any, grade: number, gender: number) {
        this.kind = kind;
        this.content = content;
        this.grade = grade;
        this.gender = gender;
    }

    clear() {
        this.kind = 1;
        this.grade = this.gender = 0;
        this.content = undefined;
        this.pageNum = 0;
        this.pageSize = 5;
    }

    clearContent() {
        this.content = undefined;
    }

    toStudent() {
        const info = new Student();

        // 通过筛选选择需要的信息
        if (this.grade) {
            info.grade = this.grade;
        }
        if (this.gender) {
            info.gender = this.gender;
        }
        if (this.content && this.kind != 0) {
            switch (this.kind) {
                case 1:
                    info.id = this.content;
                    break;
                case 2:
                    info.name = this.content;
            }
        }

        return info;
    }
}

export default {
    data() {
        return {
            queryInfo: new QueryInfo(1, "", 0, 0),
            queryKinds: [
                {
                    value: 1,
                    label: "学号",
                },
                {
                    value: 2,
                    label: "姓名",
                },
            ],
            gradeOptions: this.getGradeOptions(2020, 5),
            genderOptions: [
                {
                    label: "所有",
                    value: 0,
                },
                {
                    label: "男",
                    value: 1,
                },
                {
                    label: "女",
                    value: 2,
                },
            ],
            list: [] as Student[],
            listLength: 0,
        };
    },
    async mounted() {
        this.update();
    },
    methods: {
        getGradeOptions(begin: number, length: number) {
            const gradeOptions = [
                {
                    label: "所有",
                    value: 0,
                },
            ];

            for (let i = 0; i < length; i++) {
                gradeOptions.push({
                    label: (begin + i).toString(),
                    value: begin + i,
                });
            }

            return gradeOptions;
        },
        getGenderLabel(gender: number): string {
            switch (gender) {
                case 1:
                    return "男";
                case 2:
                    return "女";
            }

            return "";
        },
        async update() {
            const info = this.queryInfo;
            const result = await query(
                info.toStudent(),
                info.pageNum,
                info.pageSize
            );

            this.listLength = result.length;
            this.list = result.info;
        },
        clear() {
            this.queryInfo.clear();
            this.update();
        },
    },
};
</script>
