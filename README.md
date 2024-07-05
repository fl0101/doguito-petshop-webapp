# Descrição do Projeto: 
O projeto "Petshop Doguito" é um sistema de gerenciamento de produtos para um petshop. Ele foi desenvolvido utilizando Node.js, Express.js, MySQL2, Sequelize, e outras ferramentas para garantir um ambiente de desenvolvimento eficiente e escalável.

A estrutura do projeto é organizada e modular, com pastas dedicadas para diferentes aspectos da aplicação. Na pasta "assets", encontram-se os arquivos JavaScript responsáveis pela lógica de validação e interatividade do front-end. Já na pasta "public", estão os arquivos CSS que definem o estilo visual da aplicação, bem como imagens relacionadas aos produtos e à identidade visual do petshop.

O servidor está configurado no diretório "server", com arquivos separados para configurações gerais, controladores para gerenciamento das rotas HTTP e modelos para interação com o banco de dados por meio do Sequelize. A pasta "src" contém as visualizações HTML e EJS que compõem as diferentes páginas da aplicação, como o formulário de cadastro de produtos, a listagem de produtos, e páginas de confirmação de cadastro e atualização.

Em resumo, o "Petshop Doguito" é uma aplicação que permite aos usuários cadastrar, visualizar, editar e remover produtos de forma intuitiva e eficiente, proporcionando uma experiência amigável para os usuários do petshop.

🚧 Status: Em desenvolvimento 🚧

# Funcionalidades
- [x] Cadastro de Produtos
- [x] Consulta de Produtos
- [x] Atualização de Dados
- [x] Exclusão de Produtos

# Estrutura do Projeto
## assets/js
- Arquivos JavaScript responsáveis pela lógica de validação e interatividade do front-end

## config/
- Arquivos de configuração do projeto

## public/css
- Arquivos de estilização das páginas
  - **base**: Arquivos base de estilização das páginas e componentes
  - **components**: Arquivos de estilização dos componentes

## public/img
- Imagens do projeto
  - **products**: Imagens dos produtos

## server
- Arquivos de configuração gerais do servidor
  - **controllers**: Arquivos de configuração dos controladores para gerenciamento das rotas HTTP
  - **db**: Arquivos de conexão com o banco de dados
  - **migrations**: Arquivos de migração utilizados no projeto quando necessário
  - **models**: Arquivos de configuração dos modelos para interação com o banco de dados por meio do Sequelize
  - **routes**: Arquivos de rotas relacionadas ao cadastro, exibição, atualização e exclusão de produtos
  - **index.js**: Arquivo de configuração e inicialização do servidor

## src/view
- Arquivos de visualizações HTML e EJS que compõem as diferentes páginas da aplicação

# Baixe o projeto e instale as dependências:

`git clone https://github.com/fl0101/petshop-doguito.git`

## Entre no diretório do projeto: 
`cd petshot-doguito/`

## Dependências de Desenvolvimento: 
Estas são as dependências necessárias para desenvolver a aplicação ou executá-la:

* node
* npm
* Visual Studio Code
* sequelize
* mysql2
* express
* ejs

## Passos para Instalar Node.js
* Baixar e Instalar Node.js:

Vá para o [site oficial do Node.js](https://nodejs.org/en) e baixe a versão LTS recomendada para a maioria dos usuários.
Siga as instruções de instalação específicas para o seu sistema operacional (Windows, macOS, ou Linux).

* Verificar a Instalação:

Após instalar o Node.js, abra o terminal (ou Prompt de Comando no Windows) e verifique a versão do Node.js e do npm instalados com os seguintes comandos:

`node -v`
`npm -v`

Você deve ver os números das versões instaladas, confirmando que a instalação foi bem-sucedida.

## Passos para Instalar Visual Studio Code
Visual Studio Code (VS Code) é um editor de código-fonte leve, mas poderoso, desenvolvido pela Microsoft. Suporta diversas linguagens de programação e oferece uma vasta gama de extensões para personalizar e expandir sua funcionalidade.

* Requisitos de sistema: 
  - Windows: Windows 7, 8, 10 ou superior (64-bit recomendado)
  - macOS: macOS 10.10 (Yosemite) ou superior
  - Linux: glibc 2.15 ou superior, GTK+ 3.14 ou superior

**Windows**
  - Acesse o site oficial do [Visual Studio Code](https://code.visualstudio.com/)
  - Clique no botão "Download for Windows" para baixar o instalador.
  - Execute o arquivo baixado (geralmente chamado VSCodeUserSetup-{version}.exe).
  - Siga as instruções do assistente de instalação.
  - Clique em "Instalar" e aguarde a conclusão do processo.
  - Após a instalação, clique em "Concluir" para abrir o Visual Studio Code.

**macOS**
  - Acesse o site oficial do [Visual Studio Code](https://code.visualstudio.com/).
  - Clique no botão "Download for macOS" para baixar o instalador.
  - Abra o arquivo .zip baixado e arraste o Visual Studio Code para a pasta Applications.
  - Abra o Visual Studio Code a partir da pasta Applications.

**Linux**
***Ubuntu e Debian***
  - Acesse o site oficial do [Visual Studio Code](https://code.visualstudio.com/).
  - Clique no botão "Download .deb" para baixar o instalador.
  - Abra o terminal e navegue até o diretório onde o arquivo .deb foi baixado.
  - Execute o seguinte comando para instalar o pacote:
    `sudo apt install ./code_{version}.deb`

## Instale as dependências:
`npm install`

## Passos para Configurar o Banco de Dados
Após instalar as dependências, abra o terminal e entre no cliente MySQL com o seguinte comando:
`mysql -u root -p`

Depois de entrar no cliente MySQL, crie um novo banco de dados:
`CREATE DATABASE ecommerce;`

### Configure as Credenciais do Banco de Dados:
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente, ajustando conforme necessário:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=produtos

## Execute as Migrações:
`npx sequelize-cli db:migrate`

# Execute o projeto: 
* Acesse a pasta do servidor: 
`cd petshop-doguito/server/`

* Execute o projeto pelo terminal
`node index.js`

* Acesse a rota principal no navegador:
http://localhost:3000/produtos

# Autor

 [Flaviane Nascimento](https://github.com/fl0101/) :rocket:

 "Conhece a ti mesmo"
 
# Contato
 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkdin.com/in/flaviane-nascimento-69375816a)](https://www.linkdin.com/in/flaviane-nascimento-69375816a)
 [![X Badge](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/flaviane80639)
 [![Email Badge](https://img.shields.io/badge/proton%20mail-6D4AFF?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:fl0101@protonmail.com)

# Contribuições

Contribuições são sempre bem vindas! Para contribuir lembre-se sempre de realizar testes para as novas classes e funções com a devida documentação.

# Licença: 
Este projeto está licenciado sob a Licença MIT.