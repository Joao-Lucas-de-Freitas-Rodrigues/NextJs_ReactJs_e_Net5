# Integracao_NextJS_DotNET5
UM CRUD simples de cadastro de profissionais integrando NextJS com .NET 5 

## Começando

## Back End:

Parte BackEnd utilizando C# .NET 5 Web Api

Nesta parte do projeto tem as API's que serão chamadas no FrontEnd e a conexão do banco de dados

## Banco de Dados SQL server:

No arquivo 'appsettings' tem que fazer a conexão ao banco de dados que irá utilizar, colocando o nome do servidor e do banco que irá utilizar

```bash
"ConnectionStrings": {
    "conexao": "server=nomeServidor;database=NomeBancoDeDados;user id=id;pwd=senha"
  },
```

Após isso utilize este comando em um banco SQL server:

```bash
USE [NomeBancoDeDados]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Profissional](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nome] [nvarchar](100) NOT NULL,
	[idade] [int] NOT NULL,
	[profissao] [nvarchar](100) NOT NULL,
	[telefone] [nvarchar](11) NOT NULL,
	[salario] [float] NOT NULL,
 CONSTRAINT [PK_Profissional] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
```

## FrontEnd:

Parte FrontEnd utilizando o NextJS/ReactJs 

Após abrir o projeto, em um terminal utilize o comando:
```bash
npm install
```
Para instalar as dependências usadas no projeto.
