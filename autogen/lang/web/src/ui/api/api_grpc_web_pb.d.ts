import * as grpcWeb from 'grpc-web';

import * as src_ui_crud_api_pb from '../../ui/crud/api_pb';
import * as src_ui_api_api_pb from '../../ui/api/api_pb';


export class UIApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  newResource(
    request: src_ui_api_api_pb.NewResourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Resource) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Resource>;

  getResource(
    request: src_ui_api_api_pb.GetResourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Resource) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Resource>;

  putResource(
    request: src_ui_api_api_pb.PutResourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Resource) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Resource>;

  delResource(
    request: src_ui_api_api_pb.DelResourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Resource) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Resource>;

  getResources(
    request: src_ui_api_api_pb.GetResourcesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.GetResourcesResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.GetResourcesResponse>;

  newList(
    request: src_ui_api_api_pb.NewListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.List) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.List>;

  getList(
    request: src_ui_api_api_pb.GetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.List) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.List>;

  putList(
    request: src_ui_api_api_pb.PutListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.List) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.List>;

  delList(
    request: src_ui_api_api_pb.DelListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.List) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.List>;

  getLists(
    request: src_ui_api_api_pb.GetListsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.GetListsResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.GetListsResponse>;

  newFilter(
    request: src_ui_api_api_pb.NewFilterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Filter) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Filter>;

  getFilter(
    request: src_ui_api_api_pb.GetFilterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Filter) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Filter>;

  putFilter(
    request: src_ui_api_api_pb.PutFilterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Filter) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Filter>;

  delFilter(
    request: src_ui_api_api_pb.DelFilterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Filter) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Filter>;

  getFilters(
    request: src_ui_api_api_pb.GetFiltersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.GetFiltersResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.GetFiltersResponse>;

  newPage(
    request: src_ui_api_api_pb.NewPageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Page) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Page>;

  getPage(
    request: src_ui_api_api_pb.GetPageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Page) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Page>;

  putPage(
    request: src_ui_api_api_pb.PutPageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Page) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Page>;

  delPage(
    request: src_ui_api_api_pb.DelPageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Page) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Page>;

  getPages(
    request: src_ui_api_api_pb.GetPagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.GetPagesResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.GetPagesResponse>;

  newView(
    request: src_ui_api_api_pb.NewViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.View) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.View>;

  getView(
    request: src_ui_api_api_pb.GetViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.View) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.View>;

  putView(
    request: src_ui_api_api_pb.PutViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.View) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.View>;

  delView(
    request: src_ui_api_api_pb.DelViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.View) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.View>;

  getViews(
    request: src_ui_api_api_pb.GetViewsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.GetViewsResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.GetViewsResponse>;

  newPlugin(
    request: src_ui_api_api_pb.NewPluginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Plugin) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Plugin>;

  getPlugin(
    request: src_ui_api_api_pb.GetPluginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Plugin) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Plugin>;

  putPlugin(
    request: src_ui_api_api_pb.PutPluginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Plugin) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Plugin>;

  delPlugin(
    request: src_ui_api_api_pb.DelPluginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Plugin) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Plugin>;

  getPlugins(
    request: src_ui_api_api_pb.GetPluginsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.GetPluginsResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.GetPluginsResponse>;

  getUI(
    request: src_ui_api_api_pb.GetUIRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.GetUIResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.GetUIResponse>;

  initiateSchemaSync(
    request: src_ui_api_api_pb.InitiateSchemaSyncRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.InitiateSchemaSyncResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.InitiateSchemaSyncResponse>;

  newViewOverride(
    request: src_ui_api_api_pb.NewViewOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.ViewOverride) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.ViewOverride>;

  getViewOverride(
    request: src_ui_api_api_pb.GetViewOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.ViewOverride) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.ViewOverride>;

  putViewOverride(
    request: src_ui_api_api_pb.PutViewOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.ViewOverride) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.ViewOverride>;

  delViewOverride(
    request: src_ui_api_api_pb.DelViewOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.ViewOverride) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.ViewOverride>;

  getViewOverrides(
    request: src_ui_api_api_pb.GetViewOverridesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_api_api_pb.GetViewOverridesResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_api_api_pb.GetViewOverridesResponse>;

}

export class UIApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  newResource(
    request: src_ui_api_api_pb.NewResourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Resource>;

  getResource(
    request: src_ui_api_api_pb.GetResourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Resource>;

  putResource(
    request: src_ui_api_api_pb.PutResourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Resource>;

  delResource(
    request: src_ui_api_api_pb.DelResourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Resource>;

  getResources(
    request: src_ui_api_api_pb.GetResourcesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.GetResourcesResponse>;

  newList(
    request: src_ui_api_api_pb.NewListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.List>;

  getList(
    request: src_ui_api_api_pb.GetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.List>;

  putList(
    request: src_ui_api_api_pb.PutListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.List>;

  delList(
    request: src_ui_api_api_pb.DelListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.List>;

  getLists(
    request: src_ui_api_api_pb.GetListsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.GetListsResponse>;

  newFilter(
    request: src_ui_api_api_pb.NewFilterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Filter>;

  getFilter(
    request: src_ui_api_api_pb.GetFilterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Filter>;

  putFilter(
    request: src_ui_api_api_pb.PutFilterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Filter>;

  delFilter(
    request: src_ui_api_api_pb.DelFilterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Filter>;

  getFilters(
    request: src_ui_api_api_pb.GetFiltersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.GetFiltersResponse>;

  newPage(
    request: src_ui_api_api_pb.NewPageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Page>;

  getPage(
    request: src_ui_api_api_pb.GetPageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Page>;

  putPage(
    request: src_ui_api_api_pb.PutPageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Page>;

  delPage(
    request: src_ui_api_api_pb.DelPageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Page>;

  getPages(
    request: src_ui_api_api_pb.GetPagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.GetPagesResponse>;

  newView(
    request: src_ui_api_api_pb.NewViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.View>;

  getView(
    request: src_ui_api_api_pb.GetViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.View>;

  putView(
    request: src_ui_api_api_pb.PutViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.View>;

  delView(
    request: src_ui_api_api_pb.DelViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.View>;

  getViews(
    request: src_ui_api_api_pb.GetViewsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.GetViewsResponse>;

  newPlugin(
    request: src_ui_api_api_pb.NewPluginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Plugin>;

  getPlugin(
    request: src_ui_api_api_pb.GetPluginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Plugin>;

  putPlugin(
    request: src_ui_api_api_pb.PutPluginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Plugin>;

  delPlugin(
    request: src_ui_api_api_pb.DelPluginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Plugin>;

  getPlugins(
    request: src_ui_api_api_pb.GetPluginsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.GetPluginsResponse>;

  getUI(
    request: src_ui_api_api_pb.GetUIRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.GetUIResponse>;

  initiateSchemaSync(
    request: src_ui_api_api_pb.InitiateSchemaSyncRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.InitiateSchemaSyncResponse>;

  newViewOverride(
    request: src_ui_api_api_pb.NewViewOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.ViewOverride>;

  getViewOverride(
    request: src_ui_api_api_pb.GetViewOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.ViewOverride>;

  putViewOverride(
    request: src_ui_api_api_pb.PutViewOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.ViewOverride>;

  delViewOverride(
    request: src_ui_api_api_pb.DelViewOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.ViewOverride>;

  getViewOverrides(
    request: src_ui_api_api_pb.GetViewOverridesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_api_api_pb.GetViewOverridesResponse>;

}

