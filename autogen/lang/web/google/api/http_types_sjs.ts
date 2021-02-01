// File auto-generated by protoc-gen-simple-ts


export interface Http {
    rules?: Array<HttpRule>,
    fully_decode_reserved_expansion?: boolean,
}

export interface HttpRule {
    selector?: string,
    get?: string,
    put?: string,
    post?: string,
    delete?: string,
    patch?: string,
    custom?: CustomHttpPattern,
    body?: string,
    response_body?: string,
    additional_bindings?: Array<HttpRule>,
}

export interface CustomHttpPattern {
    kind?: string,
    path?: string,
}
