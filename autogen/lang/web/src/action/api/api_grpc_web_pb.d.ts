import * as grpcWeb from 'grpc-web';

import * as src_action_api_api_pb from '../../action/api/api_pb';


export class ActionApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  initiateAction(
    request: src_action_api_api_pb.InitiateActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_action_api_api_pb.InitiateActionResponse) => void
  ): grpcWeb.ClientReadableStream<src_action_api_api_pb.InitiateActionResponse>;

  getJob(
    request: src_action_api_api_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_action_api_api_pb.GetJobResponse) => void
  ): grpcWeb.ClientReadableStream<src_action_api_api_pb.GetJobResponse>;

}

export class ActionApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  initiateAction(
    request: src_action_api_api_pb.InitiateActionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_action_api_api_pb.InitiateActionResponse>;

  getJob(
    request: src_action_api_api_pb.GetJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_action_api_api_pb.GetJobResponse>;

}

