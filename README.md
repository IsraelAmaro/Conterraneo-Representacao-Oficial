# Conterrâneo Representações

## Visão geral
Este repositório reúne a base de desenvolvimento do projeto Conterrâneo Representações, incluindo backend em Java + Quarkus, frontend em Angular + TypeScript, documentação técnica e infraestrutura do ambiente.

## Status atual
A estrutura inicial do monorepo já foi criada e validada com sucesso:

- backend Quarkus gerado em `backend/`
- frontend Angular gerado em `frontend/`
- diretórios de documentação e infraestrutura criados em `docs/` e `infra/`
- ambiente local validado com Java 21, Maven, Node.js, npm e Angular CLI
- o projeto base foi verificado com build e instalação funcional

## Stack principal
- Backend: Java 21 + Quarkus
- Frontend: Angular 21 + TypeScript + SCSS
- Banco de dados: PostgreSQL
- Autenticação: JWT + RBAC
- CI/CD: GitHub Actions
- Hospedagem: Vercel (frontend) e Render (backend)
- Qualidade: SonarCloud, testes automatizados e revisão de código

## Estrutura do monorepo
```text
.
├── backend/
│   └── conterraneo-backend/
│       ├── src/
│       ├── pom.xml
│       ├── mvnw
│       └── README.md
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── angular.json
│   └── README.md
├── docs/
│   ├── CONTRIBUTING.md
│   └── ADRs e documentação técnica
├── infra/
│   └── arquivos de infraestrutura e ambiente
├── .github/
│   ├── workflows/
│   └── pull_request_template.md
├── README.md
└── .gitignore
```

## Pré-requisitos do ambiente
Antes de iniciar desenvolvimento local, confirme que as ferramentas estão instaladas:

```bash
java -version
mvn -v
node -v
npm -v
ng version
```

## Como rodar localmente

### Backend
```bash
cd backend/conterraneo-backend
./mvnw test
./mvnw quarkus:dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Convenções de branch
Este repositório usa uma estratégia simples e previsível para organização do trabalho:

- `main`: branch principal, contendo código estável e pronto para homologação
- `develop`: branch de integração para novas features e ajustes em desenvolvimento
- `feature/*`: desenvolvimento de funcionalidades novas
- `fix/*`: correções de bugs e ajustes pontuais
- `hotfix/*`: correções urgentes em produção
- `chore/*`: manutenção, configuração e tarefas de suporte não funcionais

### Regras de nomenclatura
- usar letras minúsculas
- separar palavras por hífen (`-`)
- evitar espaços e underscores
- exemplos:
  - `feature/autenticacao-jwt`
  - `fix/validacao-cliente`
  - `chore/setup-ci-cd`

## Convenções de pull request
Todo trabalho deve ser entregue por meio de Pull Request (PR), com os seguintes critérios:

1. a branch deve sair da base correta (`develop` para features, `main` apenas para hotfix/produção)
2. o PR deve ter descrição clara do problema e da solução
3. o código deve passar no build e nos testes antes do merge
4. toda PR precisa ter revisão de pelo menos 1 pessoa
5. PRs com alterações sensíveis devem incluir checklist de risco e validação
6. merge somente após aprovação e validação do pipeline

### Checklist mínimo do PR
- [ ] descrição do objetivo da mudança
- [ ] impacto funcional e técnico identificado
- [ ] testes executados
- [ ] build validado
- [ ] revisão de código concluída
- [ ] risco e dependências documentados

## Fluxo recomendado
```text
feature/*  -> develop -> main
```

### Processo sugerido
1. criar branch a partir de `develop`
2. implementar a funcionalidade ou correção
3. rodar testes e validação local
4. abrir PR para `develop`
5. solicitar revisão
6. revisar, ajustar e aprovar
7. fazer merge somente após pipeline verde

## Próximos passos
- finalizar a estrutura de autenticação e autorização
- implementar módulos de usuários, clientes e fornecedores
- configurar banco PostgreSQL e Flyway
- configurar CI/CD inicial no GitHub Actions
- entregar as primeiras tarefas do MVP conforme o plano de implementação

## Observações
O repositório está em fase inicial de estruturação e desenvolvimento do MVP. A organização atual foi pensada para facilitar crescimento, manutenção e evolução para uma arquitetura mais distribuída no futuro.
