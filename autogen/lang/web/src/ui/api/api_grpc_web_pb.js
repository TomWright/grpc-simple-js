/**
 * @fileoverview gRPC-Web generated client stub for ui.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');



var src_ui_crud_api_pb = require('../../ui/crud/api_pb.js')

var src_platform_query_match_strategy_pb = require('../../platform/query/match_strategy_pb.js')
const proto = {};
proto.ui = {};
proto.ui.api = {};
proto.ui.api.v1 = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ui.api.v1.UIApiClient =
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
proto.ui.api.v1.UIApiPromiseClient =
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
 *   !proto.ui.api.v1.NewResourceRequest,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodDescriptor_UIApi_NewResource = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/NewResource',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.NewResourceRequest,
  src_ui_crud_api_pb.Resource,
  /**
   * @param {!proto.ui.api.v1.NewResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Resource.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.NewResourceRequest,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodInfo_UIApi_NewResource = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Resource,
  /**
   * @param {!proto.ui.api.v1.NewResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Resource.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.NewResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Resource)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Resource>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.newResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewResource',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewResource,
      callback);
};


/**
 * @param {!proto.ui.api.v1.NewResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Resource>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.newResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewResource',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetResourceRequest,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodDescriptor_UIApi_GetResource = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetResource',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetResourceRequest,
  src_ui_crud_api_pb.Resource,
  /**
   * @param {!proto.ui.api.v1.GetResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Resource.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetResourceRequest,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodInfo_UIApi_GetResource = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Resource,
  /**
   * @param {!proto.ui.api.v1.GetResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Resource.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Resource)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Resource>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetResource',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetResource,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Resource>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetResource',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.PutResourceRequest,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodDescriptor_UIApi_PutResource = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/PutResource',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.PutResourceRequest,
  src_ui_crud_api_pb.Resource,
  /**
   * @param {!proto.ui.api.v1.PutResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Resource.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.PutResourceRequest,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodInfo_UIApi_PutResource = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Resource,
  /**
   * @param {!proto.ui.api.v1.PutResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Resource.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.PutResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Resource)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Resource>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.putResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutResource',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutResource,
      callback);
};


/**
 * @param {!proto.ui.api.v1.PutResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Resource>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.putResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutResource',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.DelResourceRequest,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodDescriptor_UIApi_DelResource = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/DelResource',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.DelResourceRequest,
  src_ui_crud_api_pb.Resource,
  /**
   * @param {!proto.ui.api.v1.DelResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Resource.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.DelResourceRequest,
 *   !proto.ui.crud.v1.Resource>}
 */
const methodInfo_UIApi_DelResource = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Resource,
  /**
   * @param {!proto.ui.api.v1.DelResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Resource.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.DelResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Resource)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Resource>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.delResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelResource',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelResource,
      callback);
};


/**
 * @param {!proto.ui.api.v1.DelResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Resource>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.delResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelResource',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetResourcesRequest,
 *   !proto.ui.api.v1.GetResourcesResponse>}
 */
const methodDescriptor_UIApi_GetResources = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetResources',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetResourcesRequest,
  proto.ui.api.v1.GetResourcesResponse,
  /**
   * @param {!proto.ui.api.v1.GetResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetResourcesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetResourcesRequest,
 *   !proto.ui.api.v1.GetResourcesResponse>}
 */
const methodInfo_UIApi_GetResources = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.api.v1.GetResourcesResponse,
  /**
   * @param {!proto.ui.api.v1.GetResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetResourcesResponse.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.api.v1.GetResourcesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.api.v1.GetResourcesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getResources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetResources',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetResources,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.api.v1.GetResourcesResponse>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getResources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetResources',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetResources);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.NewListRequest,
 *   !proto.ui.crud.v1.List>}
 */
const methodDescriptor_UIApi_NewList = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/NewList',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.NewListRequest,
  src_ui_crud_api_pb.List,
  /**
   * @param {!proto.ui.api.v1.NewListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.List.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.NewListRequest,
 *   !proto.ui.crud.v1.List>}
 */
const methodInfo_UIApi_NewList = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.List,
  /**
   * @param {!proto.ui.api.v1.NewListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.List.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.NewListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.newList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewList',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewList,
      callback);
};


/**
 * @param {!proto.ui.api.v1.NewListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.List>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.newList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewList',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetListRequest,
 *   !proto.ui.crud.v1.List>}
 */
const methodDescriptor_UIApi_GetList = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetList',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetListRequest,
  src_ui_crud_api_pb.List,
  /**
   * @param {!proto.ui.api.v1.GetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.List.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetListRequest,
 *   !proto.ui.crud.v1.List>}
 */
const methodInfo_UIApi_GetList = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.List,
  /**
   * @param {!proto.ui.api.v1.GetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.List.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetList',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetList,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.List>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetList',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.PutListRequest,
 *   !proto.ui.crud.v1.List>}
 */
const methodDescriptor_UIApi_PutList = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/PutList',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.PutListRequest,
  src_ui_crud_api_pb.List,
  /**
   * @param {!proto.ui.api.v1.PutListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.List.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.PutListRequest,
 *   !proto.ui.crud.v1.List>}
 */
const methodInfo_UIApi_PutList = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.List,
  /**
   * @param {!proto.ui.api.v1.PutListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.List.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.PutListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.putList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutList',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutList,
      callback);
};


/**
 * @param {!proto.ui.api.v1.PutListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.List>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.putList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutList',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.DelListRequest,
 *   !proto.ui.crud.v1.List>}
 */
const methodDescriptor_UIApi_DelList = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/DelList',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.DelListRequest,
  src_ui_crud_api_pb.List,
  /**
   * @param {!proto.ui.api.v1.DelListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.List.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.DelListRequest,
 *   !proto.ui.crud.v1.List>}
 */
const methodInfo_UIApi_DelList = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.List,
  /**
   * @param {!proto.ui.api.v1.DelListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.List.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.DelListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.delList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelList',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelList,
      callback);
};


/**
 * @param {!proto.ui.api.v1.DelListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.List>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.delList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelList',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetListsRequest,
 *   !proto.ui.api.v1.GetListsResponse>}
 */
const methodDescriptor_UIApi_GetLists = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetLists',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetListsRequest,
  proto.ui.api.v1.GetListsResponse,
  /**
   * @param {!proto.ui.api.v1.GetListsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetListsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetListsRequest,
 *   !proto.ui.api.v1.GetListsResponse>}
 */
const methodInfo_UIApi_GetLists = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.api.v1.GetListsResponse,
  /**
   * @param {!proto.ui.api.v1.GetListsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetListsResponse.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetListsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.api.v1.GetListsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.api.v1.GetListsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getLists =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetLists',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetLists,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetListsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.api.v1.GetListsResponse>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getLists =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetLists',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetLists);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.NewFilterRequest,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodDescriptor_UIApi_NewFilter = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/NewFilter',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.NewFilterRequest,
  src_ui_crud_api_pb.Filter,
  /**
   * @param {!proto.ui.api.v1.NewFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Filter.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.NewFilterRequest,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodInfo_UIApi_NewFilter = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Filter,
  /**
   * @param {!proto.ui.api.v1.NewFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Filter.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.NewFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Filter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Filter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.newFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewFilter',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewFilter,
      callback);
};


/**
 * @param {!proto.ui.api.v1.NewFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Filter>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.newFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewFilter',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetFilterRequest,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodDescriptor_UIApi_GetFilter = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetFilter',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetFilterRequest,
  src_ui_crud_api_pb.Filter,
  /**
   * @param {!proto.ui.api.v1.GetFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Filter.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetFilterRequest,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodInfo_UIApi_GetFilter = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Filter,
  /**
   * @param {!proto.ui.api.v1.GetFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Filter.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Filter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Filter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetFilter',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetFilter,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Filter>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetFilter',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.PutFilterRequest,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodDescriptor_UIApi_PutFilter = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/PutFilter',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.PutFilterRequest,
  src_ui_crud_api_pb.Filter,
  /**
   * @param {!proto.ui.api.v1.PutFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Filter.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.PutFilterRequest,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodInfo_UIApi_PutFilter = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Filter,
  /**
   * @param {!proto.ui.api.v1.PutFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Filter.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.PutFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Filter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Filter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.putFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutFilter',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutFilter,
      callback);
};


/**
 * @param {!proto.ui.api.v1.PutFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Filter>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.putFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutFilter',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.DelFilterRequest,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodDescriptor_UIApi_DelFilter = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/DelFilter',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.DelFilterRequest,
  src_ui_crud_api_pb.Filter,
  /**
   * @param {!proto.ui.api.v1.DelFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Filter.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.DelFilterRequest,
 *   !proto.ui.crud.v1.Filter>}
 */
const methodInfo_UIApi_DelFilter = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Filter,
  /**
   * @param {!proto.ui.api.v1.DelFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Filter.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.DelFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Filter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Filter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.delFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelFilter',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelFilter,
      callback);
};


/**
 * @param {!proto.ui.api.v1.DelFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Filter>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.delFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelFilter',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetFiltersRequest,
 *   !proto.ui.api.v1.GetFiltersResponse>}
 */
const methodDescriptor_UIApi_GetFilters = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetFilters',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetFiltersRequest,
  proto.ui.api.v1.GetFiltersResponse,
  /**
   * @param {!proto.ui.api.v1.GetFiltersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetFiltersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetFiltersRequest,
 *   !proto.ui.api.v1.GetFiltersResponse>}
 */
const methodInfo_UIApi_GetFilters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.api.v1.GetFiltersResponse,
  /**
   * @param {!proto.ui.api.v1.GetFiltersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetFiltersResponse.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.api.v1.GetFiltersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.api.v1.GetFiltersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getFilters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetFilters',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetFilters,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.api.v1.GetFiltersResponse>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getFilters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetFilters',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetFilters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.NewPageRequest,
 *   !proto.ui.crud.v1.Page>}
 */
const methodDescriptor_UIApi_NewPage = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/NewPage',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.NewPageRequest,
  src_ui_crud_api_pb.Page,
  /**
   * @param {!proto.ui.api.v1.NewPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Page.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.NewPageRequest,
 *   !proto.ui.crud.v1.Page>}
 */
const methodInfo_UIApi_NewPage = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Page,
  /**
   * @param {!proto.ui.api.v1.NewPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Page.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.NewPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Page)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Page>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.newPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewPage',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewPage,
      callback);
};


/**
 * @param {!proto.ui.api.v1.NewPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Page>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.newPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewPage',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetPageRequest,
 *   !proto.ui.crud.v1.Page>}
 */
const methodDescriptor_UIApi_GetPage = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetPage',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetPageRequest,
  src_ui_crud_api_pb.Page,
  /**
   * @param {!proto.ui.api.v1.GetPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Page.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetPageRequest,
 *   !proto.ui.crud.v1.Page>}
 */
const methodInfo_UIApi_GetPage = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Page,
  /**
   * @param {!proto.ui.api.v1.GetPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Page.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Page)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Page>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetPage',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetPage,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Page>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetPage',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.PutPageRequest,
 *   !proto.ui.crud.v1.Page>}
 */
const methodDescriptor_UIApi_PutPage = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/PutPage',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.PutPageRequest,
  src_ui_crud_api_pb.Page,
  /**
   * @param {!proto.ui.api.v1.PutPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Page.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.PutPageRequest,
 *   !proto.ui.crud.v1.Page>}
 */
const methodInfo_UIApi_PutPage = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Page,
  /**
   * @param {!proto.ui.api.v1.PutPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Page.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.PutPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Page)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Page>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.putPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutPage',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutPage,
      callback);
};


/**
 * @param {!proto.ui.api.v1.PutPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Page>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.putPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutPage',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.DelPageRequest,
 *   !proto.ui.crud.v1.Page>}
 */
const methodDescriptor_UIApi_DelPage = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/DelPage',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.DelPageRequest,
  src_ui_crud_api_pb.Page,
  /**
   * @param {!proto.ui.api.v1.DelPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Page.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.DelPageRequest,
 *   !proto.ui.crud.v1.Page>}
 */
const methodInfo_UIApi_DelPage = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Page,
  /**
   * @param {!proto.ui.api.v1.DelPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Page.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.DelPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Page)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Page>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.delPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelPage',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelPage,
      callback);
};


/**
 * @param {!proto.ui.api.v1.DelPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Page>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.delPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelPage',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetPagesRequest,
 *   !proto.ui.api.v1.GetPagesResponse>}
 */
const methodDescriptor_UIApi_GetPages = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetPages',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetPagesRequest,
  proto.ui.api.v1.GetPagesResponse,
  /**
   * @param {!proto.ui.api.v1.GetPagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetPagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetPagesRequest,
 *   !proto.ui.api.v1.GetPagesResponse>}
 */
const methodInfo_UIApi_GetPages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.api.v1.GetPagesResponse,
  /**
   * @param {!proto.ui.api.v1.GetPagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetPagesResponse.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetPagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.api.v1.GetPagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.api.v1.GetPagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getPages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetPages',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetPages,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetPagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.api.v1.GetPagesResponse>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getPages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetPages',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetPages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.NewViewRequest,
 *   !proto.ui.crud.v1.View>}
 */
const methodDescriptor_UIApi_NewView = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/NewView',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.NewViewRequest,
  src_ui_crud_api_pb.View,
  /**
   * @param {!proto.ui.api.v1.NewViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.View.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.NewViewRequest,
 *   !proto.ui.crud.v1.View>}
 */
const methodInfo_UIApi_NewView = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.View,
  /**
   * @param {!proto.ui.api.v1.NewViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.View.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.NewViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.newView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewView',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewView,
      callback);
};


/**
 * @param {!proto.ui.api.v1.NewViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.View>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.newView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewView',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetViewRequest,
 *   !proto.ui.crud.v1.View>}
 */
const methodDescriptor_UIApi_GetView = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetView',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetViewRequest,
  src_ui_crud_api_pb.View,
  /**
   * @param {!proto.ui.api.v1.GetViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.View.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetViewRequest,
 *   !proto.ui.crud.v1.View>}
 */
const methodInfo_UIApi_GetView = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.View,
  /**
   * @param {!proto.ui.api.v1.GetViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.View.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetView',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetView,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.View>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetView',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.PutViewRequest,
 *   !proto.ui.crud.v1.View>}
 */
const methodDescriptor_UIApi_PutView = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/PutView',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.PutViewRequest,
  src_ui_crud_api_pb.View,
  /**
   * @param {!proto.ui.api.v1.PutViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.View.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.PutViewRequest,
 *   !proto.ui.crud.v1.View>}
 */
const methodInfo_UIApi_PutView = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.View,
  /**
   * @param {!proto.ui.api.v1.PutViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.View.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.PutViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.putView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutView',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutView,
      callback);
};


/**
 * @param {!proto.ui.api.v1.PutViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.View>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.putView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutView',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.DelViewRequest,
 *   !proto.ui.crud.v1.View>}
 */
const methodDescriptor_UIApi_DelView = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/DelView',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.DelViewRequest,
  src_ui_crud_api_pb.View,
  /**
   * @param {!proto.ui.api.v1.DelViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.View.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.DelViewRequest,
 *   !proto.ui.crud.v1.View>}
 */
const methodInfo_UIApi_DelView = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.View,
  /**
   * @param {!proto.ui.api.v1.DelViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.View.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.DelViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.delView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelView',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelView,
      callback);
};


/**
 * @param {!proto.ui.api.v1.DelViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.View>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.delView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelView',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetViewsRequest,
 *   !proto.ui.api.v1.GetViewsResponse>}
 */
const methodDescriptor_UIApi_GetViews = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetViews',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetViewsRequest,
  proto.ui.api.v1.GetViewsResponse,
  /**
   * @param {!proto.ui.api.v1.GetViewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetViewsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetViewsRequest,
 *   !proto.ui.api.v1.GetViewsResponse>}
 */
const methodInfo_UIApi_GetViews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.api.v1.GetViewsResponse,
  /**
   * @param {!proto.ui.api.v1.GetViewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetViewsResponse.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.api.v1.GetViewsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.api.v1.GetViewsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getViews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetViews',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetViews,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.api.v1.GetViewsResponse>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getViews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetViews',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetViews);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.NewPluginRequest,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodDescriptor_UIApi_NewPlugin = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/NewPlugin',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.NewPluginRequest,
  src_ui_crud_api_pb.Plugin,
  /**
   * @param {!proto.ui.api.v1.NewPluginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Plugin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.NewPluginRequest,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodInfo_UIApi_NewPlugin = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Plugin,
  /**
   * @param {!proto.ui.api.v1.NewPluginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Plugin.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.NewPluginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Plugin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Plugin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.newPlugin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewPlugin',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewPlugin,
      callback);
};


/**
 * @param {!proto.ui.api.v1.NewPluginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Plugin>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.newPlugin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/NewPlugin',
      request,
      metadata || {},
      methodDescriptor_UIApi_NewPlugin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetPluginRequest,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodDescriptor_UIApi_GetPlugin = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetPlugin',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetPluginRequest,
  src_ui_crud_api_pb.Plugin,
  /**
   * @param {!proto.ui.api.v1.GetPluginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Plugin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetPluginRequest,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodInfo_UIApi_GetPlugin = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Plugin,
  /**
   * @param {!proto.ui.api.v1.GetPluginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Plugin.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetPluginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Plugin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Plugin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getPlugin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetPlugin',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetPlugin,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetPluginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Plugin>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getPlugin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetPlugin',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetPlugin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.PutPluginRequest,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodDescriptor_UIApi_PutPlugin = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/PutPlugin',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.PutPluginRequest,
  src_ui_crud_api_pb.Plugin,
  /**
   * @param {!proto.ui.api.v1.PutPluginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Plugin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.PutPluginRequest,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodInfo_UIApi_PutPlugin = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Plugin,
  /**
   * @param {!proto.ui.api.v1.PutPluginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Plugin.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.PutPluginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Plugin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Plugin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.putPlugin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutPlugin',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutPlugin,
      callback);
};


/**
 * @param {!proto.ui.api.v1.PutPluginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Plugin>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.putPlugin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/PutPlugin',
      request,
      metadata || {},
      methodDescriptor_UIApi_PutPlugin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.DelPluginRequest,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodDescriptor_UIApi_DelPlugin = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/DelPlugin',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.DelPluginRequest,
  src_ui_crud_api_pb.Plugin,
  /**
   * @param {!proto.ui.api.v1.DelPluginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Plugin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.DelPluginRequest,
 *   !proto.ui.crud.v1.Plugin>}
 */
const methodInfo_UIApi_DelPlugin = new grpc.web.AbstractClientBase.MethodInfo(
  src_ui_crud_api_pb.Plugin,
  /**
   * @param {!proto.ui.api.v1.DelPluginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_ui_crud_api_pb.Plugin.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.DelPluginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.crud.v1.Plugin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.crud.v1.Plugin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.delPlugin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelPlugin',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelPlugin,
      callback);
};


/**
 * @param {!proto.ui.api.v1.DelPluginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.crud.v1.Plugin>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.delPlugin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/DelPlugin',
      request,
      metadata || {},
      methodDescriptor_UIApi_DelPlugin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetPluginsRequest,
 *   !proto.ui.api.v1.GetPluginsResponse>}
 */
const methodDescriptor_UIApi_GetPlugins = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetPlugins',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetPluginsRequest,
  proto.ui.api.v1.GetPluginsResponse,
  /**
   * @param {!proto.ui.api.v1.GetPluginsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetPluginsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetPluginsRequest,
 *   !proto.ui.api.v1.GetPluginsResponse>}
 */
const methodInfo_UIApi_GetPlugins = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.api.v1.GetPluginsResponse,
  /**
   * @param {!proto.ui.api.v1.GetPluginsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetPluginsResponse.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetPluginsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.api.v1.GetPluginsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.api.v1.GetPluginsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getPlugins =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetPlugins',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetPlugins,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetPluginsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.api.v1.GetPluginsResponse>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getPlugins =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetPlugins',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetPlugins);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ui.api.v1.GetUIRequest,
 *   !proto.ui.api.v1.GetUIResponse>}
 */
const methodDescriptor_UIApi_GetUI = new grpc.web.MethodDescriptor(
  '/ui.api.v1.UIApi/GetUI',
  grpc.web.MethodType.UNARY,
  proto.ui.api.v1.GetUIRequest,
  proto.ui.api.v1.GetUIResponse,
  /**
   * @param {!proto.ui.api.v1.GetUIRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetUIResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ui.api.v1.GetUIRequest,
 *   !proto.ui.api.v1.GetUIResponse>}
 */
const methodInfo_UIApi_GetUI = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ui.api.v1.GetUIResponse,
  /**
   * @param {!proto.ui.api.v1.GetUIRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ui.api.v1.GetUIResponse.deserializeBinary
);


/**
 * @param {!proto.ui.api.v1.GetUIRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ui.api.v1.GetUIResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ui.api.v1.GetUIResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ui.api.v1.UIApiClient.prototype.getUI =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetUI',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetUI,
      callback);
};


/**
 * @param {!proto.ui.api.v1.GetUIRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ui.api.v1.GetUIResponse>}
 *     Promise that resolves to the response
 */
proto.ui.api.v1.UIApiPromiseClient.prototype.getUI =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ui.api.v1.UIApi/GetUI',
      request,
      metadata || {},
      methodDescriptor_UIApi_GetUI);
};


module.exports = proto.ui.api.v1;

