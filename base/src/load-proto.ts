import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoder from '@grpc/proto-loader'
// import { ChatHandlers } from './proto/chatPackage/Chat'
// import { ProtoGrpcType } from './proto/chat'
// import { TalkRequest } from './proto/chatPackage/TalkRequest'
// import { TalkResponse } from './proto/chatPackage/TalkResponse'

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