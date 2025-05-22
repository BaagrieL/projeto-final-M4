---
sidebar_position: 1
---

# Rede Solidária 
<img src="https://img.shields.io/badge/license-MIT-green" alt="licença" />

## Sistema de Doação de Alimentos, Roupas e Produtos Essenciais 🤝

Rede Solidária é uma api de doação desenvolvida com a missão de aumentar a assecibilidade conectando restaurantes, supermercados, feiras e comércios. Sendo uma ponte para ONGs, abrigos e pessoas em necessidade.

## Descrição

Objetivo principal da rede solidária é facilitar na distribuição de doações de alimentos, roupas, remedios e produtos essenciais para pessoas em necessidade e ONGs. Organizando pontos de coleta e rastreiando as doações para ajudar na distribuição e rastreiamento mais eficiente.

Nosso público alvo são pessoas em situação de rua: seram as pessoas que receberam as doações. ONGs: seram os pontos de coleta das doações. E comércios: parceiros na distribuição de produtos essenciais para as doações.

## Problematização

A desigualdade social e o aumento da população em situação de rua e de necessidade estão aumentando a cada ano, dificultando o acessso a alimentos, roupas, rémedios e produtos essenciais. Enquanto isso, restaurantes e comércios frequentemente descartam grandes quantidades de comida e produtos utilizáveis. É ai que nossa plataforma entra para conectar doadores a pontos de coleta, melhorando a distribuição das doações para pessoas em necessidade.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma
- PostgreSQL
- Git
- GitHub
- Render
- Neon Tech
- Nodemon
- Uuid
- Cors

## Estrutura do Projeto

- `node_modules:` Para armazenar todas as dependências (bibliotecas e frameworks).
- `src:` Organizar os arquivos e pastas principais da aplicação.
- `prisma:` Centro de configuração e gerenciamento do Prisma ORM (Object-Relational Mapping).
- `migrations:` Contém os arquivos de migrações, que versionam alterações no banco de dados com base nas mudanças no schema.prisma.
- `router:` Responsável por definir e organizar as rotas da aplicação.
- `service:` Responsável por implementar as regras de negócio da aplicação.
- `logs:` Para armazenar registros de execução do sistema.
- `middlewares:` Para armazenar funções intermediárias que são executadas entre a requisição do cliente e a resposta do servidor.
- `server.js:` Arquivo principal da aplicação.
- `.gitignore:` Para informar ao Git quais arquivos ou pastas ele deve ignorar.
- `env:` Para armazenar variáveis de ambiente.
- `package.json:` Arquivo de configuração principal de um projeto Node.js.
- `package-lock.json:` Garante que o projeto funcione igual em qualquer máquina, instalando exatamente as mesmas versões das dependências.

## Configuração de Instalação e Execução

### Pré-requisitos

- Node.js (Versão 20 ou superior)
- Npm (gerenciador de pacotes do Node.js)

## Passos a Passo para Instalação

1. Clone o repositorio
```
https://github.com/RuanyLopes/projeto-final-M4.git
```
2. Entre no dirétorio do projeto
```
cd projeto-final-M4
```
3. Instale as dependências
```
npm install ou npm i
```
4. Inicie o servidor
```
node start.js
```

## Funcionalidades da API

- `Cadastro de Doadores:` Empresas e pessoas podem se cadastrar e listar os produtos que estão disponíveis para doação. Informando sobre quantidade, validade e tipo de produto doado.

- `Cadastro de Organizações e Voluntários:` ONGs, abrigos e voluntários podem registrar suas necessidades e indicar os pontos de coleta que podem administrar.

- `Localização de Pontos de Coleta e Distribuição:` Permite que os usuários encontrem locais onde podem deixar ou retirar doações, exibindo mapas de coleta e horários de funcionamento.

- `Categorias de Doação:` Permite fazer uma verificação filtrando as doações recebidas em quatro tipos: 

- Alimentos: refeições prontas, alimentos não perecíveis, frutas, legumes e outros tipos de alimentos.

- Roupas: vestuário para adultos e crianças, cobertores, calçados e outras pesas de roupa.

- Remédios: medicamento básicos e primeiros socorros (dentro da validade e permitidos legalmente).

- Higiene Pessoal: sabonete, shampoo, absorventes, fraldas, creme dental e outros itens.

- `Sistema de Notificações:` Permite que empresas e usuários cadastrados recebem alertas quando há pedidos urgentes de doações próximos a eles.

- `Registro de Impacto Social:` Exibi um painel com as estatísticas sobre a quantidade de doações recebidas, pessoas atendidas e pontos de distribuição ativos. Acompanhando o impacto gerado.

- `Feedback:` Permite que os usuários, beneficiários e voluntários compartilhem suas experiências com o sistema,
melhorando a qualidade do serviço.

## Testa Testes

```
npm test
```

## Contribuidores
- [Ruany Pereira Lopes](https://github.com/RuanyLopes)
- [Maria Eduarda Silva Souza](https://github.com/Mariaeduardamatias)
- [Melissa de Amorim Pinheiro](#)
- [Emilly Santos Silva](#)
- [Jerônimo Santos Rodrigues](https://github.com/JeronimoSantos)
- [Pedro de Sousa Freitas](https://github.com/PedroSousaF)
- [Davi Nunes de Azevedo](https://github.com/Davinunesaz)

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.