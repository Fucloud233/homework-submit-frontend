import axios from "axios";

const basicHeaders = {
    "Content-Type": "application/json",
};

export function postRequest(apiUrl: string, data: Object) {
    return axios({
        method: "post",
        url: apiUrl,
        headers: basicHeaders,
        data: data,
    });
}

export function deleteRequest(apiUrl: string, data: Object) {
    return axios({
        method: "delete",
        url: apiUrl,
        headers: basicHeaders,
        data: data,
    });
}

export function putRequest(apiUrl: string, data: Object) {
    return axios({
        method: "put",
        url: apiUrl,
        headers: basicHeaders,
        data: data,
    });
}

export function getRequest(apiUrl: string, params: Object) {
    return axios({
        method: "get",
        url: apiUrl,
        headers: basicHeaders,
        params: params,
    });
}

export function getApiUrl(name: string) {
    var apiUrl = "/api" + name;
    return apiUrl;
}

export const unwrapData = (resp: { data: Object }) => resp.data;
