# gRPC

## Comunicação entre aplicações

- SOAP (xml)
- REST (json)
- GraphQL* (json)
- RPC (binário)
- WebSocket

## o que é gRPC?

Framework desenvolvido pelo Google, que implementa o HTTP/2 e por meio de chamadas de funções simples envia e recebe informações entre cliente e servidor.

## Por que e quando utilizar esse meio de comunicação?

1. gRPC é altamente compactado e eficiente para serializar dados estruturados, utilizando o formato de mensagem protobuf (buffers de protocolo)
2. As APIs baseadas em RPC são ótimas para ações (ou seja, procedimentos ou comandos) e, como veremos mais adiante, em alguns contextos, pode servir como uma alternativa mais eficiente do que uma API REST.
3. Protobuf em vez de JSON / XML
4. Construído em HTTP 2 em vez de HTTP 1.1
5. Transmissão de mensagens 7 a 10 vezes mais rápida

## Tipo de comunicações utilizando gRPC

- Unilateral
- Server stream
- Client stream
- Bilateral

## Mão na massa

- Exemplo unilateral: `example-ping-pong`
- Exemplo server stream: `example-random-number`
- Exemplo client stream: `example-batch-insert`
- Exemplo bilateral: `example-chat`

## Referências

- [gRPC: o que é e como utilizá-lo na sua próxima aplicação](https://www.zup.com.br/blog/grpc-o-que-e-beagle) - 22 jul 2021
- [TDot Code](https://www.youtube.com/channel/UCUwA7VxRo-uw2eQJ52EkKlQ) - Canal no YouTube com vários exemplos
- [Introdução a gRPC: comunicação performática entre microsserviços c/ Rafael Ponte |💻Zup Open Talks🚀](https://www.youtube.com/watch?v=r8gOKuWgNvw) - Vídeo no YouTub sobre gRPC
- [gRPC ou REST: qual utilizar?](https://vertigo.com.br/grpc-ou-rest-qual-utilizar/#:~:text=gRPC%20(Google%20Remote%20Procedure%20Call)&text=Ela%20permite%20que%20os%20desenvolvedores,eficiente%20para%20serializar%20dados%20estruturados.)
