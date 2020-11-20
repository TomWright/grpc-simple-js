/**
 * @fileoverview gRPC-Web generated client stub for query.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


const proto = {};
proto.query = {};
proto.query.api = {};
proto.query.api.v1 = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.query.api.v1.QueryApiClient =
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
proto.query.api.v1.QueryApiPromiseClient =
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
 *   !proto.query.api.v1.GetObjectsRequest,
 *   !proto.query.api.v1.GetObjectsResponse>}
 */
const methodDescriptor_QueryApi_GetObjects = new grpc.web.MethodDescriptor(
  '/query.api.v1.QueryApi/GetObjects',
  grpc.web.MethodType.UNARY,
  proto.query.api.v1.GetObjectsRequest,
  proto.query.api.v1.GetObjectsResponse,
  /**
   * @param {!proto.query.api.v1.GetObjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.query.api.v1.GetObjectsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.query.api.v1.GetObjectsRequest,
 *   !proto.query.api.v1.GetObjectsResponse>}
 */
const methodInfo_QueryApi_GetObjects = new grpc.web.AbstractClientBase.MethodInfo(
  proto.query.api.v1.GetObjectsResponse,
  /**
   * @param {!proto.query.api.v1.GetObjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.query.api.v1.GetObjectsResponse.deserializeBinary
);


/**
 * @param {!proto.query.api.v1.GetObjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.query.api.v1.GetObjectsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.query.api.v1.GetObjectsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.query.api.v1.QueryApiClient.prototype.getObjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/query.api.v1.QueryApi/GetObjects',
      request,
      metadata || {},
      methodDescriptor_QueryApi_GetObjects,
      callback);
};


/**
 * @param {!proto.query.api.v1.GetObjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.query.api.v1.GetObjectsResponse>}
 *     Promise that resolves to the response
 */
proto.query.api.v1.QueryApiPromiseClient.prototype.getObjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/query.api.v1.QueryApi/GetObjects',
      request,
      metadata || {},
      methodDescriptor_QueryApi_GetObjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.query.api.v1.GetSchemaRequest,
 *   !proto.query.api.v1.GetSchemaResponse>}
 */
const methodDescriptor_QueryApi_GetSchema = new grpc.web.MethodDescriptor(
  '/query.api.v1.QueryApi/GetSchema',
  grpc.web.MethodType.UNARY,
  proto.query.api.v1.GetSchemaRequest,
  proto.query.api.v1.GetSchemaResponse,
  /**
   * @param {!proto.query.api.v1.GetSchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.query.api.v1.GetSchemaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.query.api.v1.GetSchemaRequest,
 *   !proto.query.api.v1.GetSchemaResponse>}
 */
const methodInfo_QueryApi_GetSchema = new grpc.web.AbstractClientBase.MethodInfo(
  proto.query.api.v1.GetSchemaResponse,
  /**
   * @param {!proto.query.api.v1.GetSchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.query.api.v1.GetSchemaResponse.deserializeBinary
);


/**
 * @param {!proto.query.api.v1.GetSchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.query.api.v1.GetSchemaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.query.api.v1.GetSchemaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.query.api.v1.QueryApiClient.prototype.getSchema =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/query.api.v1.QueryApi/GetSchema',
      request,
      metadata || {},
      methodDescriptor_QueryApi_GetSchema,
      callback);
};


/**
 * @param {!proto.query.api.v1.GetSchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.query.api.v1.GetSchemaResponse>}
 *     Promise that resolves to the response
 */
proto.query.api.v1.QueryApiPromiseClient.prototype.getSchema =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/query.api.v1.QueryApi/GetSchema',
      request,
      metadata || {},
      methodDescriptor_QueryApi_GetSchema);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.query.api.v1.GetFieldSchemaRequest,
 *   !proto.query.api.v1.GetSchemaResponse>}
 */
const methodDescriptor_QueryApi_GetFieldSchema = new grpc.web.MethodDescriptor(
  '/query.api.v1.QueryApi/GetFieldSchema',
  grpc.web.MethodType.UNARY,
  proto.query.api.v1.GetFieldSchemaRequest,
  proto.query.api.v1.GetSchemaResponse,
  /**
   * @param {!proto.query.api.v1.GetFieldSchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.query.api.v1.GetSchemaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.query.api.v1.GetFieldSchemaRequest,
 *   !proto.query.api.v1.GetSchemaResponse>}
 */
const methodInfo_QueryApi_GetFieldSchema = new grpc.web.AbstractClientBase.MethodInfo(
  proto.query.api.v1.GetSchemaResponse,
  /**
   * @param {!proto.query.api.v1.GetFieldSchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.query.api.v1.GetSchemaResponse.deserializeBinary
);


/**
 * @param {!proto.query.api.v1.GetFieldSchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.query.api.v1.GetSchemaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.query.api.v1.GetSchemaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.query.api.v1.QueryApiClient.prototype.getFieldSchema =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/query.api.v1.QueryApi/GetFieldSchema',
      request,
      metadata || {},
      methodDescriptor_QueryApi_GetFieldSchema,
      callback);
};


/**
 * @param {!proto.query.api.v1.GetFieldSchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.query.api.v1.GetSchemaResponse>}
 *     Promise that resolves to the response
 */
proto.query.api.v1.QueryApiPromiseClient.prototype.getFieldSchema =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/query.api.v1.QueryApi/GetFieldSchema',
      request,
      metadata || {},
      methodDescriptor_QueryApi_GetFieldSchema);
};


module.exports = proto.query.api.v1;

