import * as jspb from 'google-protobuf'



export class GetObjectsRequest extends jspb.Message {
  getResourceid(): string;
  setResourceid(value: string): GetObjectsRequest;

  getQuery(): string;
  setQuery(value: string): GetObjectsRequest;

  getLimit(): number;
  setLimit(value: number): GetObjectsRequest;

  getSortingList(): Array<string>;
  setSortingList(value: Array<string>): GetObjectsRequest;
  clearSortingList(): GetObjectsRequest;
  addSorting(value: string, index?: number): GetObjectsRequest;

  getCursor(): string;
  setCursor(value: string): GetObjectsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectsRequest): GetObjectsRequest.AsObject;
  static serializeBinaryToWriter(message: GetObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectsRequest;
  static deserializeBinaryFromReader(message: GetObjectsRequest, reader: jspb.BinaryReader): GetObjectsRequest;
}

export namespace GetObjectsRequest {
  export type AsObject = {
    resourceid: string,
    query: string,
    limit: number,
    sortingList: Array<string>,
    cursor: string,
  }
}

export class GetObjectsResponse extends jspb.Message {
  getResults(): string;
  setResults(value: string): GetObjectsResponse;

  getTotal(): number;
  setTotal(value: number): GetObjectsResponse;

  getCursor(): string;
  setCursor(value: string): GetObjectsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectsResponse): GetObjectsResponse.AsObject;
  static serializeBinaryToWriter(message: GetObjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectsResponse;
  static deserializeBinaryFromReader(message: GetObjectsResponse, reader: jspb.BinaryReader): GetObjectsResponse;
}

export namespace GetObjectsResponse {
  export type AsObject = {
    results: string,
    total: number,
    cursor: string,
  }
}

export class GetSchemaRequest extends jspb.Message {
  getResourceid(): string;
  setResourceid(value: string): GetSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchemaRequest): GetSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: GetSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchemaRequest;
  static deserializeBinaryFromReader(message: GetSchemaRequest, reader: jspb.BinaryReader): GetSchemaRequest;
}

export namespace GetSchemaRequest {
  export type AsObject = {
    resourceid: string,
  }
}

export class GetFieldSchemaRequest extends jspb.Message {
  getResourceid(): string;
  setResourceid(value: string): GetFieldSchemaRequest;

  getAccessor(): string;
  setAccessor(value: string): GetFieldSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFieldSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFieldSchemaRequest): GetFieldSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: GetFieldSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFieldSchemaRequest;
  static deserializeBinaryFromReader(message: GetFieldSchemaRequest, reader: jspb.BinaryReader): GetFieldSchemaRequest;
}

export namespace GetFieldSchemaRequest {
  export type AsObject = {
    resourceid: string,
    accessor: string,
  }
}

export class GetSchemaResponse extends jspb.Message {
  getSchema(): SchemaField | undefined;
  setSchema(value?: SchemaField): GetSchemaResponse;
  hasSchema(): boolean;
  clearSchema(): GetSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchemaResponse): GetSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: GetSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchemaResponse;
  static deserializeBinaryFromReader(message: GetSchemaResponse, reader: jspb.BinaryReader): GetSchemaResponse;
}

export namespace GetSchemaResponse {
  export type AsObject = {
    schema?: SchemaField.AsObject,
  }
}

export class SchemaField extends jspb.Message {
  getName(): string;
  setName(value: string): SchemaField;

  getType(): string;
  setType(value: string): SchemaField;

  getFieldsList(): Array<SchemaField>;
  setFieldsList(value: Array<SchemaField>): SchemaField;
  clearFieldsList(): SchemaField;
  addFields(value?: SchemaField, index?: number): SchemaField;

  getMetadata(): SchemaFieldMetadata | undefined;
  setMetadata(value?: SchemaFieldMetadata): SchemaField;
  hasMetadata(): boolean;
  clearMetadata(): SchemaField;

  getAccessor(): string;
  setAccessor(value: string): SchemaField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaField.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaField): SchemaField.AsObject;
  static serializeBinaryToWriter(message: SchemaField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaField;
  static deserializeBinaryFromReader(message: SchemaField, reader: jspb.BinaryReader): SchemaField;
}

export namespace SchemaField {
  export type AsObject = {
    name: string,
    type: string,
    fieldsList: Array<SchemaField.AsObject>,
    metadata?: SchemaFieldMetadata.AsObject,
    accessor: string,
  }
}

export class SchemaFieldMetadata extends jspb.Message {
  getMapping(): string;
  setMapping(value: string): SchemaFieldMetadata;

  getType(): string;
  setType(value: string): SchemaFieldMetadata;

  getValuesList(): Array<SchemaFieldMetadataValue>;
  setValuesList(value: Array<SchemaFieldMetadataValue>): SchemaFieldMetadata;
  clearValuesList(): SchemaFieldMetadata;
  addValues(value?: SchemaFieldMetadataValue, index?: number): SchemaFieldMetadataValue;

  getLabel(): string;
  setLabel(value: string): SchemaFieldMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaFieldMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaFieldMetadata): SchemaFieldMetadata.AsObject;
  static serializeBinaryToWriter(message: SchemaFieldMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaFieldMetadata;
  static deserializeBinaryFromReader(message: SchemaFieldMetadata, reader: jspb.BinaryReader): SchemaFieldMetadata;
}

export namespace SchemaFieldMetadata {
  export type AsObject = {
    mapping: string,
    type: string,
    valuesList: Array<SchemaFieldMetadataValue.AsObject>,
    label: string,
  }
}

export class SchemaFieldMetadataValue extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): SchemaFieldMetadataValue;

  getValue(): string;
  setValue(value: string): SchemaFieldMetadataValue;

  getActive(): boolean;
  setActive(value: boolean): SchemaFieldMetadataValue;

  getDefaultvalue(): boolean;
  setDefaultvalue(value: boolean): SchemaFieldMetadataValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaFieldMetadataValue.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaFieldMetadataValue): SchemaFieldMetadataValue.AsObject;
  static serializeBinaryToWriter(message: SchemaFieldMetadataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaFieldMetadataValue;
  static deserializeBinaryFromReader(message: SchemaFieldMetadataValue, reader: jspb.BinaryReader): SchemaFieldMetadataValue;
}

export namespace SchemaFieldMetadataValue {
  export type AsObject = {
    label: string,
    value: string,
    active: boolean,
    defaultvalue: boolean,
  }
}

