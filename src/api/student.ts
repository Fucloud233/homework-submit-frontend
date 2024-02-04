import * as utils from "./utils";

import { plainToClass } from "class-transformer";

export class Student {
    id: number = 0;
    name: string = "";
    gender: number = 0;
    grade: number = 0;
    password: string = "";
}

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

    return await utils
        .getRequest(utils.getApiUrl("/student"), param)
        .then((resp) => {
            if (resp.status != 200) {
                console.error("query student error");
                return {
                    info: [] as Student[],
                    length: 0,
                };
            }

            const data = resp.data.data;
            const result = {
                length: data.length,
                // 循环解析数据
                info: data.info.map((element: any) => {
                    return plainToClass(Student, element);
                }),
            };

            return result;
        });
};
