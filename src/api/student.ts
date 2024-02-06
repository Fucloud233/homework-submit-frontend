import * as utils from "./utils";

import { plainToClass } from "class-transformer";

export class Student {
    id: number | undefined;
    name: string | undefined;
    gender: number | undefined;
    grade: number | undefined;
    password: string | undefined;
}

export const add = async (info: Student, randomPassword: boolean) => {
    if (randomPassword) {
        info.password = undefined;
    }

    return await utils.postRequest("/student", info);
};

export const query = async (
    info: Student,
    pageNum: number,
    pageSize: number
) => {
    // 使用Object来聚合Get参数
    var param = {
        pageNum,
        pageSize,
    };

    Object.assign(param, info);

    return await utils.getRequest("/student", param).then((result) => {
        const data = result.data;

        return {
            length: data.length,
            // 循环解析数据
            info: data.info.map((element: any) => {
                return plainToClass(Student, element);
            }),
        };
    });
};
