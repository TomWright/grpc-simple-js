import * as jspb from 'google-protobuf'



export class MatchedStringValue extends jspb.Message {
  getStrategy(): MatchStrategy;
  setStrategy(value: MatchStrategy): MatchedStringValue;

  getValue(): string;
  setValue(value: string): MatchedStringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchedStringValue.AsObject;
  static toObject(includeInstance: boolean, msg: MatchedStringValue): MatchedStringValue.AsObject;
  static serializeBinaryToWriter(message: MatchedStringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchedStringValue;
  static deserializeBinaryFromReader(message: MatchedStringValue, reader: jspb.BinaryReader): MatchedStringValue;
}

export namespace MatchedStringValue {
  export type AsObject = {
    strategy: MatchStrategy,
    value: string,
  }
}

export enum MatchStrategy { 
  UNKNOWN_MATCH_STRATEGY = 0,
  MATCH_EXACT = 1,
  MATCH_EXACT_AND_NULL = 2,
  MATCH_NULL_ONLY = 3,
  MATCH_ANY = 4,
}
