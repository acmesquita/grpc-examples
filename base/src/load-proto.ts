import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoder from '@grpc/proto-loader'
// import { ChatHandlers } from './proto/package/Chat'
// import { ProtoGrpcType } from './proto/chat'
// import { TalkRequest } from './proto/package/TalkRequest'
// import { TalkResponse } from './proto/package/TalkResponse'

const HOST = '0.0.0.0:8082'
const PROTO_FILE = path.resolve(__dirname, 'proto', 'chat.proto')

const packegeDef = protoLoder.loadSync(PROTO_FILE)
const grpcObj = grpc.loadPackageDefinition(packegeDef) as unknown // as ProtoGrpcType
// const chatPackage = grpcObj.chatPackage

export {
  grpc,
  HOST,
  // chatPackage,
  // ChatHandlers,
  // TalkRequest,
  // TalkResponse
}