# Sistema de Gerenciamento de Usuários

## 📋 Descrição
Este é um sistema backend robusto para gerenciamento de usuários, desenvolvido com Node.js e Express. O projeto implementa uma arquitetura limpa e modular, utilizando Supabase como banco de dados e seguindo as melhores práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express.js
- Supabase
- UUID
- Dotenv

## 🛠️ Estrutura do Projeto
```
src/
├── controllers/    # Controladores da aplicação
├── routes/         # Definição das rotas
├── services/       # Lógica de negócios
├── supabase/       # Configuração e conexão com Supabase
└── validators/     # Validação de dados
```

## ⚙️ Configuração do Ambiente

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Conta no Supabase

### Instalação
1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
SUPABASE_URL=sua_url_do_supabase
SUPABASE_KEY=sua_chave_do_supabase
```

4. Inicie o servidor:
```bash
npm start
```

## 📚 Documentação da API

### Endpoints

#### Usuários
- `GET /users` - Lista todos os usuários
- `GET /users/:id` - Obtém um usuário específico
- `POST /users` - Cria um novo usuário
- `PUT /users/:id` - Atualiza um usuário existente
- `DELETE /users/:id` - Remove um usuário

## 🔒 Segurança
- Validação de dados em todas as entradas
- Autenticação via Supabase
- Proteção contra injeção SQL
- Variáveis de ambiente para dados sensíveis


## 📝 Licença
Este projeto está sob a licença ISC.

## 👨‍💻 Autor
Jhonny Benheim

## 📞 Suporte
Para suporte, envie um email para jhonny.paixao7@gmail.com
