import * as jspb from 'google-protobuf'

import * as src_action_crud_api_pb from '../../action/crud/api_pb';


export class Event extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): Event;

  getType(): EventType;
  setType(value: EventType): Event;

  getData(): string;
  setData(value: string): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    version: number,
    type: EventType,
    data: string,
  }
}

export class ExecuteJobData extends jspb.Message {
  getJob(): src_action_crud_api_pb.Job | undefined;
  setJob(value?: src_action_crud_api_pb.Job): ExecuteJobData;
  hasJob(): boolean;
  clearJob(): ExecuteJobData;

  getActionid(): string;
  setActionid(value: string): ExecuteJobData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteJobData.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteJobData): ExecuteJobData.AsObject;
  static serializeBinaryToWriter(message: ExecuteJobData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteJobData;
  static deserializeBinaryFromReader(message: ExecuteJobData, reader: jspb.BinaryReader): ExecuteJobData;
}

export namespace ExecuteJobData {
  export type AsObject = {
    job?: src_action_crud_api_pb.Job.AsObject,
    actionid: string,
  }
}

export class JobStatusChangeData extends jspb.Message {
  getOldjob(): src_action_crud_api_pb.Job | undefined;
  setOldjob(value?: src_action_crud_api_pb.Job): JobStatusChangeData;
  hasOldjob(): boolean;
  clearOldjob(): JobStatusChangeData;

  getNewjob(): src_action_crud_api_pb.Job | undefined;
  setNewjob(value?: src_action_crud_api_pb.Job): JobStatusChangeData;
  hasNewjob(): boolean;
  clearNewjob(): JobStatusChangeData;

  getActionid(): string;
  setActionid(value: string): JobStatusChangeData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatusChangeData.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatusChangeData): JobStatusChangeData.AsObject;
  static serializeBinaryToWriter(message: JobStatusChangeData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatusChangeData;
  static deserializeBinaryFromReader(message: JobStatusChangeData, reader: jspb.BinaryReader): JobStatusChangeData;
}

export namespace JobStatusChangeData {
  export type AsObject = {
    oldjob?: src_action_crud_api_pb.Job.AsObject,
    newjob?: src_action_crud_api_pb.Job.AsObject,
    actionid: string,
  }
}

export enum EventType { 
  UNKNOWN_EVENT_TYPE = 0,
  EXECUTE_JOB = 1,
  JOB_STATUS_CHANGE = 2,
}
