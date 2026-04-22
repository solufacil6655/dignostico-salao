# Diagnóstico do Salão — AgendaControl

Ferramenta gratuita de diagnóstico para donos de salão. Gera score 0-100 em 3 pilares (no-show, financeiro, agenda online) e captura lead no Brevo.

## Estrutura

```
├── index.html              # Frontend completo (quiz + resultado)
├── api/
│   └── cadastrar-lead.js   # Serverless function (Vercel) — envia lead ao Brevo
├── vercel.json             # Configuração de rotas Vercel
```

## Deploy no Vercel

1. Suba este repositório no GitHub
2. Importe no [vercel.com](https://vercel.com) → "Add New Project"
3. Configure a variável de ambiente:
   - `BREVO_API_KEY` = sua chave da API Brevo

## Variáveis de Ambiente

| Variável | Descrição |
|---|---|
| `BREVO_API_KEY` | Chave de API do Brevo (encontrada em Brevo > Configurações > API) |

## Domínio

Após o deploy, configure o domínio `diagnostico.solufacil.app.br` apontando para o Vercel nas configurações do projeto.
