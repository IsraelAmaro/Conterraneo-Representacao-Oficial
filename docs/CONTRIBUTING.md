# Contribuição e convenções de desenvolvimento

## Branches

Este repositório usa o seguinte padrão de branches:

- `main`: código estável, já validado e pronto para produção
- `develop`: branch de integração para desenvolvimento ativo
- `feature/*`: novas funcionalidades
- `fix/*`: ajustes e correções de bugs
- `hotfix/*`: correções urgentes relacionadas a produção
- `chore/*`: tarefas de manutenção, configuração ou infraestrutura

### Nomeação
- usar apenas letras minúsculas
- separar palavras com hífen (`-`)
- exemplos:
  - `feature/login-jwt`
  - `fix/validacao-cpf`
  - `chore/setup-sonarcloud`

## Pull Requests

Todo trabalho deve ser entregue por Pull Request.

### Critérios obrigatórios
- a branch deve partir da base correta
- a PR deve descrever claramente o objetivo da tarefa
- o código deve ser validado localmente
- testes e build devem ser executados antes do merge
- revisão por pelo menos 1 pessoa é obrigatória
- merge somente após aprovação e pipeline verde

### Checklist mínimo
- [ ] objetivo da mudança foi descrito
- [ ] impacto funcional foi identificado
- [ ] testes foram executados
- [ ] build foi validado
- [ ] código foi revisado
- [ ] riscos e dependências foram documentados

## Fluxo recomendado

```text
feature/autenticacao-jwt
    ↓
    develop
    ↓
    main
```

## Boas práticas
- manter commits pequenos e objetivos
- não mesclar diretamente em `main`
- manter sempre a branch atualizada com `develop`
- cada PR deve focar em uma responsabilidade clara
- documentar decisões importantes e itens de risco
