import * as grpcWeb from 'grpc-web';

import * as src_query_api_api_pb from '../../query/api/api_pb';


export class QueryApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getObjects(
    request: src_query_api_api_pb.GetObjectsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_query_api_api_pb.GetObjectsResponse) => void
  ): grpcWeb.ClientReadableStream<src_query_api_api_pb.GetObjectsResponse>;

  getSchema(
    request: src_query_api_api_pb.GetSchemaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_query_api_api_pb.GetSchemaResponse) => void
  ): grpcWeb.ClientReadableStream<src_query_api_api_pb.GetSchemaResponse>;

  getFieldSchema(
    request: src_query_api_api_pb.GetFieldSchemaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_query_api_api_pb.GetSchemaResponse) => void
  ): grpcWeb.ClientReadableStream<src_query_api_api_pb.GetSchemaResponse>;

}

export class QueryApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getObjects(
    request: src_query_api_api_pb.GetObjectsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_query_api_api_pb.GetObjectsResponse>;

  getSchema(
    request: src_query_api_api_pb.GetSchemaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_query_api_api_pb.GetSchemaResponse>;

  getFieldSchema(
    request: src_query_api_api_pb.GetFieldSchemaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_query_api_api_pb.GetSchemaResponse>;

}

