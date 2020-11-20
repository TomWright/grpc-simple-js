

export type Http = {
    rules: Array<HttpRule>,
    fully_decode_reserved_expansion: boolean,
}

export type HttpRule = {
    selector: string,
    get: string,
    put: string,
    post: string,
    delete: string,
    patch: string,
    custom: CustomHttpPattern,
    body: string,
    response_body: string,
    additional_bindings: Array<HttpRule>,
}

export type CustomHttpPattern = {
    kind: string,
    path: string,
}

