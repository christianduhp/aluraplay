# Aluraplay

Este é o repositório da plataforma de vídeos, um projeto que funciona através de uma API. A plataforma permite ao usuário visualizar uma lista de vídeos e realizar pesquisas por palavras-chave. 

## Funcionalidades

- Visualizar lista de vídeos: A plataforma exibe uma lista de vídeos disponíveis para visualização.
- Pesquisar vídeos: O usuário pode pesquisar vídeos por palavras-chave no campo de pesquisa.
- Adicionar novos vídeos (apenas com conexão ao servidor): O usuário tem a opção de adicionar novos vídeos utilizando o método POST, caso esteja conectado ao servidor.

## Pré-requisitos

- Node.js: Certifique-se de ter o Node.js instalado em seu computador. Você pode fazer o download e obter instruções de instalação em [nodejs.org](https://nodejs.org/).

## Instalação

Siga as etapas abaixo para instalar e executar o projeto em seu computador:

1. Clone este repositório em sua máquina local.

```shell
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Navegue até o diretório do projeto.

```shell
cd nome-do-repositorio
```

3. Instale as dependências do projeto.

```shell
npm install
```

4. Execute o servidor JSON local.

Certifique-se de ter o JSON Server instalado globalmente em sua máquina. Se não estiver instalado, você pode instalá-lo executando o seguinte comando:

```shell
npm install -g json-server
```

Em seguida, execute o servidor JSON local com o arquivo `db.json` fornecido.

```shell
json-server --watch db.json
```

5. Execute o projeto.

```shell
npm start
```

Agora, você pode acessar a plataforma de vídeos em seu navegador através do seguinte URL: `http://localhost:3000`.

## Funcionamento offline

Para garantir que a plataforma funcione mesmo sem uma conexão com o servidor, foram adicionados blocos `try-catch` em pontos estratégicos do código. Caso não haja conexão com o servidor, o código tentará buscar as informações de um JSON local, priorizando sempre a tentativa de conexão com o servidor.

Porém, é importante ressaltar que a funcionalidade de adicionar novos vídeos utilizando o método POST só estará disponível quando houver conexão com o servidor. Caso esteja utilizando o JSON local, essa funcionalidade não funcionará.

## Contribuição

Se você quiser contribuir para este projeto, fique à vontade para fazer um fork e enviar suas melhorias através de pull requests. Toda contribuição é bem-vinda!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se livre para utilizar e modificar este projeto de acordo com suas necessidades.

## Contato

Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.