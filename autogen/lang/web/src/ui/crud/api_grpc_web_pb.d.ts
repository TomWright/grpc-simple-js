import * as grpcWeb from 'grpc-web';

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as src_ui_crud_api_pb from '../../ui/crud/api_pb';


export class CrudClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getResource(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Resource) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Resource>;

  putResource(
    request: src_ui_crud_api_pb.Resource,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Resource) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Resource>;

  delResource(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Resource) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Resource>;

  getResources(
    request: src_ui_crud_api_pb.GetResourcesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.GetResourcesResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.GetResourcesResponse>;

  getList(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.List) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.List>;

  putList(
    request: src_ui_crud_api_pb.List,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.List) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.List>;

  delList(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.List) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.List>;

  getLists(
    request: src_ui_crud_api_pb.GetListsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.GetListsResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.GetListsResponse>;

  getFilter(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Filter) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Filter>;

  putFilter(
    request: src_ui_crud_api_pb.Filter,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Filter) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Filter>;

  delFilter(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Filter) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Filter>;

  getFilters(
    request: src_ui_crud_api_pb.GetFiltersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.GetFiltersResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.GetFiltersResponse>;

  getPage(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Page) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Page>;

  putPage(
    request: src_ui_crud_api_pb.Page,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Page) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Page>;

  delPage(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Page) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Page>;

  getPages(
    request: src_ui_crud_api_pb.GetPagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.GetPagesResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.GetPagesResponse>;

  getView(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.View) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.View>;

  putView(
    request: src_ui_crud_api_pb.View,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.View) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.View>;

  delView(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.View) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.View>;

  getViews(
    request: src_ui_crud_api_pb.GetViewsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.GetViewsResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.GetViewsResponse>;

  getPlugin(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Plugin) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Plugin>;

  putPlugin(
    request: src_ui_crud_api_pb.Plugin,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Plugin) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Plugin>;

  delPlugin(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.Plugin) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.Plugin>;

  getPlugins(
    request: src_ui_crud_api_pb.GetPluginsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_ui_crud_api_pb.GetPluginsResponse) => void
  ): grpcWeb.ClientReadableStream<src_ui_crud_api_pb.GetPluginsResponse>;

}

export class CrudPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getResource(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Resource>;

  putResource(
    request: src_ui_crud_api_pb.Resource,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Resource>;

  delResource(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Resource>;

  getResources(
    request: src_ui_crud_api_pb.GetResourcesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.GetResourcesResponse>;

  getList(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.List>;

  putList(
    request: src_ui_crud_api_pb.List,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.List>;

  delList(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.List>;

  getLists(
    request: src_ui_crud_api_pb.GetListsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.GetListsResponse>;

  getFilter(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Filter>;

  putFilter(
    request: src_ui_crud_api_pb.Filter,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Filter>;

  delFilter(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Filter>;

  getFilters(
    request: src_ui_crud_api_pb.GetFiltersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.GetFiltersResponse>;

  getPage(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Page>;

  putPage(
    request: src_ui_crud_api_pb.Page,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Page>;

  delPage(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Page>;

  getPages(
    request: src_ui_crud_api_pb.GetPagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.GetPagesResponse>;

  getView(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.View>;

  putView(
    request: src_ui_crud_api_pb.View,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.View>;

  delView(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.View>;

  getViews(
    request: src_ui_crud_api_pb.GetViewsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.GetViewsResponse>;

  getPlugin(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Plugin>;

  putPlugin(
    request: src_ui_crud_api_pb.Plugin,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Plugin>;

  delPlugin(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.Plugin>;

  getPlugins(
    request: src_ui_crud_api_pb.GetPluginsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_ui_crud_api_pb.GetPluginsResponse>;

}

