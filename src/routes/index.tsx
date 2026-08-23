Atue como engenheiro sênior React + TypeScript + Vite + Lovable + Supabase.

## REGRA ABSOLUTA

ESTA ETAPA É SOMENTE LEITURA.

NÃO altere arquivos.
NÃO crie arquivos.
NÃO execute migrations.
NÃO altere Supabase.
NÃO altere Auth Settings.
NÃO altere Redirect URLs.
NÃO altere RLS ou policies.
NÃO implemente nenhuma correção ainda.

Primeiro precisamos confirmar se este projeto realmente contém a aplicação responsável pelos problemas relatados.

## PROBLEMAS RELATADOS

Existem relatos de:

1. usuário faz login;
2. realiza onboarding;
3. chega ao pagamento;
4. decide não comprar;
5. fecha ou abandona;
6. posteriormente tenta acessar o site normalmente;
7. o dispositivo recupera estado/sessão anterior;
8. o usuário é redirecionado novamente para onboarding/pagamento ou fica preso no fluxo.

Também há relato de:

**e-mail de redefinição de senha → link → aplicação → pagamento**

quando deveria entrar no fluxo de redefinição de senha.

Também precisamos verificar se usuários sem assinatura podem sair do funil comercial através de “Voltar ao site” ou “Continuar sem assinar”, sem obter acesso premium.

## PRIMEIRO: CONFIRME O PROJETO

Antes de investigar a causa, procure no projeto inteiro por:

```text
supabase
createClient
getSession
getUser
onAuthStateChange
signIn
signUp
signOut
resetPasswordForEmail
updateUser
verifyOtp
exchangeCodeForSession
emailRedirectTo
redirectTo
ProtectedRoute
Navigate
navigate(
localStorage
sessionStorage
onboarding
subscription
checkout
payment
pricing
plan
```

Informe:

* quais termos realmente existem;
* arquivos encontrados;
* AuthProvider/AuthContext encontrado;
* Supabase client encontrado;
* Router encontrado;
* onboarding encontrado;
* checkout/pagamento encontrado;
* sistema de assinatura encontrado;
* reset de senha encontrado.

### REGRA DE PARADA

Se este projeto NÃO contiver a implementação responsável por Auth + onboarding + pagamento:

PARE.

Não invente solução.

Não crie Auth, onboarding ou checkout.

Informe claramente:

**“O código atualmente disponível não contém o fluxo necessário para confirmar e corrigir este problema.”**

Depois indique exatamente quais arquivos/projeto precisam ser fornecidos.

## SE O FLUXO EXISTIR

Reconstrua:

```text
URL
→ Router
→ Auth
→ recuperação da sessão
→ perfil
→ onboarding
→ subscription
→ Route Guard
→ redirect
→ página final
```

Liste TODOS os redirects encontrados.

Para cada um:

```text
Arquivo:
Função/componente:
Condição:
Origem:
Destino:
Estado utilizado:
Pode executar durante loading?:
Pode interceptar rota pública?:
Pode interceptar recovery/reset?:
Risco:
```

## NÃO CHAME TUDO DE CACHE

Determine separadamente:

* sessão Supabase persistida;
* JWT/refresh token;
* localStorage;
* sessionStorage;
* Context;
* estado React;
* React Query;
* perfil no banco;
* onboarding no banco;
* subscription no banco.

Sessão Supabase persistida pode ser comportamento legítimo.

O problema pode estar na decisão executada DEPOIS da restauração da sessão.

Não proponha limpar storage ou executar logout como correção sem provar que o dado persistido é incorreto.

## AUDITE RACE CONDITIONS

Diferencie:

```text
loading
não consultado
sem assinatura
assinatura ativa
erro
```

Procure especialmente condições equivalentes a:

``ts
if (user && !subscription) {
  navigate("/payment");
}
``

Não considere `undefined` durante carregamento equivalente a “sem assinatura”.

## AUDITE RESET DE SENHA

Reconstrua:

```text
solicitação
→ resetPasswordForEmail
→ redirect configurado
→ Supabase
→ link recebido
→ callback
→ sessão/recovery
→ router
→ reset-password
→ alteração da senha
→ destino final
```

Identifique exatamente onde o usuário é desviado para pagamento.

Verifique tanto código quanto configuração necessária no Supabase.

Não altere configurações nesta etapa.

## AUDITE ABANDONO DO PAGAMENTO

Reconstrua:

```text
onboarding
→ planos
→ checkout
→ desistência
→ site
→ refresh
→ fechar navegador
→ abrir novamente
```

Determine qual estado faz o usuário voltar para pagamento.

Verifique se onboarding e assinatura foram indevidamente acoplados.

## SEGURANÇA

“Voltar ao site” jamais poderá:

* criar assinatura;
* alterar subscription_status;
* marcar pagamento como concluído;
* modificar role;
* modificar JWT;
* alterar RLS;
* conceder acesso premium.

Sair do funil comercial é diferente de obter autorização premium.

## ENTREGA

Não implemente.

Entregue somente:

### 1. Arquitetura encontrada

### 2. Arquivos envolvidos

### 3. Fluxo atual

### 4. Redirects encontrados

### 5. Estados persistidos encontrados

### 6. Problemas confirmados

### 7. Hipóteses ainda não confirmadas

### 8. Evidências

Arquivo + função + trecho relevante.

### 9. Causa raiz

Somente para problemas comprovados.

### 10. Correções propostas

Sem executar.

Para cada proposta:

```text
Arquivo:
Alteração:
Motivo:
Impacto:
Risco:
Como validar:
```

### 11. Informações faltantes

Se alguma conclusão depender de configuração externa do Supabase ou outro serviço, diga exatamente qual configuração precisa ser verificada.

NÃO avance para implementação.

Aguarde aprovação.
