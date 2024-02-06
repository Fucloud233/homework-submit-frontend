import axios from "axios";
import { plainToInstance } from "class-transformer";

export class Result {
    data: any;
    msg: string;
    code: number;

    constructor(data: any, msg: string, code: number) {
        this.data = data;
        this.msg = msg;
        this.code = code;
    }

    static from(data: Object) {
        return plainToInstance(Result, data);
    }
}

const basicHeaders = {
    "Content-Type": "application/json",
};

export function postRequest(path: string, data: Object) {
    return axios({
        method: "post",
        url: getApiUrl(path),
        headers: basicHeaders,
        data: data,
    }).then((resp) => Result.from(resp.data));
}

export function deleteRequest(path: string, data: Object) {
    return axios({
        method: "delete",
        url: getApiUrl(path),
        headers: basicHeaders,
        data: data,
    }).then((resp) => Result.from(resp.data));
}

export function putRequest(path: string, data: Object) {
    return axios({
        method: "put",
        url: getApiUrl(path),
        headers: basicHeaders,
        data: data,
    }).then((resp) => Result.from(resp.data));
}

export function getRequest(path: string, params: Object) {
    return axios({
        method: "get",
        url: getApiUrl(path),
        headers: basicHeaders,
        params: params,
    }).then((resp) => Result.from(resp.data));
}

export function getApiUrl(name: string) {
    var apiUrl = "/api" + name;
    return apiUrl;
}

export const unwrapData = (resp: { data: Object }) => resp.data;
