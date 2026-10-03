# Pedrin Pizzaria

Landing page responsiva para catálogo de pizzas e pedidos via WhatsApp, com persistência do carrinho no navegador e registro dos pedidos no Supabase.

## Fluxo

1. O cliente navega pelo catálogo público de pizzas disponíveis.
2. Adiciona pizzas, quantidade e observações ao carrinho.
3. O carrinho permanece salvo no `localStorage` durante a navegação e recarregamentos.
4. O checkout valida nome, telefone, horário com pelo menos 30 minutos de antecedência, pagamento e aceite dos termos.
5. O pedido é inserido em `public.orders`.
6. Após o sucesso, uma mensagem codificada é aberta no WhatsApp da pizzaria.
7. O carrinho é limpo depois do envio.

## Supabase

Projeto usado: `aulaolovable`.

Tabelas:
- `public.pizzas`
- `public.orders`

A tabela `pizzas` é pública somente para linhas disponíveis. A tabela `orders` aceita inserção anônima com RLS e validações básicas, mas não permite leitura pública dos pedidos.

## Configuração

Para direcionar o pedido para o WhatsApp correto, configure:

```
VITE_WHATSAPP_NUMBER=5562999999999
```

Use apenas números, incluindo código do país e DDD, sem `+`, espaços ou pontuação.

O frontend usa `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` quando fornecidos. Há fallback público para o projeto Supabase atual, apenas com chave publishable.

## Desenvolvimento

```sh
npm install
npm run dev
```

Build:

```sh
npm run build
```

## Lovable

Projeto Lovable conectado:
https://lovable.dev/projects/022d34a0-ed84-4f32-a646-c6128486d907

O desenvolvimento desta versão é feito pelo GitHub na branch `aulao`, sem usar o agente de edição do Lovable.