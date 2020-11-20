
import {
    ExtensionRange,
    ReservedRange,
} from 'google.protobuf.DescriptorProto'

import {
    EnumReservedRange,
} from 'google.protobuf.EnumDescriptorProto'

import {
    Label,
    Type,
} from 'google.protobuf.FieldDescriptorProto'

import {
    CType,
    JSType,
} from 'google.protobuf.FieldOptions'

import {
    OptimizeMode,
} from 'google.protobuf.FileOptions'

import {
    Annotation,
} from 'google.protobuf.GeneratedCodeInfo'

import {
    IdempotencyLevel,
} from 'google.protobuf.MethodOptions'

import {
    Location,
} from 'google.protobuf.SourceCodeInfo'

import {
    NamePart,
} from 'google.protobuf.UninterpretedOption'


export type FileDescriptorSet = {
    file: Array<FileDescriptorProto>,
}

export type FileDescriptorProto = {
    name: string,
    package: string,
    dependency: Array<string>,
    public_dependency: Array<number>,
    weak_dependency: Array<number>,
    message_type: Array<DescriptorProto>,
    enum_type: Array<EnumDescriptorProto>,
    service: Array<ServiceDescriptorProto>,
    extension: Array<FieldDescriptorProto>,
    options: FileOptions,
    source_code_info: SourceCodeInfo,
    syntax: string,
}

export type DescriptorProto = {
    name: string,
    field: Array<FieldDescriptorProto>,
    extension: Array<FieldDescriptorProto>,
    nested_type: Array<DescriptorProto>,
    enum_type: Array<EnumDescriptorProto>,
    extension_range: Array<ExtensionRange>,
    oneof_decl: Array<OneofDescriptorProto>,
    options: MessageOptions,
    reserved_range: Array<ReservedRange>,
    reserved_name: Array<string>,
}

export type ExtensionRangeOptions = {
    uninterpreted_option: Array<UninterpretedOption>,
}

export type FieldDescriptorProto = {
    name: string,
    number: number,
    label: Label,
    type: Type,
    type_name: string,
    extendee: string,
    default_value: string,
    oneof_index: number,
    json_name: string,
    options: FieldOptions,
    proto3_optional: boolean,
}

export type OneofDescriptorProto = {
    name: string,
    options: OneofOptions,
}

export type EnumDescriptorProto = {
    name: string,
    value: Array<EnumValueDescriptorProto>,
    options: EnumOptions,
    reserved_range: Array<EnumReservedRange>,
    reserved_name: Array<string>,
}

export type EnumValueDescriptorProto = {
    name: string,
    number: number,
    options: EnumValueOptions,
}

export type ServiceDescriptorProto = {
    name: string,
    method: Array<MethodDescriptorProto>,
    options: ServiceOptions,
}

export type MethodDescriptorProto = {
    name: string,
    input_type: string,
    output_type: string,
    options: MethodOptions,
    client_streaming: boolean,
    server_streaming: boolean,
}

export type FileOptions = {
    java_package: string,
    java_outer_classname: string,
    java_multiple_files: boolean,
    java_generate_equals_and_hash: boolean,
    java_string_check_utf8: boolean,
    optimize_for: OptimizeMode,
    go_package: string,
    cc_generic_services: boolean,
    java_generic_services: boolean,
    py_generic_services: boolean,
    php_generic_services: boolean,
    deprecated: boolean,
    cc_enable_arenas: boolean,
    objc_class_prefix: string,
    csharp_namespace: string,
    swift_prefix: string,
    php_class_prefix: string,
    php_namespace: string,
    php_metadata_namespace: string,
    ruby_package: string,
    uninterpreted_option: Array<UninterpretedOption>,
}

export type MessageOptions = {
    message_set_wire_format: boolean,
    no_standard_descriptor_accessor: boolean,
    deprecated: boolean,
    map_entry: boolean,
    uninterpreted_option: Array<UninterpretedOption>,
}

export type FieldOptions = {
    ctype: CType,
    packed: boolean,
    jstype: JSType,
    lazy: boolean,
    deprecated: boolean,
    weak: boolean,
    uninterpreted_option: Array<UninterpretedOption>,
}

export type OneofOptions = {
    uninterpreted_option: Array<UninterpretedOption>,
}

export type EnumOptions = {
    allow_alias: boolean,
    deprecated: boolean,
    uninterpreted_option: Array<UninterpretedOption>,
}

export type EnumValueOptions = {
    deprecated: boolean,
    uninterpreted_option: Array<UninterpretedOption>,
}

export type ServiceOptions = {
    deprecated: boolean,
    uninterpreted_option: Array<UninterpretedOption>,
}

export type MethodOptions = {
    deprecated: boolean,
    idempotency_level: IdempotencyLevel,
    uninterpreted_option: Array<UninterpretedOption>,
}

export type UninterpretedOption = {
    name: Array<NamePart>,
    identifier_value: string,
    positive_int_value: number,
    negative_int_value: number,
    double_value: number,
    string_value: bytes,
    aggregate_value: string,
}

export type SourceCodeInfo = {
    location: Array<Location>,
}

export type GeneratedCodeInfo = {
    annotation: Array<Annotation>,
}

