import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as src_ui_crud_api_pb from '../../ui/crud/api_pb';


export class Action extends jspb.Message {
  getUid(): string;
  setUid(value: string): Action;

  getUserid(): string;
  setUserid(value: string): Action;

  getTenantid(): string;
  setTenantid(value: string): Action;

  getDomainid(): string;
  setDomainid(value: string): Action;

  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): Action;
  clearJobsList(): Action;
  addJobs(value?: Job, index?: number): Job;

  getCreatedat(): string;
  setCreatedat(value: string): Action;

  getCreatedby(): string;
  setCreatedby(value: string): Action;

  getUpdatedat(): string;
  setUpdatedat(value: string): Action;

  getUpdatedby(): string;
  setUpdatedby(value: string): Action;

  getDeletedat(): string;
  setDeletedat(value: string): Action;

  getDeletedby(): string;
  setDeletedby(value: string): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    uid: string,
    userid: string,
    tenantid: string,
    domainid: string,
    jobsList: Array<Job.AsObject>,
    createdat: string,
    createdby: string,
    updatedat: string,
    updatedby: string,
    deletedat: string,
    deletedby: string,
  }
}

export class ActionResponse extends jspb.Message {
  getUid(): string;
  setUid(value: string): ActionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActionResponse): ActionResponse.AsObject;
  static serializeBinaryToWriter(message: ActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionResponse;
  static deserializeBinaryFromReader(message: ActionResponse, reader: jspb.BinaryReader): ActionResponse;
}

export namespace ActionResponse {
  export type AsObject = {
    uid: string,
  }
}

export class ActionResult extends jspb.Message {
  getUid(): string;
  setUid(value: string): ActionResult;

  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): ActionResult;
  clearJobsList(): ActionResult;
  addJobs(value?: Job, index?: number): Job;

  getSummary(): JobsSummary | undefined;
  setSummary(value?: JobsSummary): ActionResult;
  hasSummary(): boolean;
  clearSummary(): ActionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionResult.AsObject;
  static toObject(includeInstance: boolean, msg: ActionResult): ActionResult.AsObject;
  static serializeBinaryToWriter(message: ActionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionResult;
  static deserializeBinaryFromReader(message: ActionResult, reader: jspb.BinaryReader): ActionResult;
}

export namespace ActionResult {
  export type AsObject = {
    uid: string,
    jobsList: Array<Job.AsObject>,
    summary?: JobsSummary.AsObject,
  }
}

export class JobsSummary extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): JobsSummary;

  getPending(): number;
  setPending(value: number): JobsSummary;

  getStarted(): number;
  setStarted(value: number): JobsSummary;

  getCompleted(): number;
  setCompleted(value: number): JobsSummary;

  getFailed(): number;
  setFailed(value: number): JobsSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobsSummary.AsObject;
  static toObject(includeInstance: boolean, msg: JobsSummary): JobsSummary.AsObject;
  static serializeBinaryToWriter(message: JobsSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobsSummary;
  static deserializeBinaryFromReader(message: JobsSummary, reader: jspb.BinaryReader): JobsSummary;
}

export namespace JobsSummary {
  export type AsObject = {
    total: number,
    pending: number,
    started: number,
    completed: number,
    failed: number,
  }
}

export class JobRunRequirements extends jspb.Message {
  getMintime(): string;
  setMintime(value: string): JobRunRequirements;

  getJobscompletedList(): Array<string>;
  setJobscompletedList(value: Array<string>): JobRunRequirements;
  clearJobscompletedList(): JobRunRequirements;
  addJobscompleted(value: string, index?: number): JobRunRequirements;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobRunRequirements.AsObject;
  static toObject(includeInstance: boolean, msg: JobRunRequirements): JobRunRequirements.AsObject;
  static serializeBinaryToWriter(message: JobRunRequirements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobRunRequirements;
  static deserializeBinaryFromReader(message: JobRunRequirements, reader: jspb.BinaryReader): JobRunRequirements;
}

export namespace JobRunRequirements {
  export type AsObject = {
    mintime: string,
    jobscompletedList: Array<string>,
  }
}

export class Job extends jspb.Message {
  getUid(): string;
  setUid(value: string): Job;

  getUserid(): string;
  setUserid(value: string): Job;

  getTenantid(): string;
  setTenantid(value: string): Job;

  getDomainid(): string;
  setDomainid(value: string): Job;

  getJobstatus(): JobStatus;
  setJobstatus(value: JobStatus): Job;

  getJobtype(): string;
  setJobtype(value: string): Job;

  getJobdata(): string;
  setJobdata(value: string): Job;

  getRunrequirements(): JobRunRequirements | undefined;
  setRunrequirements(value?: JobRunRequirements): Job;
  hasRunrequirements(): boolean;
  clearRunrequirements(): Job;

  getOrder(): number;
  setOrder(value: number): Job;

  getStartedat(): string;
  setStartedat(value: string): Job;

  getCompletedat(): string;
  setCompletedat(value: string): Job;

  getFailedat(): string;
  setFailedat(value: string): Job;

  getCreatedat(): string;
  setCreatedat(value: string): Job;

  getCreatedby(): string;
  setCreatedby(value: string): Job;

  getUpdatedat(): string;
  setUpdatedat(value: string): Job;

  getUpdatedby(): string;
  setUpdatedby(value: string): Job;

  getDeletedat(): string;
  setDeletedat(value: string): Job;

  getDeletedby(): string;
  setDeletedby(value: string): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    uid: string,
    userid: string,
    tenantid: string,
    domainid: string,
    jobstatus: JobStatus,
    jobtype: string,
    jobdata: string,
    runrequirements?: JobRunRequirements.AsObject,
    order: number,
    startedat: string,
    completedat: string,
    failedat: string,
    createdat: string,
    createdby: string,
    updatedat: string,
    updatedby: string,
    deletedat: string,
    deletedby: string,
  }
}

export enum ActionType { 
  UNKNOWN_ACTION_TYPE = 0,
  ACTION_TYPE_ONE_OFF = 1,
  ACTION_TYPE_SCHEDULED = 2,
}
export enum JobStatus { 
  UNKNOWN_JOB_STATUS = 0,
  JOB_STATUS_PENDING = 1,
  JOB_STATUS_STARTED = 2,
  JOB_STATUS_COMPLETED = 3,
  JOB_STATUS_FAILED = 4,
}
