import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as src_platform_query_match_strategy_pb from '../../platform/query/match_strategy_pb';


export class Resource extends jspb.Message {
  getUid(): string;
  setUid(value: string): Resource;

  getName(): string;
  setName(value: string): Resource;

  getUserid(): string;
  setUserid(value: string): Resource;

  getTenantid(): string;
  setTenantid(value: string): Resource;

  getDomainid(): string;
  setDomainid(value: string): Resource;

  getResource(): string;
  setResource(value: string): Resource;

  getDatasource(): Resource.Datasource;
  setDatasource(value: Resource.Datasource): Resource;

  getDatasourceparamscustom(): DatasourceParamsCustom | undefined;
  setDatasourceparamscustom(value?: DatasourceParamsCustom): Resource;
  hasDatasourceparamscustom(): boolean;
  clearDatasourceparamscustom(): Resource;

  getDatasourceparamselasticsearch(): DatasourceParamsElasticSearch | undefined;
  setDatasourceparamselasticsearch(value?: DatasourceParamsElasticSearch): Resource;
  hasDatasourceparamselasticsearch(): boolean;
  clearDatasourceparamselasticsearch(): Resource;

  getDatasourceparamsgraphql(): DatasourceParamsGraphQL | undefined;
  setDatasourceparamsgraphql(value?: DatasourceParamsGraphQL): Resource;
  hasDatasourceparamsgraphql(): boolean;
  clearDatasourceparamsgraphql(): Resource;

  getCreatedat(): string;
  setCreatedat(value: string): Resource;

  getCreatedby(): string;
  setCreatedby(value: string): Resource;

  getUpdatedat(): string;
  setUpdatedat(value: string): Resource;

  getUpdatedby(): string;
  setUpdatedby(value: string): Resource;

  getDeletedat(): string;
  setDeletedat(value: string): Resource;

  getDeletedby(): string;
  setDeletedby(value: string): Resource;

  getDatasourceparamsCase(): Resource.DatasourceparamsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    uid: string,
    name: string,
    userid: string,
    tenantid: string,
    domainid: string,
    resource: string,
    datasource: Resource.Datasource,
    datasourceparamscustom?: DatasourceParamsCustom.AsObject,
    datasourceparamselasticsearch?: DatasourceParamsElasticSearch.AsObject,
    datasourceparamsgraphql?: DatasourceParamsGraphQL.AsObject,
    createdat: string,
    createdby: string,
    updatedat: string,
    updatedby: string,
    deletedat: string,
    deletedby: string,
  }

  export enum Datasource { 
    UNKNOWN_RESOURCE_TYPE = 0,
    ELASTICSEARCH = 1,
    GRAPHQL = 2,
    CUSTOM = 3,
  }

  export enum DatasourceparamsCase { 
    DATASOURCEPARAMS_NOT_SET = 0,
    DATASOURCEPARAMSCUSTOM = 8,
    DATASOURCEPARAMSELASTICSEARCH = 9,
    DATASOURCEPARAMSGRAPHQL = 10,
  }
}

export class CustomDataSourceRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): CustomDataSourceRequest;

  getMethod(): CustomDataSourceRequest.Method;
  setMethod(value: CustomDataSourceRequest.Method): CustomDataSourceRequest;

  getBody(): string;
  setBody(value: string): CustomDataSourceRequest;

  getHeadersList(): Array<string>;
  setHeadersList(value: Array<string>): CustomDataSourceRequest;
  clearHeadersList(): CustomDataSourceRequest;
  addHeaders(value: string, index?: number): CustomDataSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomDataSourceRequest): CustomDataSourceRequest.AsObject;
  static serializeBinaryToWriter(message: CustomDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomDataSourceRequest;
  static deserializeBinaryFromReader(message: CustomDataSourceRequest, reader: jspb.BinaryReader): CustomDataSourceRequest;
}

export namespace CustomDataSourceRequest {
  export type AsObject = {
    url: string,
    method: CustomDataSourceRequest.Method,
    body: string,
    headersList: Array<string>,
  }

  export enum Method { 
    UNKNOWN_CUSTOM_DATASOURCE_REQUEST_METHOD = 0,
    GET = 1,
    POST = 2,
    PUT = 3,
    PATCH = 4,
  }
}

export class DatasourceParamsCustom extends jspb.Message {
  getDatasource(): CustomDataSourceRequest | undefined;
  setDatasource(value?: CustomDataSourceRequest): DatasourceParamsCustom;
  hasDatasource(): boolean;
  clearDatasource(): DatasourceParamsCustom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasourceParamsCustom.AsObject;
  static toObject(includeInstance: boolean, msg: DatasourceParamsCustom): DatasourceParamsCustom.AsObject;
  static serializeBinaryToWriter(message: DatasourceParamsCustom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasourceParamsCustom;
  static deserializeBinaryFromReader(message: DatasourceParamsCustom, reader: jspb.BinaryReader): DatasourceParamsCustom;
}

export namespace DatasourceParamsCustom {
  export type AsObject = {
    datasource?: CustomDataSourceRequest.AsObject,
  }
}

export class DatasourceParamsElasticSearch extends jspb.Message {
  getIndex(): string;
  setIndex(value: string): DatasourceParamsElasticSearch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasourceParamsElasticSearch.AsObject;
  static toObject(includeInstance: boolean, msg: DatasourceParamsElasticSearch): DatasourceParamsElasticSearch.AsObject;
  static serializeBinaryToWriter(message: DatasourceParamsElasticSearch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasourceParamsElasticSearch;
  static deserializeBinaryFromReader(message: DatasourceParamsElasticSearch, reader: jspb.BinaryReader): DatasourceParamsElasticSearch;
}

export namespace DatasourceParamsElasticSearch {
  export type AsObject = {
    index: string,
  }
}

export class DatasourceParamsGraphQL extends jspb.Message {
  getSchema(): string;
  setSchema(value: string): DatasourceParamsGraphQL;

  getProperties(): string;
  setProperties(value: string): DatasourceParamsGraphQL;

  getDepth(): number;
  setDepth(value: number): DatasourceParamsGraphQL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasourceParamsGraphQL.AsObject;
  static toObject(includeInstance: boolean, msg: DatasourceParamsGraphQL): DatasourceParamsGraphQL.AsObject;
  static serializeBinaryToWriter(message: DatasourceParamsGraphQL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasourceParamsGraphQL;
  static deserializeBinaryFromReader(message: DatasourceParamsGraphQL, reader: jspb.BinaryReader): DatasourceParamsGraphQL;
}

export namespace DatasourceParamsGraphQL {
  export type AsObject = {
    schema: string,
    properties: string,
    depth: number,
  }
}

export class List extends jspb.Message {
  getUid(): string;
  setUid(value: string): List;

  getName(): string;
  setName(value: string): List;

  getResourceid(): string;
  setResourceid(value: string): List;

  getUserid(): string;
  setUserid(value: string): List;

  getTenantid(): string;
  setTenantid(value: string): List;

  getDomainid(): string;
  setDomainid(value: string): List;

  getColumnsMap(): jspb.Map<string, Column>;
  clearColumnsMap(): List;

  getOrderingList(): Array<string>;
  setOrderingList(value: Array<string>): List;
  clearOrderingList(): List;
  addOrdering(value: string, index?: number): List;

  getCreatedat(): string;
  setCreatedat(value: string): List;

  getCreatedby(): string;
  setCreatedby(value: string): List;

  getUpdatedat(): string;
  setUpdatedat(value: string): List;

  getUpdatedby(): string;
  setUpdatedby(value: string): List;

  getDeletedat(): string;
  setDeletedat(value: string): List;

  getDeletedby(): string;
  setDeletedby(value: string): List;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List.AsObject;
  static toObject(includeInstance: boolean, msg: List): List.AsObject;
  static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List;
  static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
  export type AsObject = {
    uid: string,
    name: string,
    resourceid: string,
    userid: string,
    tenantid: string,
    domainid: string,
    columnsMap: Array<[string, Column.AsObject]>,
    orderingList: Array<string>,
    createdat: string,
    createdby: string,
    updatedat: string,
    updatedby: string,
    deletedat: string,
    deletedby: string,
  }
}

export class Column extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Column;

  getTemplate(): string;
  setTemplate(value: string): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    title: string,
    template: string,
  }
}

export class Filter extends jspb.Message {
  getUid(): string;
  setUid(value: string): Filter;

  getName(): string;
  setName(value: string): Filter;

  getResourceid(): string;
  setResourceid(value: string): Filter;

  getUserid(): string;
  setUserid(value: string): Filter;

  getTenantid(): string;
  setTenantid(value: string): Filter;

  getDomainid(): string;
  setDomainid(value: string): Filter;

  getQuery(): string;
  setQuery(value: string): Filter;

  getSortingList(): Array<string>;
  setSortingList(value: Array<string>): Filter;
  clearSortingList(): Filter;
  addSorting(value: string, index?: number): Filter;

  getCreatedat(): string;
  setCreatedat(value: string): Filter;

  getCreatedby(): string;
  setCreatedby(value: string): Filter;

  getUpdatedat(): string;
  setUpdatedat(value: string): Filter;

  getUpdatedby(): string;
  setUpdatedby(value: string): Filter;

  getDeletedat(): string;
  setDeletedat(value: string): Filter;

  getDeletedby(): string;
  setDeletedby(value: string): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    uid: string,
    name: string,
    resourceid: string,
    userid: string,
    tenantid: string,
    domainid: string,
    query: string,
    sortingList: Array<string>,
    createdat: string,
    createdby: string,
    updatedat: string,
    updatedby: string,
    deletedat: string,
    deletedby: string,
  }
}

export class Page extends jspb.Message {
  getUid(): string;
  setUid(value: string): Page;

  getName(): string;
  setName(value: string): Page;

  getUserid(): string;
  setUserid(value: string): Page;

  getTenantid(): string;
  setTenantid(value: string): Page;

  getDomainid(): string;
  setDomainid(value: string): Page;

  getViewid(): string;
  setViewid(value: string): Page;

  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): Page;
  clearUrlsList(): Page;
  addUrls(value: string, index?: number): Page;

  getCreatedat(): string;
  setCreatedat(value: string): Page;

  getCreatedby(): string;
  setCreatedby(value: string): Page;

  getUpdatedat(): string;
  setUpdatedat(value: string): Page;

  getUpdatedby(): string;
  setUpdatedby(value: string): Page;

  getDeletedat(): string;
  setDeletedat(value: string): Page;

  getDeletedby(): string;
  setDeletedby(value: string): Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    uid: string,
    name: string,
    userid: string,
    tenantid: string,
    domainid: string,
    viewid: string,
    urlsList: Array<string>,
    createdat: string,
    createdby: string,
    updatedat: string,
    updatedby: string,
    deletedat: string,
    deletedby: string,
  }
}

export class View extends jspb.Message {
  getUid(): string;
  setUid(value: string): View;

  getName(): string;
  setName(value: string): View;

  getUserid(): string;
  setUserid(value: string): View;

  getTenantid(): string;
  setTenantid(value: string): View;

  getDomainid(): string;
  setDomainid(value: string): View;

  getTemplate(): string;
  setTemplate(value: string): View;

  getPluginsList(): Array<PluginInstance>;
  setPluginsList(value: Array<PluginInstance>): View;
  clearPluginsList(): View;
  addPlugins(value?: PluginInstance, index?: number): PluginInstance;

  getCreatedat(): string;
  setCreatedat(value: string): View;

  getCreatedby(): string;
  setCreatedby(value: string): View;

  getUpdatedat(): string;
  setUpdatedat(value: string): View;

  getUpdatedby(): string;
  setUpdatedby(value: string): View;

  getDeletedat(): string;
  setDeletedat(value: string): View;

  getDeletedby(): string;
  setDeletedby(value: string): View;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): View.AsObject;
  static toObject(includeInstance: boolean, msg: View): View.AsObject;
  static serializeBinaryToWriter(message: View, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): View;
  static deserializeBinaryFromReader(message: View, reader: jspb.BinaryReader): View;
}

export namespace View {
  export type AsObject = {
    uid: string,
    name: string,
    userid: string,
    tenantid: string,
    domainid: string,
    template: string,
    pluginsList: Array<PluginInstance.AsObject>,
    createdat: string,
    createdby: string,
    updatedat: string,
    updatedby: string,
    deletedat: string,
    deletedby: string,
  }
}

export class PluginInstance extends jspb.Message {
  getUid(): string;
  setUid(value: string): PluginInstance;

  getDependsonList(): Array<string>;
  setDependsonList(value: Array<string>): PluginInstance;
  clearDependsonList(): PluginInstance;
  addDependson(value: string, index?: number): PluginInstance;

  getPluginid(): string;
  setPluginid(value: string): PluginInstance;

  getData(): string;
  setData(value: string): PluginInstance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginInstance.AsObject;
  static toObject(includeInstance: boolean, msg: PluginInstance): PluginInstance.AsObject;
  static serializeBinaryToWriter(message: PluginInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginInstance;
  static deserializeBinaryFromReader(message: PluginInstance, reader: jspb.BinaryReader): PluginInstance;
}

export namespace PluginInstance {
  export type AsObject = {
    uid: string,
    dependsonList: Array<string>,
    pluginid: string,
    data: string,
  }
}

export class Plugin extends jspb.Message {
  getUid(): string;
  setUid(value: string): Plugin;

  getName(): string;
  setName(value: string): Plugin;

  getUserid(): string;
  setUserid(value: string): Plugin;

  getTenantid(): string;
  setTenantid(value: string): Plugin;

  getDomainid(): string;
  setDomainid(value: string): Plugin;

  getTemplate(): string;
  setTemplate(value: string): Plugin;

  getCreatedat(): string;
  setCreatedat(value: string): Plugin;

  getCreatedby(): string;
  setCreatedby(value: string): Plugin;

  getUpdatedat(): string;
  setUpdatedat(value: string): Plugin;

  getUpdatedby(): string;
  setUpdatedby(value: string): Plugin;

  getDeletedat(): string;
  setDeletedat(value: string): Plugin;

  getDeletedby(): string;
  setDeletedby(value: string): Plugin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plugin.AsObject;
  static toObject(includeInstance: boolean, msg: Plugin): Plugin.AsObject;
  static serializeBinaryToWriter(message: Plugin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plugin;
  static deserializeBinaryFromReader(message: Plugin, reader: jspb.BinaryReader): Plugin;
}

export namespace Plugin {
  export type AsObject = {
    uid: string,
    name: string,
    userid: string,
    tenantid: string,
    domainid: string,
    template: string,
    createdat: string,
    createdby: string,
    updatedat: string,
    updatedby: string,
    deletedat: string,
    deletedby: string,
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
  getListsList(): Array<List>;
  setListsList(value: Array<List>): GetListsResponse;
  clearListsList(): GetListsResponse;
  addLists(value?: List, index?: number): List;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetListsResponse): GetListsResponse.AsObject;
  static serializeBinaryToWriter(message: GetListsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListsResponse;
  static deserializeBinaryFromReader(message: GetListsResponse, reader: jspb.BinaryReader): GetListsResponse;
}

export namespace GetListsResponse {
  export type AsObject = {
    listsList: Array<List.AsObject>,
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
  getResourcesList(): Array<Resource>;
  setResourcesList(value: Array<Resource>): GetResourcesResponse;
  clearResourcesList(): GetResourcesResponse;
  addResources(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourcesResponse): GetResourcesResponse.AsObject;
  static serializeBinaryToWriter(message: GetResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourcesResponse;
  static deserializeBinaryFromReader(message: GetResourcesResponse, reader: jspb.BinaryReader): GetResourcesResponse;
}

export namespace GetResourcesResponse {
  export type AsObject = {
    resourcesList: Array<Resource.AsObject>,
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
  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): GetFiltersResponse;
  clearFiltersList(): GetFiltersResponse;
  addFilters(value?: Filter, index?: number): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFiltersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFiltersResponse): GetFiltersResponse.AsObject;
  static serializeBinaryToWriter(message: GetFiltersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFiltersResponse;
  static deserializeBinaryFromReader(message: GetFiltersResponse, reader: jspb.BinaryReader): GetFiltersResponse;
}

export namespace GetFiltersResponse {
  export type AsObject = {
    filtersList: Array<Filter.AsObject>,
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
  getPagesList(): Array<Page>;
  setPagesList(value: Array<Page>): GetPagesResponse;
  clearPagesList(): GetPagesResponse;
  addPages(value?: Page, index?: number): Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPagesResponse): GetPagesResponse.AsObject;
  static serializeBinaryToWriter(message: GetPagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPagesResponse;
  static deserializeBinaryFromReader(message: GetPagesResponse, reader: jspb.BinaryReader): GetPagesResponse;
}

export namespace GetPagesResponse {
  export type AsObject = {
    pagesList: Array<Page.AsObject>,
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
  getViewsList(): Array<View>;
  setViewsList(value: Array<View>): GetViewsResponse;
  clearViewsList(): GetViewsResponse;
  addViews(value?: View, index?: number): View;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetViewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetViewsResponse): GetViewsResponse.AsObject;
  static serializeBinaryToWriter(message: GetViewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetViewsResponse;
  static deserializeBinaryFromReader(message: GetViewsResponse, reader: jspb.BinaryReader): GetViewsResponse;
}

export namespace GetViewsResponse {
  export type AsObject = {
    viewsList: Array<View.AsObject>,
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
  getPluginsList(): Array<Plugin>;
  setPluginsList(value: Array<Plugin>): GetPluginsResponse;
  clearPluginsList(): GetPluginsResponse;
  addPlugins(value?: Plugin, index?: number): Plugin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPluginsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPluginsResponse): GetPluginsResponse.AsObject;
  static serializeBinaryToWriter(message: GetPluginsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPluginsResponse;
  static deserializeBinaryFromReader(message: GetPluginsResponse, reader: jspb.BinaryReader): GetPluginsResponse;
}

export namespace GetPluginsResponse {
  export type AsObject = {
    pluginsList: Array<Plugin.AsObject>,
  }
}

