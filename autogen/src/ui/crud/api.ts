
import {
    MatchedStringValue,
} from 'platform.v1.query'

import {
    Method,
} from 'ui.crud.v1.CustomDataSourceRequest'

import {
    ColumnsEntry,
} from 'ui.crud.v1.List'

import {
    Datasource,
} from 'ui.crud.v1.Resource'


export type Resource = {
    uid: string,
    name: string,
    userId: string,
    tenantId: string,
    domainId: string,
    resource: string,
    datasource: Datasource,
    datasourceParamsCustom: DatasourceParamsCustom,
    datasourceParamsElasticsearch: DatasourceParamsElasticSearch,
    datasourceParamsGraphql: DatasourceParamsGraphQL,
    createdAt: string,
    createdBy: string,
    updatedAt: string,
    updatedBy: string,
    deletedAt: string,
    deletedBy: string,
}

export type CustomDataSourceRequest = {
    url: string,
    method: Method,
    body: string,
    headers: Array<string>,
}

export type DatasourceParamsCustom = {
    datasource: CustomDataSourceRequest,
}

export type DatasourceParamsElasticSearch = {
    index: string,
}

export type DatasourceParamsGraphQL = {
    schema: string,
    properties: string,
    depth: number,
}

export type List = {
    uid: string,
    name: string,
    resourceId: string,
    userId: string,
    tenantId: string,
    domainId: string,
    columns: Array<ColumnsEntry>,
    ordering: Array<string>,
    createdAt: string,
    createdBy: string,
    updatedAt: string,
    updatedBy: string,
    deletedAt: string,
    deletedBy: string,
}

export type Column = {
    title: string,
    template: string,
}

export type Filter = {
    uid: string,
    name: string,
    resourceId: string,
    userId: string,
    tenantId: string,
    domainId: string,
    query: string,
    sorting: Array<string>,
    createdAt: string,
    createdBy: string,
    updatedAt: string,
    updatedBy: string,
    deletedAt: string,
    deletedBy: string,
}

export type Page = {
    uid: string,
    name: string,
    userId: string,
    tenantId: string,
    domainId: string,
    viewId: string,
    urls: Array<string>,
    createdAt: string,
    createdBy: string,
    updatedAt: string,
    updatedBy: string,
    deletedAt: string,
    deletedBy: string,
}

export type View = {
    uid: string,
    name: string,
    userId: string,
    tenantId: string,
    domainId: string,
    template: string,
    plugins: Array<PluginInstance>,
    createdAt: string,
    createdBy: string,
    updatedAt: string,
    updatedBy: string,
    deletedAt: string,
    deletedBy: string,
}

export type PluginInstance = {
    uid: string,
    dependsOn: Array<string>,
    pluginId: string,
    data: string,
}

export type Plugin = {
    uid: string,
    name: string,
    userId: string,
    tenantId: string,
    domainId: string,
    template: string,
    createdAt: string,
    createdBy: string,
    updatedAt: string,
    updatedBy: string,
    deletedAt: string,
    deletedBy: string,
}

export type GetListsRequest = {
    resourceId: MatchedStringValue,
    userId: MatchedStringValue,
    tenantId: MatchedStringValue,
    domainId: MatchedStringValue,
    limit: number,
}

export type GetListsResponse = {
    lists: Array<List>,
}

export type GetResourcesRequest = {
    userId: MatchedStringValue,
    tenantId: MatchedStringValue,
    domainId: MatchedStringValue,
    resource: string,
    limit: number,
}

export type GetResourcesResponse = {
    resources: Array<Resource>,
}

export type GetFiltersRequest = {
    resourceId: MatchedStringValue,
    userId: MatchedStringValue,
    tenantId: MatchedStringValue,
    domainId: MatchedStringValue,
    limit: number,
}

export type GetFiltersResponse = {
    filters: Array<Filter>,
}

export type GetPagesRequest = {
    userId: MatchedStringValue,
    tenantId: MatchedStringValue,
    domainId: MatchedStringValue,
    limit: number,
}

export type GetPagesResponse = {
    pages: Array<Page>,
}

export type GetViewsRequest = {
    userId: MatchedStringValue,
    tenantId: MatchedStringValue,
    domainId: MatchedStringValue,
    limit: number,
}

export type GetViewsResponse = {
    views: Array<View>,
}

export type GetPluginsRequest = {
    userId: MatchedStringValue,
    tenantId: MatchedStringValue,
    domainId: MatchedStringValue,
    limit: number,
}

export type GetPluginsResponse = {
    plugins: Array<Plugin>,
}

