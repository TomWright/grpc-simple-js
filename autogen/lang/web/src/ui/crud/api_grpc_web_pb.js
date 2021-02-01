/**
 * @fileoverview gRPC-Web generated client stub for ui.crud.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var src_platform_query_match_strategy_pb = require('../../platform/query/match_strategy_pb.js')
const proto = {};
proto.ui = {};
proto.ui.crud = {};
proto.ui.crud.v1 = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ui.crud.v1.CrudClient =
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
proto.ui.crud.v1.CrudPromiseClient =
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
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodDescriptor_Crud_GetResource = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetResource',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.Resource,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Resource.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodInfo_Crud_GetResource = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Resource,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Resource.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Resource)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Resource>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetResource',
      request,
      metadata || {},
      methodDescriptor_Crud_GetResource,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Resource>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetResource',
      request,
      metadata || {},
      methodDescriptor_Crud_GetResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.Resource,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodDescriptor_Crud_PutResource = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/PutResource',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.Resource,
  proto.ui.crud.v1.Resource,
  /**
   * @param {!proto.ui.crud.v1.Resource} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Resource.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.Resource,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodInfo_Crud_PutResource = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Resource,
  /**
   * @param {!proto.ui.crud.v1.Resource} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Resource.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.Resource} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Resource)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Resource>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.putResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutResource',
      request,
      metadata || {},
      methodDescriptor_Crud_PutResource,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.Resource} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Resource>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.putResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutResource',
      request,
      metadata || {},
      methodDescriptor_Crud_PutResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodDescriptor_Crud_DelResource = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/DelResource',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.Resource,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Resource.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodInfo_Crud_DelResource = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Resource,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Resource.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Resource)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Resource>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.delResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelResource',
      request,
      metadata || {},
      methodDescriptor_Crud_DelResource,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Resource>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.delResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelResource',
      request,
      metadata || {},
      methodDescriptor_Crud_DelResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.GetResourcesRequest,
 *   !proto.ui.crud.v1.GetResourcesResponse>}
 */
const methodDescriptor_Crud_GetResources = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetResources',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.GetResourcesRequest,
  proto.ui.crud.v1.GetResourcesResponse,
  /**
   * @param {!proto.ui.crud.v1.GetResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetResourcesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.GetResourcesRequest,
 *   !proto.ui.crud.v1.GetResourcesResponse>}
 */
const methodInfo_Crud_GetResources = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.GetResourcesResponse,
  /**
   * @param {!proto.ui.crud.v1.GetResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetResourcesResponse.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.GetResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.GetResourcesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.GetResourcesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getResources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetResources',
      request,
      metadata || {},
      methodDescriptor_Crud_GetResources,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.GetResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.GetResourcesResponse>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getResources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetResources',
      request,
      metadata || {},
      methodDescriptor_Crud_GetResources);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.List>}
 */
const methodDescriptor_Crud_GetList = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetList',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.List,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.List.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.List>}
 */
const methodInfo_Crud_GetList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.List,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetList',
      request,
      metadata || {},
      methodDescriptor_Crud_GetList,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.List>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetList',
      request,
      metadata || {},
      methodDescriptor_Crud_GetList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.List,
 *   !proto.ui.crud.v1.List>}
 */
const methodDescriptor_Crud_PutList = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/PutList',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.List,
  proto.ui.crud.v1.List,
  /**
   * @param {!proto.ui.crud.v1.List} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.List.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.List,
 *   !proto.ui.crud.v1.List>}
 */
const methodInfo_Crud_PutList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.List,
  /**
   * @param {!proto.ui.crud.v1.List} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.List.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.List} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.putList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutList',
      request,
      metadata || {},
      methodDescriptor_Crud_PutList,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.List} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.List>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.putList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutList',
      request,
      metadata || {},
      methodDescriptor_Crud_PutList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.List>}
 */
const methodDescriptor_Crud_DelList = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/DelList',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.List,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.List.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.List>}
 */
const methodInfo_Crud_DelList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.List,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.delList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelList',
      request,
      metadata || {},
      methodDescriptor_Crud_DelList,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.List>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.delList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelList',
      request,
      metadata || {},
      methodDescriptor_Crud_DelList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.GetListsRequest,
 *   !proto.ui.crud.v1.GetListsResponse>}
 */
const methodDescriptor_Crud_GetLists = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetLists',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.GetListsRequest,
  proto.ui.crud.v1.GetListsResponse,
  /**
   * @param {!proto.ui.crud.v1.GetListsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetListsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.GetListsRequest,
 *   !proto.ui.crud.v1.GetListsResponse>}
 */
const methodInfo_Crud_GetLists = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.GetListsResponse,
  /**
   * @param {!proto.ui.crud.v1.GetListsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetListsResponse.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.GetListsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.GetListsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.GetListsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getLists =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetLists',
      request,
      metadata || {},
      methodDescriptor_Crud_GetLists,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.GetListsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.GetListsResponse>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getLists =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetLists',
      request,
      metadata || {},
      methodDescriptor_Crud_GetLists);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodDescriptor_Crud_GetFilter = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetFilter',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.Filter,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Filter.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodInfo_Crud_GetFilter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Filter,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Filter.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Filter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Filter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetFilter',
      request,
      metadata || {},
      methodDescriptor_Crud_GetFilter,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Filter>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetFilter',
      request,
      metadata || {},
      methodDescriptor_Crud_GetFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.Filter,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodDescriptor_Crud_PutFilter = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/PutFilter',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.Filter,
  proto.ui.crud.v1.Filter,
  /**
   * @param {!proto.ui.crud.v1.Filter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Filter.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.Filter,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodInfo_Crud_PutFilter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Filter,
  /**
   * @param {!proto.ui.crud.v1.Filter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Filter.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.Filter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Filter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Filter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.putFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutFilter',
      request,
      metadata || {},
      methodDescriptor_Crud_PutFilter,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.Filter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Filter>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.putFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutFilter',
      request,
      metadata || {},
      methodDescriptor_Crud_PutFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodDescriptor_Crud_DelFilter = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/DelFilter',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.Filter,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Filter.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodInfo_Crud_DelFilter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Filter,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Filter.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Filter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Filter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.delFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelFilter',
      request,
      metadata || {},
      methodDescriptor_Crud_DelFilter,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Filter>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.delFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelFilter',
      request,
      metadata || {},
      methodDescriptor_Crud_DelFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.GetFiltersRequest,
 *   !proto.ui.crud.v1.GetFiltersResponse>}
 */
const methodDescriptor_Crud_GetFilters = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetFilters',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.GetFiltersRequest,
  proto.ui.crud.v1.GetFiltersResponse,
  /**
   * @param {!proto.ui.crud.v1.GetFiltersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetFiltersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.GetFiltersRequest,
 *   !proto.ui.crud.v1.GetFiltersResponse>}
 */
const methodInfo_Crud_GetFilters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.GetFiltersResponse,
  /**
   * @param {!proto.ui.crud.v1.GetFiltersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetFiltersResponse.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.GetFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.GetFiltersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.GetFiltersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getFilters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetFilters',
      request,
      metadata || {},
      methodDescriptor_Crud_GetFilters,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.GetFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.GetFiltersResponse>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getFilters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetFilters',
      request,
      metadata || {},
      methodDescriptor_Crud_GetFilters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Page>}
 */
const methodDescriptor_Crud_GetPage = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetPage',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.Page,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Page.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Page>}
 */
const methodInfo_Crud_GetPage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Page,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Page.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Page)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Page>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetPage',
      request,
      metadata || {},
      methodDescriptor_Crud_GetPage,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Page>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetPage',
      request,
      metadata || {},
      methodDescriptor_Crud_GetPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.Page,
 *   !proto.ui.crud.v1.Page>}
 */
const methodDescriptor_Crud_PutPage = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/PutPage',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.Page,
  proto.ui.crud.v1.Page,
  /**
   * @param {!proto.ui.crud.v1.Page} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Page.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.Page,
 *   !proto.ui.crud.v1.Page>}
 */
const methodInfo_Crud_PutPage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Page,
  /**
   * @param {!proto.ui.crud.v1.Page} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Page.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.Page} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Page)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Page>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.putPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutPage',
      request,
      metadata || {},
      methodDescriptor_Crud_PutPage,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.Page} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Page>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.putPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutPage',
      request,
      metadata || {},
      methodDescriptor_Crud_PutPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Page>}
 */
const methodDescriptor_Crud_DelPage = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/DelPage',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.Page,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Page.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Page>}
 */
const methodInfo_Crud_DelPage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Page,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Page.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Page)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Page>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.delPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelPage',
      request,
      metadata || {},
      methodDescriptor_Crud_DelPage,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Page>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.delPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelPage',
      request,
      metadata || {},
      methodDescriptor_Crud_DelPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.GetPagesRequest,
 *   !proto.ui.crud.v1.GetPagesResponse>}
 */
const methodDescriptor_Crud_GetPages = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetPages',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.GetPagesRequest,
  proto.ui.crud.v1.GetPagesResponse,
  /**
   * @param {!proto.ui.crud.v1.GetPagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetPagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.GetPagesRequest,
 *   !proto.ui.crud.v1.GetPagesResponse>}
 */
const methodInfo_Crud_GetPages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.GetPagesResponse,
  /**
   * @param {!proto.ui.crud.v1.GetPagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetPagesResponse.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.GetPagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.GetPagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.GetPagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getPages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetPages',
      request,
      metadata || {},
      methodDescriptor_Crud_GetPages,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.GetPagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.GetPagesResponse>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getPages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetPages',
      request,
      metadata || {},
      methodDescriptor_Crud_GetPages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.View>}
 */
const methodDescriptor_Crud_GetView = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetView',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.View,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.View.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.View>}
 */
const methodInfo_Crud_GetView = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.View,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.View.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetView',
      request,
      metadata || {},
      methodDescriptor_Crud_GetView,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.View>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetView',
      request,
      metadata || {},
      methodDescriptor_Crud_GetView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.View,
 *   !proto.ui.crud.v1.View>}
 */
const methodDescriptor_Crud_PutView = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/PutView',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.View,
  proto.ui.crud.v1.View,
  /**
   * @param {!proto.ui.crud.v1.View} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.View.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.View,
 *   !proto.ui.crud.v1.View>}
 */
const methodInfo_Crud_PutView = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.View,
  /**
   * @param {!proto.ui.crud.v1.View} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.View.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.View} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.putView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutView',
      request,
      metadata || {},
      methodDescriptor_Crud_PutView,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.View} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.View>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.putView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutView',
      request,
      metadata || {},
      methodDescriptor_Crud_PutView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.View>}
 */
const methodDescriptor_Crud_DelView = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/DelView',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.View,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.View.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.View>}
 */
const methodInfo_Crud_DelView = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.View,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.View.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.delView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelView',
      request,
      metadata || {},
      methodDescriptor_Crud_DelView,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.View>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.delView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelView',
      request,
      metadata || {},
      methodDescriptor_Crud_DelView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.GetViewsRequest,
 *   !proto.ui.crud.v1.GetViewsResponse>}
 */
const methodDescriptor_Crud_GetViews = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetViews',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.GetViewsRequest,
  proto.ui.crud.v1.GetViewsResponse,
  /**
   * @param {!proto.ui.crud.v1.GetViewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetViewsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.GetViewsRequest,
 *   !proto.ui.crud.v1.GetViewsResponse>}
 */
const methodInfo_Crud_GetViews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.GetViewsResponse,
  /**
   * @param {!proto.ui.crud.v1.GetViewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetViewsResponse.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.GetViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.GetViewsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.GetViewsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getViews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetViews',
      request,
      metadata || {},
      methodDescriptor_Crud_GetViews,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.GetViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.GetViewsResponse>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getViews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetViews',
      request,
      metadata || {},
      methodDescriptor_Crud_GetViews);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodDescriptor_Crud_GetPlugin = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetPlugin',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.Plugin,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Plugin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodInfo_Crud_GetPlugin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Plugin,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Plugin.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Plugin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Plugin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getPlugin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetPlugin',
      request,
      metadata || {},
      methodDescriptor_Crud_GetPlugin,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Plugin>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getPlugin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetPlugin',
      request,
      metadata || {},
      methodDescriptor_Crud_GetPlugin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.Plugin,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodDescriptor_Crud_PutPlugin = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/PutPlugin',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.Plugin,
  proto.ui.crud.v1.Plugin,
  /**
   * @param {!proto.ui.crud.v1.Plugin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Plugin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.Plugin,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodInfo_Crud_PutPlugin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Plugin,
  /**
   * @param {!proto.ui.crud.v1.Plugin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Plugin.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.Plugin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Plugin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Plugin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.putPlugin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutPlugin',
      request,
      metadata || {},
      methodDescriptor_Crud_PutPlugin,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.Plugin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Plugin>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.putPlugin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutPlugin',
      request,
      metadata || {},
      methodDescriptor_Crud_PutPlugin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodDescriptor_Crud_DelPlugin = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/DelPlugin',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.Plugin,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Plugin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodInfo_Crud_DelPlugin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.Plugin,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.Plugin.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Plugin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Plugin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.delPlugin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelPlugin',
      request,
      metadata || {},
      methodDescriptor_Crud_DelPlugin,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Plugin>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.delPlugin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelPlugin',
      request,
      metadata || {},
      methodDescriptor_Crud_DelPlugin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.GetPluginsRequest,
 *   !proto.ui.crud.v1.GetPluginsResponse>}
 */
const methodDescriptor_Crud_GetPlugins = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetPlugins',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.GetPluginsRequest,
  proto.ui.crud.v1.GetPluginsResponse,
  /**
   * @param {!proto.ui.crud.v1.GetPluginsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetPluginsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.GetPluginsRequest,
 *   !proto.ui.crud.v1.GetPluginsResponse>}
 */
const methodInfo_Crud_GetPlugins = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.GetPluginsResponse,
  /**
   * @param {!proto.ui.crud.v1.GetPluginsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetPluginsResponse.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.GetPluginsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.GetPluginsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.GetPluginsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getPlugins =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetPlugins',
      request,
      metadata || {},
      methodDescriptor_Crud_GetPlugins,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.GetPluginsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.GetPluginsResponse>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getPlugins =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetPlugins',
      request,
      metadata || {},
      methodDescriptor_Crud_GetPlugins);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.ViewOverride>}
 */
const methodDescriptor_Crud_GetViewOverride = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetViewOverride',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.ViewOverride,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.ViewOverride.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.ViewOverride>}
 */
const methodInfo_Crud_GetViewOverride = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.ViewOverride,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.ViewOverride.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.ViewOverride)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.ViewOverride>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getViewOverride =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetViewOverride',
      request,
      metadata || {},
      methodDescriptor_Crud_GetViewOverride,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.ViewOverride>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getViewOverride =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetViewOverride',
      request,
      metadata || {},
      methodDescriptor_Crud_GetViewOverride);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.ViewOverride,
 *   !proto.ui.crud.v1.ViewOverride>}
 */
const methodDescriptor_Crud_PutViewOverride = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/PutViewOverride',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.ViewOverride,
  proto.ui.crud.v1.ViewOverride,
  /**
   * @param {!proto.ui.crud.v1.ViewOverride} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.ViewOverride.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.ViewOverride,
 *   !proto.ui.crud.v1.ViewOverride>}
 */
const methodInfo_Crud_PutViewOverride = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.ViewOverride,
  /**
   * @param {!proto.ui.crud.v1.ViewOverride} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.ViewOverride.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.ViewOverride} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.ViewOverride)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.ViewOverride>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.putViewOverride =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutViewOverride',
      request,
      metadata || {},
      methodDescriptor_Crud_PutViewOverride,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.ViewOverride} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.ViewOverride>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.putViewOverride =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/PutViewOverride',
      request,
      metadata || {},
      methodDescriptor_Crud_PutViewOverride);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.ViewOverride>}
 */
const methodDescriptor_Crud_DelViewOverride = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/DelViewOverride',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  proto.ui.crud.v1.ViewOverride,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.ViewOverride.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ui.crud.v1.ViewOverride>}
 */
const methodInfo_Crud_DelViewOverride = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.ViewOverride,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.ViewOverride.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.ViewOverride)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.ViewOverride>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.delViewOverride =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelViewOverride',
      request,
      metadata || {},
      methodDescriptor_Crud_DelViewOverride,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.ViewOverride>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.delViewOverride =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/DelViewOverride',
      request,
      metadata || {},
      methodDescriptor_Crud_DelViewOverride);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.crud.v1.GetViewOverridesRequest,
 *   !proto.ui.crud.v1.GetViewOverridesResponse>}
 */
const methodDescriptor_Crud_GetViewOverrides = new grpc.web.MethodDescriptor(
  '/ui.crud.v1.Crud/GetViewOverrides',
  grpc.web.MethodType.UNARY,
  proto.ui.crud.v1.GetViewOverridesRequest,
  proto.ui.crud.v1.GetViewOverridesResponse,
  /**
   * @param {!proto.ui.crud.v1.GetViewOverridesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetViewOverridesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.crud.v1.GetViewOverridesRequest,
 *   !proto.ui.crud.v1.GetViewOverridesResponse>}
 */
const methodInfo_Crud_GetViewOverrides = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.crud.v1.GetViewOverridesResponse,
  /**
   * @param {!proto.ui.crud.v1.GetViewOverridesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.crud.v1.GetViewOverridesResponse.deserializeBinary
);


/**
 * @param {!proto.ui.crud.v1.GetViewOverridesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.GetViewOverridesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.GetViewOverridesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.crud.v1.CrudClient.prototype.getViewOverrides =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetViewOverrides',
      request,
      metadata || {},
      methodDescriptor_Crud_GetViewOverrides,
      callback);
};


/**
 * @param {!proto.ui.crud.v1.GetViewOverridesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.GetViewOverridesResponse>}
 *     Promise that resolves to the response
 */
proto.ui.crud.v1.CrudPromiseClient.prototype.getViewOverrides =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.crud.v1.Crud/GetViewOverrides',
      request,
      metadata || {},
      methodDescriptor_Crud_GetViewOverrides);
};


module.exports = proto.ui.crud.v1;

