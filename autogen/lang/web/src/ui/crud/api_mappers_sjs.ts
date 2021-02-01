// File auto-generated by protoc-gen-simple-ts
import * as api_pb from './api_pb'
import * as ui_crud_v1_types from './api_types_sjs'
import * as ui_crud_v1_mappers from './api_mappers_sjs'
import * as platform_v1_query_types from '../../platform/query/match_strategy_types_sjs'
import * as platform_v1_query_mappers from '../../platform/query/match_strategy_mappers_sjs'


export const mapResourceToGrpcWeb = (input?: ui_crud_v1_types.Resource): api_pb.Resource | undefined => {
	if (!input) return
	const result = new api_pb.Resource()
	if (input?.uid !== undefined) result.setUid(input.uid)
	if (input?.name !== undefined) result.setName(input.name)
	if (input?.userId !== undefined) result.setUserid(input.userId)
	if (input?.tenantId !== undefined) result.setTenantid(input.tenantId)
	if (input?.domainId !== undefined) result.setDomainid(input.domainId)
	if (input?.resource !== undefined) result.setResource(input.resource)
	const tmpDatasource = mapResource_DatasourceToGrpcWeb(input?.datasource);
    if (tmpDatasource !== undefined) result.setDatasource(tmpDatasource)
	const tmpDatasourceParamsCustom = mapDatasourceParamsCustomToGrpcWeb(input?.datasourceParamsCustom);
    if (tmpDatasourceParamsCustom !== undefined) result.setDatasourceparamscustom(tmpDatasourceParamsCustom)
	const tmpDatasourceParamsElasticsearch = mapDatasourceParamsElasticSearchToGrpcWeb(input?.datasourceParamsElasticsearch);
    if (tmpDatasourceParamsElasticsearch !== undefined) result.setDatasourceparamselasticsearch(tmpDatasourceParamsElasticsearch)
	const tmpDatasourceParamsGraphql = mapDatasourceParamsGraphQLToGrpcWeb(input?.datasourceParamsGraphql);
    if (tmpDatasourceParamsGraphql !== undefined) result.setDatasourceparamsgraphql(tmpDatasourceParamsGraphql)
	if (input?.createdAt !== undefined) result.setCreatedat(input.createdAt)
	if (input?.createdBy !== undefined) result.setCreatedby(input.createdBy)
	if (input?.updatedAt !== undefined) result.setUpdatedat(input.updatedAt)
	if (input?.updatedBy !== undefined) result.setUpdatedby(input.updatedBy)
	if (input?.deletedAt !== undefined) result.setDeletedat(input.deletedAt)
	if (input?.deletedBy !== undefined) result.setDeletedby(input.deletedBy)
	return result
}

export const mapResourceFromGrpcWeb = (input?: api_pb.Resource): ui_crud_v1_types.Resource | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.Resource = {
        uid: input.getUid(),
        name: input.getName(),
        userId: input.getUserid(),
        tenantId: input.getTenantid(),
        domainId: input.getDomainid(),
        resource: input.getResource(),
        datasource: mapResource_DatasourceFromGrpcWeb(input.getDatasource()),
        datasourceParamsCustom: mapDatasourceParamsCustomFromGrpcWeb(input.getDatasourceparamscustom()),
        datasourceParamsElasticsearch: mapDatasourceParamsElasticSearchFromGrpcWeb(input.getDatasourceparamselasticsearch()),
        datasourceParamsGraphql: mapDatasourceParamsGraphQLFromGrpcWeb(input.getDatasourceparamsgraphql()),
        createdAt: input.getCreatedat(),
        createdBy: input.getCreatedby(),
        updatedAt: input.getUpdatedat(),
        updatedBy: input.getUpdatedby(),
        deletedAt: input.getDeletedat(),
        deletedBy: input.getDeletedby(),
	}
	return result
}

export const mapResource_DatasourceToGrpcWeb = (input?: ui_crud_v1_types.Resource_Datasource): api_pb.Resource.Datasource | undefined => {
	if (input === undefined) return
	switch (input) {
		case ui_crud_v1_types.Resource_Datasource.UNKNOWN_RESOURCE_TYPE: return api_pb.Resource.Datasource.UNKNOWN_RESOURCE_TYPE
		case ui_crud_v1_types.Resource_Datasource.ELASTICSEARCH: return api_pb.Resource.Datasource.ELASTICSEARCH
		case ui_crud_v1_types.Resource_Datasource.GRAPHQL: return api_pb.Resource.Datasource.GRAPHQL
		case ui_crud_v1_types.Resource_Datasource.CUSTOM: return api_pb.Resource.Datasource.CUSTOM
	}
}

export const mapResource_DatasourceFromGrpcWeb = (input?: api_pb.Resource.Datasource): ui_crud_v1_types.Resource_Datasource | undefined => {
	if (input === undefined) return
	switch (input) {
		case api_pb.Resource.Datasource.UNKNOWN_RESOURCE_TYPE: return ui_crud_v1_types.Resource_Datasource.UNKNOWN_RESOURCE_TYPE
		case api_pb.Resource.Datasource.ELASTICSEARCH: return ui_crud_v1_types.Resource_Datasource.ELASTICSEARCH
		case api_pb.Resource.Datasource.GRAPHQL: return ui_crud_v1_types.Resource_Datasource.GRAPHQL
		case api_pb.Resource.Datasource.CUSTOM: return ui_crud_v1_types.Resource_Datasource.CUSTOM
	}
}

export const mapCustomDataSourceRequestToGrpcWeb = (input?: ui_crud_v1_types.CustomDataSourceRequest): api_pb.CustomDataSourceRequest | undefined => {
	if (!input) return
	const result = new api_pb.CustomDataSourceRequest()
	if (input?.url !== undefined) result.setUrl(input.url)
	const tmpMethod = mapCustomDataSourceRequest_MethodToGrpcWeb(input?.method);
    if (tmpMethod !== undefined) result.setMethod(tmpMethod)
	if (input?.body !== undefined) result.setBody(input.body)
	if (input?.headers !== undefined) result.setHeadersList(input.headers)
	return result
}

export const mapCustomDataSourceRequestFromGrpcWeb = (input?: api_pb.CustomDataSourceRequest): ui_crud_v1_types.CustomDataSourceRequest | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.CustomDataSourceRequest = {
        url: input.getUrl(),
        method: mapCustomDataSourceRequest_MethodFromGrpcWeb(input.getMethod()),
        body: input.getBody(),
        headers: input.getHeadersList(),
	}
	return result
}

export const mapCustomDataSourceRequest_MethodToGrpcWeb = (input?: ui_crud_v1_types.CustomDataSourceRequest_Method): api_pb.CustomDataSourceRequest.Method | undefined => {
	if (input === undefined) return
	switch (input) {
		case ui_crud_v1_types.CustomDataSourceRequest_Method.UNKNOWN_CUSTOM_DATASOURCE_REQUEST_METHOD: return api_pb.CustomDataSourceRequest.Method.UNKNOWN_CUSTOM_DATASOURCE_REQUEST_METHOD
		case ui_crud_v1_types.CustomDataSourceRequest_Method.GET: return api_pb.CustomDataSourceRequest.Method.GET
		case ui_crud_v1_types.CustomDataSourceRequest_Method.POST: return api_pb.CustomDataSourceRequest.Method.POST
		case ui_crud_v1_types.CustomDataSourceRequest_Method.PUT: return api_pb.CustomDataSourceRequest.Method.PUT
		case ui_crud_v1_types.CustomDataSourceRequest_Method.PATCH: return api_pb.CustomDataSourceRequest.Method.PATCH
	}
}

export const mapCustomDataSourceRequest_MethodFromGrpcWeb = (input?: api_pb.CustomDataSourceRequest.Method): ui_crud_v1_types.CustomDataSourceRequest_Method | undefined => {
	if (input === undefined) return
	switch (input) {
		case api_pb.CustomDataSourceRequest.Method.UNKNOWN_CUSTOM_DATASOURCE_REQUEST_METHOD: return ui_crud_v1_types.CustomDataSourceRequest_Method.UNKNOWN_CUSTOM_DATASOURCE_REQUEST_METHOD
		case api_pb.CustomDataSourceRequest.Method.GET: return ui_crud_v1_types.CustomDataSourceRequest_Method.GET
		case api_pb.CustomDataSourceRequest.Method.POST: return ui_crud_v1_types.CustomDataSourceRequest_Method.POST
		case api_pb.CustomDataSourceRequest.Method.PUT: return ui_crud_v1_types.CustomDataSourceRequest_Method.PUT
		case api_pb.CustomDataSourceRequest.Method.PATCH: return ui_crud_v1_types.CustomDataSourceRequest_Method.PATCH
	}
}

export const mapDatasourceParamsCustomToGrpcWeb = (input?: ui_crud_v1_types.DatasourceParamsCustom): api_pb.DatasourceParamsCustom | undefined => {
	if (!input) return
	const result = new api_pb.DatasourceParamsCustom()
	const tmpDatasource = mapCustomDataSourceRequestToGrpcWeb(input?.datasource);
    if (tmpDatasource !== undefined) result.setDatasource(tmpDatasource)
	return result
}

export const mapDatasourceParamsCustomFromGrpcWeb = (input?: api_pb.DatasourceParamsCustom): ui_crud_v1_types.DatasourceParamsCustom | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.DatasourceParamsCustom = {
        datasource: mapCustomDataSourceRequestFromGrpcWeb(input.getDatasource()),
	}
	return result
}

export const mapDatasourceParamsElasticSearchToGrpcWeb = (input?: ui_crud_v1_types.DatasourceParamsElasticSearch): api_pb.DatasourceParamsElasticSearch | undefined => {
	if (!input) return
	const result = new api_pb.DatasourceParamsElasticSearch()
	if (input?.index !== undefined) result.setIndex(input.index)
	return result
}

export const mapDatasourceParamsElasticSearchFromGrpcWeb = (input?: api_pb.DatasourceParamsElasticSearch): ui_crud_v1_types.DatasourceParamsElasticSearch | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.DatasourceParamsElasticSearch = {
        index: input.getIndex(),
	}
	return result
}

export const mapDatasourceParamsGraphQLToGrpcWeb = (input?: ui_crud_v1_types.DatasourceParamsGraphQL): api_pb.DatasourceParamsGraphQL | undefined => {
	if (!input) return
	const result = new api_pb.DatasourceParamsGraphQL()
	if (input?.schema !== undefined) result.setSchema(input.schema)
	if (input?.properties !== undefined) result.setProperties(input.properties)
	if (input?.depth !== undefined) result.setDepth(input.depth)
	if (input?.exclusions !== undefined) result.setExclusionsList(input.exclusions)
	return result
}

export const mapDatasourceParamsGraphQLFromGrpcWeb = (input?: api_pb.DatasourceParamsGraphQL): ui_crud_v1_types.DatasourceParamsGraphQL | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.DatasourceParamsGraphQL = {
        schema: input.getSchema(),
        properties: input.getProperties(),
        depth: input.getDepth(),
        exclusions: input.getExclusionsList(),
	}
	return result
}

export const mapViewOverrideToGrpcWeb = (input?: ui_crud_v1_types.ViewOverride): api_pb.ViewOverride | undefined => {
	if (!input) return
	const result = new api_pb.ViewOverride()
	if (input?.uid !== undefined) result.setUid(input.uid)
	if (input?.userId !== undefined) result.setUserid(input.userId)
	if (input?.domainId !== undefined) result.setDomainid(input.domainId)
	if (input?.tenantId !== undefined) result.setTenantid(input.tenantId)
	if (input?.viewId !== undefined) result.setViewid(input.viewId)
	if (input?.data !== undefined) result.setData(input.data)
	if (input?.name !== undefined) result.setName(input.name)
	if (input?.createdAt !== undefined) result.setCreatedat(input.createdAt)
	if (input?.createdBy !== undefined) result.setCreatedby(input.createdBy)
	if (input?.updatedAt !== undefined) result.setUpdatedat(input.updatedAt)
	if (input?.updatedBy !== undefined) result.setUpdatedby(input.updatedBy)
	if (input?.deletedAt !== undefined) result.setDeletedat(input.deletedAt)
	if (input?.deletedBy !== undefined) result.setDeletedby(input.deletedBy)
	return result
}

export const mapViewOverrideFromGrpcWeb = (input?: api_pb.ViewOverride): ui_crud_v1_types.ViewOverride | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.ViewOverride = {
        uid: input.getUid(),
        userId: input.getUserid(),
        domainId: input.getDomainid(),
        tenantId: input.getTenantid(),
        viewId: input.getViewid(),
        data: input.getData(),
        name: input.getName(),
        createdAt: input.getCreatedat(),
        createdBy: input.getCreatedby(),
        updatedAt: input.getUpdatedat(),
        updatedBy: input.getUpdatedby(),
        deletedAt: input.getDeletedat(),
        deletedBy: input.getDeletedby(),
	}
	return result
}

export const mapListToGrpcWeb = (input?: ui_crud_v1_types.List): api_pb.List | undefined => {
	if (!input) return
	const result = new api_pb.List()
	if (input?.uid !== undefined) result.setUid(input.uid)
	if (input?.name !== undefined) result.setName(input.name)
	if (input?.resourceId !== undefined) result.setResourceid(input.resourceId)
	if (input?.userId !== undefined) result.setUserid(input.userId)
	if (input?.tenantId !== undefined) result.setTenantid(input.tenantId)
	if (input?.domainId !== undefined) result.setDomainid(input.domainId)
	if (input?.columns !== undefined) input.columns.forEach(x => { result.getColumnsMap().set(x.key, mapColumnToGrpcWeb(x.value)) })
	if (input?.ordering !== undefined) result.setOrderingList(input.ordering)
	if (input?.createdAt !== undefined) result.setCreatedat(input.createdAt)
	if (input?.createdBy !== undefined) result.setCreatedby(input.createdBy)
	if (input?.updatedAt !== undefined) result.setUpdatedat(input.updatedAt)
	if (input?.updatedBy !== undefined) result.setUpdatedby(input.updatedBy)
	if (input?.deletedAt !== undefined) result.setDeletedat(input.deletedAt)
	if (input?.deletedBy !== undefined) result.setDeletedby(input.deletedBy)
	return result
}

export const mapListFromGrpcWeb = (input?: api_pb.List): ui_crud_v1_types.List | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.List = {
        uid: input.getUid(),
        name: input.getName(),
        resourceId: input.getResourceid(),
        userId: input.getUserid(),
        tenantId: input.getTenantid(),
        domainId: input.getDomainid(),
        columns: [],
        ordering: input.getOrderingList(),
        createdAt: input.getCreatedat(),
        createdBy: input.getCreatedby(),
        updatedAt: input.getUpdatedat(),
        updatedBy: input.getUpdatedby(),
        deletedAt: input.getDeletedat(),
        deletedBy: input.getDeletedby(),
	}
    input.getColumnsMap().forEach((_:any, k: string) => { result.columns!.push({key: k, value: mapColumnFromGrpcWeb(input.getColumnsMap().get(k))}) })

	return result
}

export const mapColumnToGrpcWeb = (input?: ui_crud_v1_types.Column): api_pb.Column | undefined => {
	if (!input) return
	const result = new api_pb.Column()
	if (input?.title !== undefined) result.setTitle(input.title)
	if (input?.template !== undefined) result.setTemplate(input.template)
	return result
}

export const mapColumnFromGrpcWeb = (input?: api_pb.Column): ui_crud_v1_types.Column | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.Column = {
        title: input.getTitle(),
        template: input.getTemplate(),
	}
	return result
}

export const mapFilterToGrpcWeb = (input?: ui_crud_v1_types.Filter): api_pb.Filter | undefined => {
	if (!input) return
	const result = new api_pb.Filter()
	if (input?.uid !== undefined) result.setUid(input.uid)
	if (input?.name !== undefined) result.setName(input.name)
	if (input?.resourceId !== undefined) result.setResourceid(input.resourceId)
	if (input?.userId !== undefined) result.setUserid(input.userId)
	if (input?.tenantId !== undefined) result.setTenantid(input.tenantId)
	if (input?.domainId !== undefined) result.setDomainid(input.domainId)
	if (input?.query !== undefined) result.setQuery(input.query)
	if (input?.sorting !== undefined) result.setSortingList(input.sorting)
	if (input?.createdAt !== undefined) result.setCreatedat(input.createdAt)
	if (input?.createdBy !== undefined) result.setCreatedby(input.createdBy)
	if (input?.updatedAt !== undefined) result.setUpdatedat(input.updatedAt)
	if (input?.updatedBy !== undefined) result.setUpdatedby(input.updatedBy)
	if (input?.deletedAt !== undefined) result.setDeletedat(input.deletedAt)
	if (input?.deletedBy !== undefined) result.setDeletedby(input.deletedBy)
	return result
}

export const mapFilterFromGrpcWeb = (input?: api_pb.Filter): ui_crud_v1_types.Filter | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.Filter = {
        uid: input.getUid(),
        name: input.getName(),
        resourceId: input.getResourceid(),
        userId: input.getUserid(),
        tenantId: input.getTenantid(),
        domainId: input.getDomainid(),
        query: input.getQuery(),
        sorting: input.getSortingList(),
        createdAt: input.getCreatedat(),
        createdBy: input.getCreatedby(),
        updatedAt: input.getUpdatedat(),
        updatedBy: input.getUpdatedby(),
        deletedAt: input.getDeletedat(),
        deletedBy: input.getDeletedby(),
	}
	return result
}

export const mapPageToGrpcWeb = (input?: ui_crud_v1_types.Page): api_pb.Page | undefined => {
	if (!input) return
	const result = new api_pb.Page()
	if (input?.uid !== undefined) result.setUid(input.uid)
	if (input?.name !== undefined) result.setName(input.name)
	if (input?.userId !== undefined) result.setUserid(input.userId)
	if (input?.tenantId !== undefined) result.setTenantid(input.tenantId)
	if (input?.domainId !== undefined) result.setDomainid(input.domainId)
	if (input?.viewIds !== undefined) result.setViewidsList(input.viewIds)
	if (input?.slug !== undefined) result.setSlug(input.slug)
	if (input?.createdAt !== undefined) result.setCreatedat(input.createdAt)
	if (input?.createdBy !== undefined) result.setCreatedby(input.createdBy)
	if (input?.updatedAt !== undefined) result.setUpdatedat(input.updatedAt)
	if (input?.updatedBy !== undefined) result.setUpdatedby(input.updatedBy)
	if (input?.deletedAt !== undefined) result.setDeletedat(input.deletedAt)
	if (input?.deletedBy !== undefined) result.setDeletedby(input.deletedBy)
	return result
}

export const mapPageFromGrpcWeb = (input?: api_pb.Page): ui_crud_v1_types.Page | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.Page = {
        uid: input.getUid(),
        name: input.getName(),
        userId: input.getUserid(),
        tenantId: input.getTenantid(),
        domainId: input.getDomainid(),
        viewIds: input.getViewidsList(),
        slug: input.getSlug(),
        createdAt: input.getCreatedat(),
        createdBy: input.getCreatedby(),
        updatedAt: input.getUpdatedat(),
        updatedBy: input.getUpdatedby(),
        deletedAt: input.getDeletedat(),
        deletedBy: input.getDeletedby(),
	}
	return result
}

export const mapViewToGrpcWeb = (input?: ui_crud_v1_types.View): api_pb.View | undefined => {
	if (!input) return
	const result = new api_pb.View()
	if (input?.uid !== undefined) result.setUid(input.uid)
	if (input?.name !== undefined) result.setName(input.name)
	if (input?.userId !== undefined) result.setUserid(input.userId)
	if (input?.tenantId !== undefined) result.setTenantid(input.tenantId)
	if (input?.domainId !== undefined) result.setDomainid(input.domainId)
	if (input?.template !== undefined) result.setTemplate(input.template)
	if (input?.plugins !== undefined) {
		input.plugins.forEach((x: ui_crud_v1_types.PluginInstance, i: number) => {
			result.addPlugins(mapPluginInstanceToGrpcWeb(x), i)
		})
    }
	if (input?.slug !== undefined) result.setSlug(input.slug)
	if (input?.createdAt !== undefined) result.setCreatedat(input.createdAt)
	if (input?.createdBy !== undefined) result.setCreatedby(input.createdBy)
	if (input?.updatedAt !== undefined) result.setUpdatedat(input.updatedAt)
	if (input?.updatedBy !== undefined) result.setUpdatedby(input.updatedBy)
	if (input?.deletedAt !== undefined) result.setDeletedat(input.deletedAt)
	if (input?.deletedBy !== undefined) result.setDeletedby(input.deletedBy)
	return result
}

export const mapViewFromGrpcWeb = (input?: api_pb.View): ui_crud_v1_types.View | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.View = {
        uid: input.getUid(),
        name: input.getName(),
        userId: input.getUserid(),
        tenantId: input.getTenantid(),
        domainId: input.getDomainid(),
        template: input.getTemplate(),

        slug: input.getSlug(),
        createdAt: input.getCreatedat(),
        createdBy: input.getCreatedby(),
        updatedAt: input.getUpdatedat(),
        updatedBy: input.getUpdatedby(),
        deletedAt: input.getDeletedat(),
        deletedBy: input.getDeletedby(),
	}
    const pluginsList: Array<ui_crud_v1_types.PluginInstance> = []
	input.getPluginsList().forEach((x: any) => {
		const val = mapPluginInstanceFromGrpcWeb(x)
		if (val !== undefined) pluginsList.push(val)
	})
	result.plugins = pluginsList

	return result
}

export const mapPluginInstanceToGrpcWeb = (input?: ui_crud_v1_types.PluginInstance): api_pb.PluginInstance | undefined => {
	if (!input) return
	const result = new api_pb.PluginInstance()
	if (input?.uid !== undefined) result.setUid(input.uid)
	if (input?.dependsOn !== undefined) result.setDependsonList(input.dependsOn)
	if (input?.pluginId !== undefined) result.setPluginid(input.pluginId)
	if (input?.data !== undefined) result.setData(input.data)
	return result
}

export const mapPluginInstanceFromGrpcWeb = (input?: api_pb.PluginInstance): ui_crud_v1_types.PluginInstance | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.PluginInstance = {
        uid: input.getUid(),
        dependsOn: input.getDependsonList(),
        pluginId: input.getPluginid(),
        data: input.getData(),
	}
	return result
}

export const mapPluginToGrpcWeb = (input?: ui_crud_v1_types.Plugin): api_pb.Plugin | undefined => {
	if (!input) return
	const result = new api_pb.Plugin()
	if (input?.uid !== undefined) result.setUid(input.uid)
	if (input?.name !== undefined) result.setName(input.name)
	if (input?.userId !== undefined) result.setUserid(input.userId)
	if (input?.tenantId !== undefined) result.setTenantid(input.tenantId)
	if (input?.domainId !== undefined) result.setDomainid(input.domainId)
	if (input?.template !== undefined) result.setTemplate(input.template)
	if (input?.createdAt !== undefined) result.setCreatedat(input.createdAt)
	if (input?.createdBy !== undefined) result.setCreatedby(input.createdBy)
	if (input?.updatedAt !== undefined) result.setUpdatedat(input.updatedAt)
	if (input?.updatedBy !== undefined) result.setUpdatedby(input.updatedBy)
	if (input?.deletedAt !== undefined) result.setDeletedat(input.deletedAt)
	if (input?.deletedBy !== undefined) result.setDeletedby(input.deletedBy)
	return result
}

export const mapPluginFromGrpcWeb = (input?: api_pb.Plugin): ui_crud_v1_types.Plugin | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.Plugin = {
        uid: input.getUid(),
        name: input.getName(),
        userId: input.getUserid(),
        tenantId: input.getTenantid(),
        domainId: input.getDomainid(),
        template: input.getTemplate(),
        createdAt: input.getCreatedat(),
        createdBy: input.getCreatedby(),
        updatedAt: input.getUpdatedat(),
        updatedBy: input.getUpdatedby(),
        deletedAt: input.getDeletedat(),
        deletedBy: input.getDeletedby(),
	}
	return result
}

export const mapGetListsRequestToGrpcWeb = (input?: ui_crud_v1_types.GetListsRequest): api_pb.GetListsRequest | undefined => {
	if (!input) return
	const result = new api_pb.GetListsRequest()
	const tmpResourceId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.resourceId);
    if (tmpResourceId !== undefined) result.setResourceid(tmpResourceId)
	const tmpUserId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.userId);
    if (tmpUserId !== undefined) result.setUserid(tmpUserId)
	const tmpTenantId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.tenantId);
    if (tmpTenantId !== undefined) result.setTenantid(tmpTenantId)
	const tmpDomainId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.domainId);
    if (tmpDomainId !== undefined) result.setDomainid(tmpDomainId)
	if (input?.limit !== undefined) result.setLimit(input.limit)
	return result
}

export const mapGetListsRequestFromGrpcWeb = (input?: api_pb.GetListsRequest): ui_crud_v1_types.GetListsRequest | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetListsRequest = {
        resourceId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getResourceid()),
        userId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getUserid()),
        tenantId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getTenantid()),
        domainId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getDomainid()),
        limit: input.getLimit(),
	}
	return result
}

export const mapGetListsResponseToGrpcWeb = (input?: ui_crud_v1_types.GetListsResponse): api_pb.GetListsResponse | undefined => {
	if (!input) return
	const result = new api_pb.GetListsResponse()
	if (input?.lists !== undefined) {
		input.lists.forEach((x: ui_crud_v1_types.List, i: number) => {
			result.addLists(mapListToGrpcWeb(x), i)
		})
    }
	return result
}

export const mapGetListsResponseFromGrpcWeb = (input?: api_pb.GetListsResponse): ui_crud_v1_types.GetListsResponse | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetListsResponse = {

	}
    const listsList: Array<ui_crud_v1_types.List> = []
	input.getListsList().forEach((x: any) => {
		const val = mapListFromGrpcWeb(x)
		if (val !== undefined) listsList.push(val)
	})
	result.lists = listsList

	return result
}

export const mapGetResourcesRequestToGrpcWeb = (input?: ui_crud_v1_types.GetResourcesRequest): api_pb.GetResourcesRequest | undefined => {
	if (!input) return
	const result = new api_pb.GetResourcesRequest()
	const tmpUserId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.userId);
    if (tmpUserId !== undefined) result.setUserid(tmpUserId)
	const tmpTenantId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.tenantId);
    if (tmpTenantId !== undefined) result.setTenantid(tmpTenantId)
	const tmpDomainId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.domainId);
    if (tmpDomainId !== undefined) result.setDomainid(tmpDomainId)
	if (input?.resource !== undefined) result.setResource(input.resource)
	if (input?.limit !== undefined) result.setLimit(input.limit)
	const tmpDatasource = mapResource_DatasourceToGrpcWeb(input?.datasource);
    if (tmpDatasource !== undefined) result.setDatasource(tmpDatasource)
	const tmpDatasourceParamsCustom = mapDatasourceParamsCustomToGrpcWeb(input?.datasourceParamsCustom);
    if (tmpDatasourceParamsCustom !== undefined) result.setDatasourceparamscustom(tmpDatasourceParamsCustom)
	const tmpDatasourceParamsElasticsearch = mapDatasourceParamsElasticSearchToGrpcWeb(input?.datasourceParamsElasticsearch);
    if (tmpDatasourceParamsElasticsearch !== undefined) result.setDatasourceparamselasticsearch(tmpDatasourceParamsElasticsearch)
	const tmpDatasourceParamsGraphql = mapDatasourceParamsGraphQLToGrpcWeb(input?.datasourceParamsGraphql);
    if (tmpDatasourceParamsGraphql !== undefined) result.setDatasourceparamsgraphql(tmpDatasourceParamsGraphql)
	return result
}

export const mapGetResourcesRequestFromGrpcWeb = (input?: api_pb.GetResourcesRequest): ui_crud_v1_types.GetResourcesRequest | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetResourcesRequest = {
        userId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getUserid()),
        tenantId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getTenantid()),
        domainId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getDomainid()),
        resource: input.getResource(),
        limit: input.getLimit(),
        datasource: mapResource_DatasourceFromGrpcWeb(input.getDatasource()),
        datasourceParamsCustom: mapDatasourceParamsCustomFromGrpcWeb(input.getDatasourceparamscustom()),
        datasourceParamsElasticsearch: mapDatasourceParamsElasticSearchFromGrpcWeb(input.getDatasourceparamselasticsearch()),
        datasourceParamsGraphql: mapDatasourceParamsGraphQLFromGrpcWeb(input.getDatasourceparamsgraphql()),
	}
	return result
}

export const mapGetResourcesResponseToGrpcWeb = (input?: ui_crud_v1_types.GetResourcesResponse): api_pb.GetResourcesResponse | undefined => {
	if (!input) return
	const result = new api_pb.GetResourcesResponse()
	if (input?.resources !== undefined) {
		input.resources.forEach((x: ui_crud_v1_types.Resource, i: number) => {
			result.addResources(mapResourceToGrpcWeb(x), i)
		})
    }
	return result
}

export const mapGetResourcesResponseFromGrpcWeb = (input?: api_pb.GetResourcesResponse): ui_crud_v1_types.GetResourcesResponse | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetResourcesResponse = {

	}
    const resourcesList: Array<ui_crud_v1_types.Resource> = []
	input.getResourcesList().forEach((x: any) => {
		const val = mapResourceFromGrpcWeb(x)
		if (val !== undefined) resourcesList.push(val)
	})
	result.resources = resourcesList

	return result
}

export const mapGetFiltersRequestToGrpcWeb = (input?: ui_crud_v1_types.GetFiltersRequest): api_pb.GetFiltersRequest | undefined => {
	if (!input) return
	const result = new api_pb.GetFiltersRequest()
	const tmpResourceId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.resourceId);
    if (tmpResourceId !== undefined) result.setResourceid(tmpResourceId)
	const tmpUserId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.userId);
    if (tmpUserId !== undefined) result.setUserid(tmpUserId)
	const tmpTenantId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.tenantId);
    if (tmpTenantId !== undefined) result.setTenantid(tmpTenantId)
	const tmpDomainId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.domainId);
    if (tmpDomainId !== undefined) result.setDomainid(tmpDomainId)
	if (input?.limit !== undefined) result.setLimit(input.limit)
	return result
}

export const mapGetFiltersRequestFromGrpcWeb = (input?: api_pb.GetFiltersRequest): ui_crud_v1_types.GetFiltersRequest | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetFiltersRequest = {
        resourceId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getResourceid()),
        userId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getUserid()),
        tenantId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getTenantid()),
        domainId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getDomainid()),
        limit: input.getLimit(),
	}
	return result
}

export const mapGetFiltersResponseToGrpcWeb = (input?: ui_crud_v1_types.GetFiltersResponse): api_pb.GetFiltersResponse | undefined => {
	if (!input) return
	const result = new api_pb.GetFiltersResponse()
	if (input?.filters !== undefined) {
		input.filters.forEach((x: ui_crud_v1_types.Filter, i: number) => {
			result.addFilters(mapFilterToGrpcWeb(x), i)
		})
    }
	return result
}

export const mapGetFiltersResponseFromGrpcWeb = (input?: api_pb.GetFiltersResponse): ui_crud_v1_types.GetFiltersResponse | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetFiltersResponse = {

	}
    const filtersList: Array<ui_crud_v1_types.Filter> = []
	input.getFiltersList().forEach((x: any) => {
		const val = mapFilterFromGrpcWeb(x)
		if (val !== undefined) filtersList.push(val)
	})
	result.filters = filtersList

	return result
}

export const mapGetPagesRequestToGrpcWeb = (input?: ui_crud_v1_types.GetPagesRequest): api_pb.GetPagesRequest | undefined => {
	if (!input) return
	const result = new api_pb.GetPagesRequest()
	const tmpUserId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.userId);
    if (tmpUserId !== undefined) result.setUserid(tmpUserId)
	const tmpTenantId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.tenantId);
    if (tmpTenantId !== undefined) result.setTenantid(tmpTenantId)
	const tmpDomainId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.domainId);
    if (tmpDomainId !== undefined) result.setDomainid(tmpDomainId)
	if (input?.limit !== undefined) result.setLimit(input.limit)
	if (input?.slug !== undefined) result.setSlug(input.slug)
	return result
}

export const mapGetPagesRequestFromGrpcWeb = (input?: api_pb.GetPagesRequest): ui_crud_v1_types.GetPagesRequest | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetPagesRequest = {
        userId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getUserid()),
        tenantId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getTenantid()),
        domainId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getDomainid()),
        limit: input.getLimit(),
        slug: input.getSlug(),
	}
	return result
}

export const mapGetPagesResponseToGrpcWeb = (input?: ui_crud_v1_types.GetPagesResponse): api_pb.GetPagesResponse | undefined => {
	if (!input) return
	const result = new api_pb.GetPagesResponse()
	if (input?.pages !== undefined) {
		input.pages.forEach((x: ui_crud_v1_types.Page, i: number) => {
			result.addPages(mapPageToGrpcWeb(x), i)
		})
    }
	return result
}

export const mapGetPagesResponseFromGrpcWeb = (input?: api_pb.GetPagesResponse): ui_crud_v1_types.GetPagesResponse | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetPagesResponse = {

	}
    const pagesList: Array<ui_crud_v1_types.Page> = []
	input.getPagesList().forEach((x: any) => {
		const val = mapPageFromGrpcWeb(x)
		if (val !== undefined) pagesList.push(val)
	})
	result.pages = pagesList

	return result
}

export const mapGetViewsRequestToGrpcWeb = (input?: ui_crud_v1_types.GetViewsRequest): api_pb.GetViewsRequest | undefined => {
	if (!input) return
	const result = new api_pb.GetViewsRequest()
	const tmpUserId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.userId);
    if (tmpUserId !== undefined) result.setUserid(tmpUserId)
	const tmpTenantId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.tenantId);
    if (tmpTenantId !== undefined) result.setTenantid(tmpTenantId)
	const tmpDomainId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.domainId);
    if (tmpDomainId !== undefined) result.setDomainid(tmpDomainId)
	if (input?.limit !== undefined) result.setLimit(input.limit)
	return result
}

export const mapGetViewsRequestFromGrpcWeb = (input?: api_pb.GetViewsRequest): ui_crud_v1_types.GetViewsRequest | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetViewsRequest = {
        userId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getUserid()),
        tenantId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getTenantid()),
        domainId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getDomainid()),
        limit: input.getLimit(),
	}
	return result
}

export const mapGetViewsResponseToGrpcWeb = (input?: ui_crud_v1_types.GetViewsResponse): api_pb.GetViewsResponse | undefined => {
	if (!input) return
	const result = new api_pb.GetViewsResponse()
	if (input?.views !== undefined) {
		input.views.forEach((x: ui_crud_v1_types.View, i: number) => {
			result.addViews(mapViewToGrpcWeb(x), i)
		})
    }
	return result
}

export const mapGetViewsResponseFromGrpcWeb = (input?: api_pb.GetViewsResponse): ui_crud_v1_types.GetViewsResponse | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetViewsResponse = {

	}
    const viewsList: Array<ui_crud_v1_types.View> = []
	input.getViewsList().forEach((x: any) => {
		const val = mapViewFromGrpcWeb(x)
		if (val !== undefined) viewsList.push(val)
	})
	result.views = viewsList

	return result
}

export const mapGetPluginsRequestToGrpcWeb = (input?: ui_crud_v1_types.GetPluginsRequest): api_pb.GetPluginsRequest | undefined => {
	if (!input) return
	const result = new api_pb.GetPluginsRequest()
	const tmpUserId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.userId);
    if (tmpUserId !== undefined) result.setUserid(tmpUserId)
	const tmpTenantId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.tenantId);
    if (tmpTenantId !== undefined) result.setTenantid(tmpTenantId)
	const tmpDomainId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.domainId);
    if (tmpDomainId !== undefined) result.setDomainid(tmpDomainId)
	if (input?.limit !== undefined) result.setLimit(input.limit)
	return result
}

export const mapGetPluginsRequestFromGrpcWeb = (input?: api_pb.GetPluginsRequest): ui_crud_v1_types.GetPluginsRequest | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetPluginsRequest = {
        userId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getUserid()),
        tenantId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getTenantid()),
        domainId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getDomainid()),
        limit: input.getLimit(),
	}
	return result
}

export const mapGetPluginsResponseToGrpcWeb = (input?: ui_crud_v1_types.GetPluginsResponse): api_pb.GetPluginsResponse | undefined => {
	if (!input) return
	const result = new api_pb.GetPluginsResponse()
	if (input?.plugins !== undefined) {
		input.plugins.forEach((x: ui_crud_v1_types.Plugin, i: number) => {
			result.addPlugins(mapPluginToGrpcWeb(x), i)
		})
    }
	return result
}

export const mapGetPluginsResponseFromGrpcWeb = (input?: api_pb.GetPluginsResponse): ui_crud_v1_types.GetPluginsResponse | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetPluginsResponse = {

	}
    const pluginsList: Array<ui_crud_v1_types.Plugin> = []
	input.getPluginsList().forEach((x: any) => {
		const val = mapPluginFromGrpcWeb(x)
		if (val !== undefined) pluginsList.push(val)
	})
	result.plugins = pluginsList

	return result
}

export const mapGetViewOverridesRequestToGrpcWeb = (input?: ui_crud_v1_types.GetViewOverridesRequest): api_pb.GetViewOverridesRequest | undefined => {
	if (!input) return
	const result = new api_pb.GetViewOverridesRequest()
	const tmpUserId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.userId);
    if (tmpUserId !== undefined) result.setUserid(tmpUserId)
	const tmpTenantId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.tenantId);
    if (tmpTenantId !== undefined) result.setTenantid(tmpTenantId)
	const tmpDomainId = platform_v1_query_mappers.mapMatchedStringValueToGrpcWeb(input?.domainId);
    if (tmpDomainId !== undefined) result.setDomainid(tmpDomainId)
	if (input?.viewId !== undefined) result.setViewid(input.viewId)
	if (input?.limit !== undefined) result.setLimit(input.limit)
	return result
}

export const mapGetViewOverridesRequestFromGrpcWeb = (input?: api_pb.GetViewOverridesRequest): ui_crud_v1_types.GetViewOverridesRequest | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetViewOverridesRequest = {
        userId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getUserid()),
        tenantId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getTenantid()),
        domainId: platform_v1_query_mappers.mapMatchedStringValueFromGrpcWeb(input.getDomainid()),
        viewId: input.getViewid(),
        limit: input.getLimit(),
	}
	return result
}

export const mapGetViewOverridesResponseToGrpcWeb = (input?: ui_crud_v1_types.GetViewOverridesResponse): api_pb.GetViewOverridesResponse | undefined => {
	if (!input) return
	const result = new api_pb.GetViewOverridesResponse()
	if (input?.viewOverrides !== undefined) {
		input.viewOverrides.forEach((x: ui_crud_v1_types.ViewOverride, i: number) => {
			result.addViewoverrides(mapViewOverrideToGrpcWeb(x), i)
		})
    }
	return result
}

export const mapGetViewOverridesResponseFromGrpcWeb = (input?: api_pb.GetViewOverridesResponse): ui_crud_v1_types.GetViewOverridesResponse | undefined => {
	if (!input) return
	const result: ui_crud_v1_types.GetViewOverridesResponse = {

	}
    const viewOverridesList: Array<ui_crud_v1_types.ViewOverride> = []
	input.getViewoverridesList().forEach((x: any) => {
		const val = mapViewOverrideFromGrpcWeb(x)
		if (val !== undefined) viewOverridesList.push(val)
	})
	result.viewOverrides = viewOverridesList

	return result
}
