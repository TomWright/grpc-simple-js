
import {
    MatchedStringValue,
} from 'platform.v1.query'

import {
    Resource,
    List,
    Filter,
    Page,
    View,
    Plugin,
} from 'ui.crud.v1'


export type NewResourceRequest = {
    resource: Resource,
}

export type GetResourceRequest = {
    uid: string,
}

export type PutResourceRequest = {
    resource: Resource,
}

export type DelResourceRequest = {
    uid: string,
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

export type NewListRequest = {
    list: List,
}

export type GetListRequest = {
    uid: string,
}

export type PutListRequest = {
    list: List,
}

export type DelListRequest = {
    uid: string,
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

export type NewFilterRequest = {
    filter: Filter,
}

export type GetFilterRequest = {
    uid: string,
}

export type PutFilterRequest = {
    filter: Filter,
}

export type DelFilterRequest = {
    uid: string,
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

export type NewPageRequest = {
    page: Page,
}

export type GetPageRequest = {
    uid: string,
}

export type PutPageRequest = {
    page: Page,
}

export type DelPageRequest = {
    uid: string,
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

export type NewViewRequest = {
    view: View,
}

export type GetViewRequest = {
    uid: string,
}

export type PutViewRequest = {
    view: View,
}

export type DelViewRequest = {
    uid: string,
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

export type NewPluginRequest = {
    plugin: Plugin,
}

export type GetPluginRequest = {
    uid: string,
}

export type PutPluginRequest = {
    plugin: Plugin,
}

export type DelPluginRequest = {
    uid: string,
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

export type GetUIRequest = {
    userId: string,
    tenantId: string,
    domainId: string,
    limit: number,
    resourceId: string,
    resource: string,
    lists: boolean,
    filters: boolean,
}

export type GetUIResponse = {
    resource: Resource,
    resources: Array<Resource>,
    lists: Array<List>,
    filters: Array<Filter>,
}

