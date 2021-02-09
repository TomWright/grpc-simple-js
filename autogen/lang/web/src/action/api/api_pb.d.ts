import * as jspb from 'google-protobuf'

import * as src_action_crud_api_pb from '../../action/crud/api_pb';


export class GetJobRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): GetJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    uid: string,
  }
}

export class GetJobResponse extends jspb.Message {
  getJob(): src_action_crud_api_pb.Job | undefined;
  setJob(value?: src_action_crud_api_pb.Job): GetJobResponse;
  hasJob(): boolean;
  clearJob(): GetJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobResponse): GetJobResponse.AsObject;
  static serializeBinaryToWriter(message: GetJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobResponse;
  static deserializeBinaryFromReader(message: GetJobResponse, reader: jspb.BinaryReader): GetJobResponse;
}

export namespace GetJobResponse {
  export type AsObject = {
    job?: src_action_crud_api_pb.Job.AsObject,
  }
}

export class InitiateActionRequest extends jspb.Message {
  getActionid(): string;
  setActionid(value: string): InitiateActionRequest;

  getResourceid(): string;
  setResourceid(value: string): InitiateActionRequest;

  getFilter(): string;
  setFilter(value: string): InitiateActionRequest;

  getActiondata(): string;
  setActiondata(value: string): InitiateActionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateActionRequest): InitiateActionRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateActionRequest;
  static deserializeBinaryFromReader(message: InitiateActionRequest, reader: jspb.BinaryReader): InitiateActionRequest;
}

export namespace InitiateActionRequest {
  export type AsObject = {
    actionid: string,
    resourceid: string,
    filter: string,
    actiondata: string,
  }
}

export class InitiateActionResponse extends jspb.Message {
  getJob(): src_action_crud_api_pb.Job | undefined;
  setJob(value?: src_action_crud_api_pb.Job): InitiateActionResponse;
  hasJob(): boolean;
  clearJob(): InitiateActionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateActionResponse): InitiateActionResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateActionResponse;
  static deserializeBinaryFromReader(message: InitiateActionResponse, reader: jspb.BinaryReader): InitiateActionResponse;
}

export namespace InitiateActionResponse {
  export type AsObject = {
    job?: src_action_crud_api_pb.Job.AsObject,
  }
}

