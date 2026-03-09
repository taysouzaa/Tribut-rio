# Metodo P4 | Tributario

Landing page comercial e pagina de agradecimento desenvolvidas para a operacao digital do Metodo P4, com foco em captacao de leads, apresentacao de autoridade, distribuicao de aula gratuita e conversao para contato.

## Registro de autoria

- Autoria integral: projeto totalmente concebido, estruturado, desenvolvido e finalizado por Taynara Souza
- Data de registro deste documento: 09 de marco de 2026

## Visao geral

Este repositorio contem a interface web do projeto `LP-Tributario`, estruturada como uma aplicacao React + Vite com duas entradas principais:

- `index.html`: landing page principal
- `tributario-obrigado.html`: pagina de agradecimento apos o cadastro

O projeto foi construido para manter consistencia visual entre as paginas, boa leitura em desktop e mobile, e uma arquitetura simples de manter para evolucoes de copy, layout, identidade visual e captacao.

## Objetivos do projeto

- Apresentar a proposta do Metodo P4 Tributario com clareza comercial
- Conduzir o usuario por uma narrativa de conversao
- Exibir prova social, autoridade e demonstracao em video
- Capturar dados do lead por formulario
- Redirecionar o usuario para a pagina de agradecimento com acesso ao conteudo gratuito
- Manter uma base visual consistente entre landing e thank-you page

## Principais caracteristicas

- Hero com imagem de fundo, overlay de leitura e CTA principal
- Secoes internas com backdrop compartilhado e identidade visual unificada
- Cards de oferta, prova social, autoridade e FAQ
- Formulario responsivo com validacao em tempo real
- Integracao de leads via webhook do n8n com gravacao em Google Sheets
- Pagina de agradecimento integrada ao mesmo sistema visual
- Componentizacao em React para facilitar manutencao
- Tokens visuais centralizados para cores, tipografia, espacamento e sombras
- Build multi-entry com Vite

## Estrutura do projeto

```text
.
|-- .env.example
|-- index.html
|-- tributario-obrigado.html
|-- package.json
|-- vite.config.ts
|-- src/
|   |-- main.tsx
|   |-- thank-you.tsx
|   |-- vite-env.d.ts
|   |-- styles/
|   |   |-- index.css
|   |   |-- theme.css
|   |   |-- tailwind.css
|   |   `-- fonts.css
|   `-- app/
|       |-- App.tsx
|       |-- ThankYouPage.tsx
|       |-- design.ts
|       |-- sectionBackground.ts
|       |-- section-lines.svg
|       |-- section-lines-left.svg
|       `-- components/
|           |-- Header.tsx
|           |-- Hero.tsx
|           |-- LearnSection.tsx
|           |-- HowItWorks.tsx
|           |-- Testimonials.tsx
|           |-- AboutSection.tsx
|           |-- FaqSection.tsx
|           |-- FormSection.tsx
|           `-- Footer.tsx
```

## Arquitetura funcional

### Landing principal

Arquivo principal: [src/app/App.tsx](src/app/App.tsx)

Ordem atual das secoes:

1. `Header`
2. `Hero`
3. `LearnSection`
4. `HowItWorks`
5. `Testimonials`
6. `AboutSection`
7. `FaqSection`
8. `FormSection`
9. `Footer`

### Pagina de agradecimento

Arquivo principal: [src/app/ThankYouPage.tsx](src/app/ThankYouPage.tsx)

Fluxo atual:

1. Header proprio com retorno para a landing
2. Bloco principal confirmando o cadastro
3. Video liberado
4. Cards com proximos passos
5. Footer compartilhado

## Sistema visual

Os tokens visuais do projeto estao centralizados em [src/app/design.ts](src/app/design.ts).

Esse arquivo concentra:

- cores base
- cores de superficie
- tipografia
- raios de borda
- sombras
- largura maxima
- espacamento de pagina e secoes

As secoes abaixo do hero compartilham um backdrop reutilizavel definido em [src/app/sectionBackground.ts](src/app/sectionBackground.ts), o que reduz duplicacao e facilita ajustes globais de identidade visual.

## Stack tecnica

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React
- React Hook Form

## Requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Como executar localmente

### 1. Instalar dependencias

```bash
npm install
```

### 2. Rodar o ambiente de desenvolvimento

```bash
npm run dev
```

### 3. Gerar build de producao

```bash
npm run build
```

## Scripts disponiveis

- `npm run dev`: inicia o servidor de desenvolvimento com Vite
- `npm run build`: gera a build de producao das duas entradas HTML

## Entradas de build

O projeto utiliza build multi-entry configurado em [vite.config.ts](vite.config.ts):

- `main` -> `index.html`
- `thankYou` -> `tributario-obrigado.html`

Isso permite publicar a landing principal e a pagina de agradecimento como paginas independentes, mantendo a mesma base de componentes e estilo.

## Fluxo de captacao de leads

O fluxo de captacao desta landing esta integrado com `n8n` e `Google Sheets`.

### Visao geral do fluxo

1. O usuario preenche o formulario em [src/app/components/FormSection.tsx](src/app/components/FormSection.tsx).
2. O frontend valida os campos obrigatorios antes do envio.
3. Os campos de WhatsApp removem automaticamente o prefixo `+55`, mantendo apenas DDD + numero.
4. O frontend envia o payload para o endpoint definido em `VITE_LEAD_WEBHOOK_URL`.
5. O `Webhook2` do `n8n` recebe um `POST` na rota `Tributario`.
6. O node `Parse Body` normaliza o body recebido, recompõe as chaves esperadas e define automaticamente:
   - `Entrada leads` com a data atual em `pt-BR`
   - `Funil` com o valor `Tributario`
7. O node `Append row in sheet` grava a linha na aba `Tributario` da planilha configurada no Google Sheets.
8. Com resposta `200`, a aplicacao redireciona o usuario para `tributario-obrigado.html`.

### Variavel de ambiente do webhook

O frontend le a URL do webhook a partir da variavel:

```env
VITE_LEAD_WEBHOOK_URL=https://seu-endpoint-n8n/webhook/Tributario
```

Arquivo de referencia: [.env.example](.env.example)

### Campos do fluxo

Campos normalizados e gravados na operacao atual:

- `Entrada leads`
- `Funil`
- `Nome completo `
- `Qual seu e-mail?`
- `Qual o seu WhatsApp?`
- `Confirme seu WhatsApp`
- `Qual é a sua medalha no Mercado Livre?`
- `Qual é o seu regime tributário atual?`

Observacoes operacionais:

- A planilha final utiliza a coluna `Entrada leads` como campo de data.
- O valor da data e gerado no `n8n` com `new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })`.
- O node do Google Sheets esta configurado com `operation: append`, `mappingMode: defineBelow` e `matchingColumns` vazio.
- A coluna `Nome completo ` da planilha possui espaco no final. Por isso o fluxo trata tanto `Nome completo ` quanto `Nome completo`.

### Logica atual do node Parse Body

```js
const raw = $json.body ?? $json;
let data = raw;

if (typeof data === "string") {
  try {
    data = JSON.parse(data);
  } catch {
    data = {};
  }
}

if (typeof data !== "object" || data === null || Array.isArray(data)) {
  data = {};
}

const dateBR = new Date().toLocaleDateString("pt-BR", {
  timeZone: "America/Sao_Paulo",
});

const nome = data["Nome completo "] || data["Nome completo"] || "";
const email = data["Qual seu e-mail? "] || data["Qual seu e-mail?"] || "";
const whatsapp = data["Qual o seu WhatsApp? "] || data["Qual o seu WhatsApp?"] || "";
const whatsappConfirm = data["Confirme seu WhatsApp "] || data["Confirme seu WhatsApp"] || "";
const medalha = data["Qual é a sua medalha no Mercado Livre? "] || data["Qual é a sua medalha no Mercado Livre?"] || "";
const regime = data["Qual é o seu regime tributário atual? "] || data["Qual é o seu regime tributário atual?"] || "";

return [
  {
    json: {
      ...data,
      "Entrada leads": dateBR,
      "Funil": data["Funil"] || "Tributario",

      "Nome completo ": nome,
      "Nome completo": nome,

      "Qual seu e-mail? ": email,
      "Qual seu e-mail?": email,

      "Qual o seu WhatsApp? ": whatsapp,
      "Qual o seu WhatsApp?": whatsapp,

      "Confirme seu WhatsApp ": whatsappConfirm,
      "Confirme seu WhatsApp": whatsappConfirm,

      "Qual é a sua medalha no Mercado Livre? ": medalha,
      "Qual é a sua medalha no Mercado Livre?": medalha,

      "Qual é o seu regime tributário atual? ": regime,
      "Qual é o seu regime tributário atual?": regime
    }
  }
];
```

## Pontos de manutencao rapida

### Alterar identidade visual

Edite:

- [src/app/design.ts](src/app/design.ts)
- [src/app/sectionBackground.ts](src/app/sectionBackground.ts)
- [src/styles/index.css](src/styles/index.css)

### Alterar textos da landing

Edite diretamente os componentes da pasta:

- [src/app/components](src/app/components)

### Alterar fluxo da pagina de obrigado

Edite:

- [src/app/ThankYouPage.tsx](src/app/ThankYouPage.tsx)

### Alterar redirecionamento apos envio do formulario

Edite:

- [src/app/components/FormSection.tsx](src/app/components/FormSection.tsx)
- [.env.example](.env.example)

## Responsividade

O layout foi estruturado com comportamento responsivo para desktop e mobile, com:

- grids que colapsam para uma coluna em telas menores
- CTAs que empilham no mobile
- videos com `aspectRatio`
- imagens com `object-fit`
- ajustes de leitura e espacamento com `clamp(...)`

## Observacoes importantes

- Este repositorio contem ativos visuais proprietarios, incluindo imagens, textos, identidade visual e estrutura comercial
- O formulario atual envia os dados para um webhook do n8n e so redireciona para a pagina de agradecimento apos resposta de sucesso
- O fluxo de captacao depende da consistencia entre os nomes dos campos do frontend, do node `Parse Body` e dos cabecalhos do Google Sheets
- O projeto foi organizado para facilitar manutencao visual sem precisar reescrever multiplas secoes

## Propriedade intelectual

Este projeto e proprietario e de uso exclusivo do Metodo P4 e de Taynara Souza.

Todo o codigo, a estrutura, os componentes, os fluxos, os textos, os ativos e a implementacao tecnica deste projeto foram integralmente construidos por Taynara Souza.

Nao se trata de software open source.

O uso, copia, modificacao, distribuicao, adaptacao, reutilizacao parcial ou total, publicacao, sublicenciamento, comercializacao ou exploracao deste codigo e de seus ativos dependem de autorizacao previa e expressa por escrito de Taynara Souza, titular dos direitos.

Consulte o arquivo [LICENSE](LICENSE) para as condicoes completas.

## Licenca

Este repositorio esta licenciado sob uma licenca proprietaria restritiva.

Qualquer interesse de uso, licenciamento, adaptacao, parceria ou reaproveitamento deve ser tratado diretamente com Taynara Souza por canal oficial.
