# Projeto Final React - Step

Sistema de cadastro e gerenciamento de produtos, com login de usuário, feito como Projeto Final do módulo de React do curso Step.

## Vídeo de apresentação

https://youtu.be/tIyzoyXw9N8

## Deploy

Aplicação publicada na Vercel: https://project-react-step-psi.vercel.app/

## Funcionalidades

- Cadastro e login de usuário
- Rotas protegidas (só acessa logado)
- Listagem de produtos com filtro de busca (Autocomplete do Material UI)
- Criar, editar e deletar produto
- Tema claro/escuro (Context API)

## Organização do código

O código do projeto final segue a metodologia **Atomic Design**, em `src/components/projeto-final/`:

- `atoms/` — Button, Input, Label, Select
- `context/` — ThemeContext (tema claro/escuro)
- `molecules/` — FormField
- `organisms/` — Header, LoginForm, ProductFilter, ProductForm, ProductList, RegistrarForm
- `pages/` — CriarProduto, EditarProduto, Home, Login, Registrar
- `routes/` — PrivateRoute (proteção de rotas)
- `templates/` — PageLayout

As aulas e exercícios anteriores do curso ficam em `src/components/aulas/`.

## Rodando localmente

```bash
npm install
npm run dev
```
