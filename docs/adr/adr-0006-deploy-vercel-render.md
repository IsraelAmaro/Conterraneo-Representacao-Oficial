# ADR 0006: Deploy em Vercel e Render

- Status: Aceito
- Data: 2026-10-22

## Contexto

O projeto precisa de uma solução de deploy simples, barata e fácil de operar, preservando uma boa experiência de desenvolvimento e permitindo evolução incremental para ambientes de homologação e produção.

## Decisão

Usar Vercel para hospedar o frontend e Render para hospedar o backend, com GitHub Actions como mecanismo de automação do pipeline.

## Justificativa

- baixo custo para projetos de porte inicial
- boa simplicidade de uso e integração com GitHub
- deploy rápido para frontend e backend
- estrutura adequada para desenvolvimento e homologação
- facilita a evolução gradual sem operação complexa de infraestrutura

## Consequências

### Positivas
- deploy automatizado e fácil de manter
- ambiente de homologação simples de configurar
- menor complexidade operacional no início do projeto
- integração direta com GitHub e pipelines de CI/CD

### Negativas
- dependência de provedores externos para runtime e ambiente
- necessidade de padronizar variáveis e configurações por ambiente
- evoluções mais complexas podem exigir migração para infraestrutura mais robusta

## Critérios de sucesso

- frontend publicado em ambiente estável
- backend exposto em ambiente de homologação
- pipeline automatizado para build e deploy
- variáveis de ambiente gerenciadas corretamente
- rollback simples em caso de falha
