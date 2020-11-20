import * as jspb from 'google-protobuf'

import * as src_ui_crud_api_pb from '../../ui/crud/api_pb';
import * as src_platform_query_match_strategy_pb from '../../platform/query/match_strategy_pb';


export class NewResourceRequest extends jspb.Message {
  getResource(): src_ui_crud_api_pb.Resource | undefined;
  setResource(value?: src_ui_crud_api_pb.Resource): NewResourceRequest;
  hasResource(): boolean;
  clearResource(): NewResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewResourceRequest): NewResourceRequest.AsObject;
  static serializeBinaryToWriter(message: NewResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewResourceRequest;
  static deserializeBinaryFromReader(message: NewResourceRequest, reader: jspb.BinaryReader): NewResourceRequest;
}

export namespace NewResourceRequest {
  export type AsObject = {
    resource?: src_ui_crud_api_pb.Resource.AsObject,
  }
}

export class GetResourceRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): GetResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceRequest): GetResourceRequest.AsObject;
  static serializeBinaryToWriter(message: GetResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceRequest;
  static deserializeBinaryFromReader(message: GetResourceRequest, reader: jspb.BinaryReader): GetResourceRequest;
}

export namespace GetResourceRequest {
  export type AsObject = {
    uid: string,
  }
}

export class PutResourceRequest extends jspb.Message {
  getResource(): src_ui_crud_api_pb.Resource | undefined;
  setResource(value?: src_ui_crud_api_pb.Resource): PutResourceRequest;
  hasResource(): boolean;
  clearResource(): PutResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutResourceRequest): PutResourceRequest.AsObject;
  static serializeBinaryToWriter(message: PutResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutResourceRequest;
  static deserializeBinaryFromReader(message: PutResourceRequest, reader: jspb.BinaryReader): PutResourceRequest;
}

export namespace PutResourceRequest {
  export type AsObject = {
    resource?: src_ui_crud_api_pb.Resource.AsObject,
  }
}

export class DelResourceRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): DelResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelResourceRequest): DelResourceRequest.AsObject;
  static serializeBinaryToWriter(message: DelResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelResourceRequest;
  static deserializeBinaryFromReader(message: DelResourceRequest, reader: jspb.BinaryReader): DelResourceRequest;
}

export namespace DelResourceRequest {
  export type AsObject = {
    uid: string,
  }
}

export class GetResourcesRequest extends jspb.Message {
  getUserid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setUserid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetResourcesRequest;
  hasUserid(): boolean;
  clearUserid(): GetResourcesRequest;

  getTenantid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setTenantid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetResourcesRequest;
  hasTenantid(): boolean;
  clearTenantid(): GetResourcesRequest;

  getDomainid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setDomainid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetResourcesRequest;
  hasDomainid(): boolean;
  clearDomainid(): GetResourcesRequest;

  getResource(): string;
  setResource(value: string): GetResourcesRequest;

  getLimit(): number;
  setLimit(value: number): GetResourcesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourcesRequest): GetResourcesRequest.AsObject;
  static serializeBinaryToWriter(message: GetResourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourcesRequest;
  static deserializeBinaryFromReader(message: GetResourcesRequest, reader: jspb.BinaryReader): GetResourcesRequest;
}

export namespace GetResourcesRequest {
  export type AsObject = {
    userid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    tenantid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    domainid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    resource: string,
    limit: number,
  }
}

export class GetResourcesResponse extends jspb.Message {
  getResourcesList(): Array<src_ui_crud_api_pb.Resource>;
  setResourcesList(value: Array<src_ui_crud_api_pb.Resource>): GetResourcesResponse;
  clearResourcesList(): GetResourcesResponse;
  addResources(value?: src_ui_crud_api_pb.Resource, index?: number): src_ui_crud_api_pb.Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourcesResponse): GetResourcesResponse.AsObject;
  static serializeBinaryToWriter(message: GetResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourcesResponse;
  static deserializeBinaryFromReader(message: GetResourcesResponse, reader: jspb.BinaryReader): GetResourcesResponse;
}

export namespace GetResourcesResponse {
  export type AsObject = {
    resourcesList: Array<src_ui_crud_api_pb.Resource.AsObject>,
  }
}

export class NewListRequest extends jspb.Message {
  getList(): src_ui_crud_api_pb.List | undefined;
  setList(value?: src_ui_crud_api_pb.List): NewListRequest;
  hasList(): boolean;
  clearList(): NewListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewListRequest): NewListRequest.AsObject;
  static serializeBinaryToWriter(message: NewListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewListRequest;
  static deserializeBinaryFromReader(message: NewListRequest, reader: jspb.BinaryReader): NewListRequest;
}

export namespace NewListRequest {
  export type AsObject = {
    list?: src_ui_crud_api_pb.List.AsObject,
  }
}

export class GetListRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): GetListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetListRequest): GetListRequest.AsObject;
  static serializeBinaryToWriter(message: GetListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListRequest;
  static deserializeBinaryFromReader(message: GetListRequest, reader: jspb.BinaryReader): GetListRequest;
}

export namespace GetListRequest {
  export type AsObject = {
    uid: string,
  }
}

export class PutListRequest extends jspb.Message {
  getList(): src_ui_crud_api_pb.List | undefined;
  setList(value?: src_ui_crud_api_pb.List): PutListRequest;
  hasList(): boolean;
  clearList(): PutListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutListRequest): PutListRequest.AsObject;
  static serializeBinaryToWriter(message: PutListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutListRequest;
  static deserializeBinaryFromReader(message: PutListRequest, reader: jspb.BinaryReader): PutListRequest;
}

export namespace PutListRequest {
  export type AsObject = {
    list?: src_ui_crud_api_pb.List.AsObject,
  }
}

export class DelListRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): DelListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelListRequest): DelListRequest.AsObject;
  static serializeBinaryToWriter(message: DelListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelListRequest;
  static deserializeBinaryFromReader(message: DelListRequest, reader: jspb.BinaryReader): DelListRequest;
}

export namespace DelListRequest {
  export type AsObject = {
    uid: string,
  }
}

export class GetListsRequest extends jspb.Message {
  getResourceid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setResourceid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetListsRequest;
  hasResourceid(): boolean;
  clearResourceid(): GetListsRequest;

  getUserid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setUserid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetListsRequest;
  hasUserid(): boolean;
  clearUserid(): GetListsRequest;

  getTenantid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setTenantid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetListsRequest;
  hasTenantid(): boolean;
  clearTenantid(): GetListsRequest;

  getDomainid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setDomainid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetListsRequest;
  hasDomainid(): boolean;
  clearDomainid(): GetListsRequest;

  getLimit(): number;
  setLimit(value: number): GetListsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetListsRequest): GetListsRequest.AsObject;
  static serializeBinaryToWriter(message: GetListsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListsRequest;
  static deserializeBinaryFromReader(message: GetListsRequest, reader: jspb.BinaryReader): GetListsRequest;
}

export namespace GetListsRequest {
  export type AsObject = {
    resourceid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    userid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    tenantid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    domainid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    limit: number,
  }
}

export class GetListsResponse extends jspb.Message {
  getListsList(): Array<src_ui_crud_api_pb.List>;
  setListsList(value: Array<src_ui_crud_api_pb.List>): GetListsResponse;
  clearListsList(): GetListsResponse;
  addLists(value?: src_ui_crud_api_pb.List, index?: number): src_ui_crud_api_pb.List;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetListsResponse): GetListsResponse.AsObject;
  static serializeBinaryToWriter(message: GetListsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListsResponse;
  static deserializeBinaryFromReader(message: GetListsResponse, reader: jspb.BinaryReader): GetListsResponse;
}

export namespace GetListsResponse {
  export type AsObject = {
    listsList: Array<src_ui_crud_api_pb.List.AsObject>,
  }
}

export class NewFilterRequest extends jspb.Message {
  getFilter(): src_ui_crud_api_pb.Filter | undefined;
  setFilter(value?: src_ui_crud_api_pb.Filter): NewFilterRequest;
  hasFilter(): boolean;
  clearFilter(): NewFilterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewFilterRequest): NewFilterRequest.AsObject;
  static serializeBinaryToWriter(message: NewFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewFilterRequest;
  static deserializeBinaryFromReader(message: NewFilterRequest, reader: jspb.BinaryReader): NewFilterRequest;
}

export namespace NewFilterRequest {
  export type AsObject = {
    filter?: src_ui_crud_api_pb.Filter.AsObject,
  }
}

export class GetFilterRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): GetFilterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilterRequest): GetFilterRequest.AsObject;
  static serializeBinaryToWriter(message: GetFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilterRequest;
  static deserializeBinaryFromReader(message: GetFilterRequest, reader: jspb.BinaryReader): GetFilterRequest;
}

export namespace GetFilterRequest {
  export type AsObject = {
    uid: string,
  }
}

export class PutFilterRequest extends jspb.Message {
  getFilter(): src_ui_crud_api_pb.Filter | undefined;
  setFilter(value?: src_ui_crud_api_pb.Filter): PutFilterRequest;
  hasFilter(): boolean;
  clearFilter(): PutFilterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutFilterRequest): PutFilterRequest.AsObject;
  static serializeBinaryToWriter(message: PutFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutFilterRequest;
  static deserializeBinaryFromReader(message: PutFilterRequest, reader: jspb.BinaryReader): PutFilterRequest;
}

export namespace PutFilterRequest {
  export type AsObject = {
    filter?: src_ui_crud_api_pb.Filter.AsObject,
  }
}

export class DelFilterRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): DelFilterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelFilterRequest): DelFilterRequest.AsObject;
  static serializeBinaryToWriter(message: DelFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelFilterRequest;
  static deserializeBinaryFromReader(message: DelFilterRequest, reader: jspb.BinaryReader): DelFilterRequest;
}

export namespace DelFilterRequest {
  export type AsObject = {
    uid: string,
  }
}

export class GetFiltersRequest extends jspb.Message {
  getResourceid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setResourceid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetFiltersRequest;
  hasResourceid(): boolean;
  clearResourceid(): GetFiltersRequest;

  getUserid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setUserid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetFiltersRequest;
  hasUserid(): boolean;
  clearUserid(): GetFiltersRequest;

  getTenantid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setTenantid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetFiltersRequest;
  hasTenantid(): boolean;
  clearTenantid(): GetFiltersRequest;

  getDomainid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setDomainid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetFiltersRequest;
  hasDomainid(): boolean;
  clearDomainid(): GetFiltersRequest;

  getLimit(): number;
  setLimit(value: number): GetFiltersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFiltersRequest): GetFiltersRequest.AsObject;
  static serializeBinaryToWriter(message: GetFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFiltersRequest;
  static deserializeBinaryFromReader(message: GetFiltersRequest, reader: jspb.BinaryReader): GetFiltersRequest;
}

export namespace GetFiltersRequest {
  export type AsObject = {
    resourceid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    userid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    tenantid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    domainid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    limit: number,
  }
}

export class GetFiltersResponse extends jspb.Message {
  getFiltersList(): Array<src_ui_crud_api_pb.Filter>;
  setFiltersList(value: Array<src_ui_crud_api_pb.Filter>): GetFiltersResponse;
  clearFiltersList(): GetFiltersResponse;
  addFilters(value?: src_ui_crud_api_pb.Filter, index?: number): src_ui_crud_api_pb.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFiltersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFiltersResponse): GetFiltersResponse.AsObject;
  static serializeBinaryToWriter(message: GetFiltersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFiltersResponse;
  static deserializeBinaryFromReader(message: GetFiltersResponse, reader: jspb.BinaryReader): GetFiltersResponse;
}

export namespace GetFiltersResponse {
  export type AsObject = {
    filtersList: Array<src_ui_crud_api_pb.Filter.AsObject>,
  }
}

export class NewPageRequest extends jspb.Message {
  getPage(): src_ui_crud_api_pb.Page | undefined;
  setPage(value?: src_ui_crud_api_pb.Page): NewPageRequest;
  hasPage(): boolean;
  clearPage(): NewPageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewPageRequest): NewPageRequest.AsObject;
  static serializeBinaryToWriter(message: NewPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewPageRequest;
  static deserializeBinaryFromReader(message: NewPageRequest, reader: jspb.BinaryReader): NewPageRequest;
}

export namespace NewPageRequest {
  export type AsObject = {
    page?: src_ui_crud_api_pb.Page.AsObject,
  }
}

export class GetPageRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): GetPageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPageRequest): GetPageRequest.AsObject;
  static serializeBinaryToWriter(message: GetPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPageRequest;
  static deserializeBinaryFromReader(message: GetPageRequest, reader: jspb.BinaryReader): GetPageRequest;
}

export namespace GetPageRequest {
  export type AsObject = {
    uid: string,
  }
}

export class PutPageRequest extends jspb.Message {
  getPage(): src_ui_crud_api_pb.Page | undefined;
  setPage(value?: src_ui_crud_api_pb.Page): PutPageRequest;
  hasPage(): boolean;
  clearPage(): PutPageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutPageRequest): PutPageRequest.AsObject;
  static serializeBinaryToWriter(message: PutPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutPageRequest;
  static deserializeBinaryFromReader(message: PutPageRequest, reader: jspb.BinaryReader): PutPageRequest;
}

export namespace PutPageRequest {
  export type AsObject = {
    page?: src_ui_crud_api_pb.Page.AsObject,
  }
}

export class DelPageRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): DelPageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelPageRequest): DelPageRequest.AsObject;
  static serializeBinaryToWriter(message: DelPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelPageRequest;
  static deserializeBinaryFromReader(message: DelPageRequest, reader: jspb.BinaryReader): DelPageRequest;
}

export namespace DelPageRequest {
  export type AsObject = {
    uid: string,
  }
}

export class GetPagesRequest extends jspb.Message {
  getUserid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setUserid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetPagesRequest;
  hasUserid(): boolean;
  clearUserid(): GetPagesRequest;

  getTenantid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setTenantid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetPagesRequest;
  hasTenantid(): boolean;
  clearTenantid(): GetPagesRequest;

  getDomainid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setDomainid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetPagesRequest;
  hasDomainid(): boolean;
  clearDomainid(): GetPagesRequest;

  getLimit(): number;
  setLimit(value: number): GetPagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPagesRequest): GetPagesRequest.AsObject;
  static serializeBinaryToWriter(message: GetPagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPagesRequest;
  static deserializeBinaryFromReader(message: GetPagesRequest, reader: jspb.BinaryReader): GetPagesRequest;
}

export namespace GetPagesRequest {
  export type AsObject = {
    userid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    tenantid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    domainid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    limit: number,
  }
}

export class GetPagesResponse extends jspb.Message {
  getPagesList(): Array<src_ui_crud_api_pb.Page>;
  setPagesList(value: Array<src_ui_crud_api_pb.Page>): GetPagesResponse;
  clearPagesList(): GetPagesResponse;
  addPages(value?: src_ui_crud_api_pb.Page, index?: number): src_ui_crud_api_pb.Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPagesResponse): GetPagesResponse.AsObject;
  static serializeBinaryToWriter(message: GetPagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPagesResponse;
  static deserializeBinaryFromReader(message: GetPagesResponse, reader: jspb.BinaryReader): GetPagesResponse;
}

export namespace GetPagesResponse {
  export type AsObject = {
    pagesList: Array<src_ui_crud_api_pb.Page.AsObject>,
  }
}

export class NewViewRequest extends jspb.Message {
  getView(): src_ui_crud_api_pb.View | undefined;
  setView(value?: src_ui_crud_api_pb.View): NewViewRequest;
  hasView(): boolean;
  clearView(): NewViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewViewRequest): NewViewRequest.AsObject;
  static serializeBinaryToWriter(message: NewViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewViewRequest;
  static deserializeBinaryFromReader(message: NewViewRequest, reader: jspb.BinaryReader): NewViewRequest;
}

export namespace NewViewRequest {
  export type AsObject = {
    view?: src_ui_crud_api_pb.View.AsObject,
  }
}

export class GetViewRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): GetViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetViewRequest): GetViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetViewRequest;
  static deserializeBinaryFromReader(message: GetViewRequest, reader: jspb.BinaryReader): GetViewRequest;
}

export namespace GetViewRequest {
  export type AsObject = {
    uid: string,
  }
}

export class PutViewRequest extends jspb.Message {
  getView(): src_ui_crud_api_pb.View | undefined;
  setView(value?: src_ui_crud_api_pb.View): PutViewRequest;
  hasView(): boolean;
  clearView(): PutViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutViewRequest): PutViewRequest.AsObject;
  static serializeBinaryToWriter(message: PutViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutViewRequest;
  static deserializeBinaryFromReader(message: PutViewRequest, reader: jspb.BinaryReader): PutViewRequest;
}

export namespace PutViewRequest {
  export type AsObject = {
    view?: src_ui_crud_api_pb.View.AsObject,
  }
}

export class DelViewRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): DelViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelViewRequest): DelViewRequest.AsObject;
  static serializeBinaryToWriter(message: DelViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelViewRequest;
  static deserializeBinaryFromReader(message: DelViewRequest, reader: jspb.BinaryReader): DelViewRequest;
}

export namespace DelViewRequest {
  export type AsObject = {
    uid: string,
  }
}

export class GetViewsRequest extends jspb.Message {
  getUserid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setUserid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetViewsRequest;
  hasUserid(): boolean;
  clearUserid(): GetViewsRequest;

  getTenantid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setTenantid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetViewsRequest;
  hasTenantid(): boolean;
  clearTenantid(): GetViewsRequest;

  getDomainid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setDomainid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetViewsRequest;
  hasDomainid(): boolean;
  clearDomainid(): GetViewsRequest;

  getLimit(): number;
  setLimit(value: number): GetViewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetViewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetViewsRequest): GetViewsRequest.AsObject;
  static serializeBinaryToWriter(message: GetViewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetViewsRequest;
  static deserializeBinaryFromReader(message: GetViewsRequest, reader: jspb.BinaryReader): GetViewsRequest;
}

export namespace GetViewsRequest {
  export type AsObject = {
    userid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    tenantid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    domainid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    limit: number,
  }
}

export class GetViewsResponse extends jspb.Message {
  getViewsList(): Array<src_ui_crud_api_pb.View>;
  setViewsList(value: Array<src_ui_crud_api_pb.View>): GetViewsResponse;
  clearViewsList(): GetViewsResponse;
  addViews(value?: src_ui_crud_api_pb.View, index?: number): src_ui_crud_api_pb.View;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetViewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetViewsResponse): GetViewsResponse.AsObject;
  static serializeBinaryToWriter(message: GetViewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetViewsResponse;
  static deserializeBinaryFromReader(message: GetViewsResponse, reader: jspb.BinaryReader): GetViewsResponse;
}

export namespace GetViewsResponse {
  export type AsObject = {
    viewsList: Array<src_ui_crud_api_pb.View.AsObject>,
  }
}

export class NewPluginRequest extends jspb.Message {
  getPlugin(): src_ui_crud_api_pb.Plugin | undefined;
  setPlugin(value?: src_ui_crud_api_pb.Plugin): NewPluginRequest;
  hasPlugin(): boolean;
  clearPlugin(): NewPluginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewPluginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewPluginRequest): NewPluginRequest.AsObject;
  static serializeBinaryToWriter(message: NewPluginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewPluginRequest;
  static deserializeBinaryFromReader(message: NewPluginRequest, reader: jspb.BinaryReader): NewPluginRequest;
}

export namespace NewPluginRequest {
  export type AsObject = {
    plugin?: src_ui_crud_api_pb.Plugin.AsObject,
  }
}

export class GetPluginRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): GetPluginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPluginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPluginRequest): GetPluginRequest.AsObject;
  static serializeBinaryToWriter(message: GetPluginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPluginRequest;
  static deserializeBinaryFromReader(message: GetPluginRequest, reader: jspb.BinaryReader): GetPluginRequest;
}

export namespace GetPluginRequest {
  export type AsObject = {
    uid: string,
  }
}

export class PutPluginRequest extends jspb.Message {
  getPlugin(): src_ui_crud_api_pb.Plugin | undefined;
  setPlugin(value?: src_ui_crud_api_pb.Plugin): PutPluginRequest;
  hasPlugin(): boolean;
  clearPlugin(): PutPluginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutPluginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutPluginRequest): PutPluginRequest.AsObject;
  static serializeBinaryToWriter(message: PutPluginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutPluginRequest;
  static deserializeBinaryFromReader(message: PutPluginRequest, reader: jspb.BinaryReader): PutPluginRequest;
}

export namespace PutPluginRequest {
  export type AsObject = {
    plugin?: src_ui_crud_api_pb.Plugin.AsObject,
  }
}

export class DelPluginRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): DelPluginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelPluginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelPluginRequest): DelPluginRequest.AsObject;
  static serializeBinaryToWriter(message: DelPluginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelPluginRequest;
  static deserializeBinaryFromReader(message: DelPluginRequest, reader: jspb.BinaryReader): DelPluginRequest;
}

export namespace DelPluginRequest {
  export type AsObject = {
    uid: string,
  }
}

export class GetPluginsRequest extends jspb.Message {
  getUserid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setUserid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetPluginsRequest;
  hasUserid(): boolean;
  clearUserid(): GetPluginsRequest;

  getTenantid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setTenantid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetPluginsRequest;
  hasTenantid(): boolean;
  clearTenantid(): GetPluginsRequest;

  getDomainid(): src_platform_query_match_strategy_pb.MatchedStringValue | undefined;
  setDomainid(value?: src_platform_query_match_strategy_pb.MatchedStringValue): GetPluginsRequest;
  hasDomainid(): boolean;
  clearDomainid(): GetPluginsRequest;

  getLimit(): number;
  setLimit(value: number): GetPluginsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPluginsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPluginsRequest): GetPluginsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPluginsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPluginsRequest;
  static deserializeBinaryFromReader(message: GetPluginsRequest, reader: jspb.BinaryReader): GetPluginsRequest;
}

export namespace GetPluginsRequest {
  export type AsObject = {
    userid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    tenantid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    domainid?: src_platform_query_match_strategy_pb.MatchedStringValue.AsObject,
    limit: number,
  }
}

export class GetPluginsResponse extends jspb.Message {
  getPluginsList(): Array<src_ui_crud_api_pb.Plugin>;
  setPluginsList(value: Array<src_ui_crud_api_pb.Plugin>): GetPluginsResponse;
  clearPluginsList(): GetPluginsResponse;
  addPlugins(value?: src_ui_crud_api_pb.Plugin, index?: number): src_ui_crud_api_pb.Plugin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPluginsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPluginsResponse): GetPluginsResponse.AsObject;
  static serializeBinaryToWriter(message: GetPluginsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPluginsResponse;
  static deserializeBinaryFromReader(message: GetPluginsResponse, reader: jspb.BinaryReader): GetPluginsResponse;
}

export namespace GetPluginsResponse {
  export type AsObject = {
    pluginsList: Array<src_ui_crud_api_pb.Plugin.AsObject>,
  }
}

export class GetUIRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): GetUIRequest;

  getTenantid(): string;
  setTenantid(value: string): GetUIRequest;

  getDomainid(): string;
  setDomainid(value: string): GetUIRequest;

  getLimit(): number;
  setLimit(value: number): GetUIRequest;

  getResourceid(): string;
  setResourceid(value: string): GetUIRequest;

  getResource(): string;
  setResource(value: string): GetUIRequest;

  getLists(): boolean;
  setLists(value: boolean): GetUIRequest;

  getFilters(): boolean;
  setFilters(value: boolean): GetUIRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUIRequest): GetUIRequest.AsObject;
  static serializeBinaryToWriter(message: GetUIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUIRequest;
  static deserializeBinaryFromReader(message: GetUIRequest, reader: jspb.BinaryReader): GetUIRequest;
}

export namespace GetUIRequest {
  export type AsObject = {
    userid: string,
    tenantid: string,
    domainid: string,
    limit: number,
    resourceid: string,
    resource: string,
    lists: boolean,
    filters: boolean,
  }
}

export class GetUIResponse extends jspb.Message {
  getResource(): src_ui_crud_api_pb.Resource | undefined;
  setResource(value?: src_ui_crud_api_pb.Resource): GetUIResponse;
  hasResource(): boolean;
  clearResource(): GetUIResponse;

  getResourcesList(): Array<src_ui_crud_api_pb.Resource>;
  setResourcesList(value: Array<src_ui_crud_api_pb.Resource>): GetUIResponse;
  clearResourcesList(): GetUIResponse;
  addResources(value?: src_ui_crud_api_pb.Resource, index?: number): src_ui_crud_api_pb.Resource;

  getListsList(): Array<src_ui_crud_api_pb.List>;
  setListsList(value: Array<src_ui_crud_api_pb.List>): GetUIResponse;
  clearListsList(): GetUIResponse;
  addLists(value?: src_ui_crud_api_pb.List, index?: number): src_ui_crud_api_pb.List;

  getFiltersList(): Array<src_ui_crud_api_pb.Filter>;
  setFiltersList(value: Array<src_ui_crud_api_pb.Filter>): GetUIResponse;
  clearFiltersList(): GetUIResponse;
  addFilters(value?: src_ui_crud_api_pb.Filter, index?: number): src_ui_crud_api_pb.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUIResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUIResponse): GetUIResponse.AsObject;
  static serializeBinaryToWriter(message: GetUIResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUIResponse;
  static deserializeBinaryFromReader(message: GetUIResponse, reader: jspb.BinaryReader): GetUIResponse;
}

export namespace GetUIResponse {
  export type AsObject = {
    resource?: src_ui_crud_api_pb.Resource.AsObject,
    resourcesList: Array<src_ui_crud_api_pb.Resource.AsObject>,
    listsList: Array<src_ui_crud_api_pb.List.AsObject>,
    filtersList: Array<src_ui_crud_api_pb.Filter.AsObject>,
  }
}

