

export type GetObjectsRequest = {
    resourceId: string,
    query: string,
    limit: number,
    sorting: Array<string>,
    cursor: string,
}

export type GetObjectsResponse = {
    results: string,
    total: number,
    cursor: string,
}

export type GetSchemaRequest = {
    resourceId: string,
}

export type GetFieldSchemaRequest = {
    resourceId: string,
    accessor: string,
}

export type GetSchemaResponse = {
    schema: SchemaField,
}

export type SchemaField = {
    name: string,
    type: string,
    fields: Array<SchemaField>,
    metadata: SchemaFieldMetadata,
    accessor: string,
}

export type SchemaFieldMetadata = {
    mapping: string,
    type: string,
    values: Array<SchemaFieldMetadataValue>,
}

export type SchemaFieldMetadataValue = {
    label: string,
    value: string,
    active: boolean,
    defaultValue: boolean,
}

