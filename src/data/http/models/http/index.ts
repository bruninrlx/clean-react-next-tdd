import { AxiosResponse } from "axios";

export type HttpRequest = {
    url: string;
    data?: any;
    params?: any
};

export type Response = {
    response: AxiosResponse | undefined;
    axiosErrorResponse: AxiosResponse | undefined;
    error: Error | undefined;
}

export interface HttpClient<R = any> {
    request: (data: HttpRequest) => Promise<Response>;
}
export type HttpMethod = "post" | "get" | "put" | "delete" | "patch";

export enum HttpStatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    unprocessableEntity = 422,
    serverError = 500,
}
