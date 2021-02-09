/**
 * @fileoverview gRPC-Web generated client stub for action.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');



var src_action_crud_api_pb = require('../../action/crud/api_pb.js')
const proto = {};
proto.action = {};
proto.action.api = {};
proto.action.api.v1 = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.action.api.v1.ActionApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.action.api.v1.ActionApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.action.api.v1.InitiateActionRequest,
 *   !proto.action.api.v1.InitiateActionResponse>}
 */
const methodDescriptor_ActionApi_InitiateAction = new grpc.web.MethodDescriptor(
  '/action.api.v1.ActionApi/InitiateAction',
  grpc.web.MethodType.UNARY,
  proto.action.api.v1.InitiateActionRequest,
  proto.action.api.v1.InitiateActionResponse,
  /**
   * @param {!proto.action.api.v1.InitiateActionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.action.api.v1.InitiateActionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.action.api.v1.InitiateActionRequest,
 *   !proto.action.api.v1.InitiateActionResponse>}
 */
const methodInfo_ActionApi_InitiateAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.action.api.v1.InitiateActionResponse,
  /**
   * @param {!proto.action.api.v1.InitiateActionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.action.api.v1.InitiateActionResponse.deserializeBinary
);


/**
 * @param {!proto.action.api.v1.InitiateActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.action.api.v1.InitiateActionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.action.api.v1.InitiateActionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.action.api.v1.ActionApiClient.prototype.initiateAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/action.api.v1.ActionApi/InitiateAction',
      request,
      metadata || {},
      methodDescriptor_ActionApi_InitiateAction,
      callback);
};


/**
 * @param {!proto.action.api.v1.InitiateActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.action.api.v1.InitiateActionResponse>}
 *     Promise that resolves to the response
 */
proto.action.api.v1.ActionApiPromiseClient.prototype.initiateAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/action.api.v1.ActionApi/InitiateAction',
      request,
      metadata || {},
      methodDescriptor_ActionApi_InitiateAction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.action.api.v1.GetJobRequest,
 *   !proto.action.api.v1.GetJobResponse>}
 */
const methodDescriptor_ActionApi_GetJob = new grpc.web.MethodDescriptor(
  '/action.api.v1.ActionApi/GetJob',
  grpc.web.MethodType.UNARY,
  proto.action.api.v1.GetJobRequest,
  proto.action.api.v1.GetJobResponse,
  /**
   * @param {!proto.action.api.v1.GetJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.action.api.v1.GetJobResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.action.api.v1.GetJobRequest,
 *   !proto.action.api.v1.GetJobResponse>}
 */
const methodInfo_ActionApi_GetJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.action.api.v1.GetJobResponse,
  /**
   * @param {!proto.action.api.v1.GetJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.action.api.v1.GetJobResponse.deserializeBinary
);


/**
 * @param {!proto.action.api.v1.GetJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.action.api.v1.GetJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.action.api.v1.GetJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.action.api.v1.ActionApiClient.prototype.getJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/action.api.v1.ActionApi/GetJob',
      request,
      metadata || {},
      methodDescriptor_ActionApi_GetJob,
      callback);
};


/**
 * @param {!proto.action.api.v1.GetJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.action.api.v1.GetJobResponse>}
 *     Promise that resolves to the response
 */
proto.action.api.v1.ActionApiPromiseClient.prototype.getJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/action.api.v1.ActionApi/GetJob',
      request,
      metadata || {},
      methodDescriptor_ActionApi_GetJob);
};


module.exports = proto.action.api.v1;

