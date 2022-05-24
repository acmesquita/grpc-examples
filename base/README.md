<h1 align="center">
  <img width="150px" src="https://user-images.githubusercontent.com/15862643/170051637-c0cb75d8-236d-4c94-9d42-78cebecfd530.png" />
</h1>

## 💻 Instalação

Por questão de facilitação e compartilhamento de arquivos, o servidor e o cliente estão no mesmo projeto.
Mas vale ressaltar que eles podem está em projetos separados e serem até em linguagem diferentes.

**Instalação de dependências**

```
yarn install
```

**Rodar o servidor**

```
yarn server
```

**Rodar o cliente**

```
yarn client
```

**Rodar a geração dos tipos**

```
yarn proto:gen
```

## 📁 Estrutura base do projeto

```tree
├── package.json
├── proto-gen.sh
├── README.md
├── src
|  ├── client.ts
|  ├── load-proto.ts
|  ├── proto
|  |   └── base.proto
|  └── server.ts
└── yarn.lock
```

A base do projeto ficou uma pasta `src` onde possui uma abstração de carregamento do proto no arquivo `load-proto.ts` e facilita o uso tanto no servidor quanto no cliente.
O arquivo `proto-gen.sh` fica o script para geração da tipagem e todas as tipagens geradas irão para a pasta `proto`.

## 🧑‍💻 Tecnologias

- gRPC
- Typesrcipt
