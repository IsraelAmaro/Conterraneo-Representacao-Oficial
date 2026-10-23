# ADR 0002: Uso de Quarkus no backend

- Status: Aceito
- Data: 2026-10-22

## Contexto

O backend precisa ser robusto, rápido em desenvolvimento e compatível com o uso de APIs REST, autenticação, persistência relacional e deploy em ambientes cloud simples. A equipe também busca reduzir o custo operacional e manter uma base moderna e enxuta.

## Decisão

Usar Java com Quarkus como framework principal do backend.

## Justificativa

- excelente desempenho e baixo consumo de memória
- bom suporte para aplicações Java modernas e cloud-native
- integração natural com REST, JWT, JPA e PostgreSQL
- produtividade alta para construção de APIs e serviços
- boa compatibilidade com Maven e ambiente Linux/WSL

## Consequências

### Positivas
- build e execução rápidos
- maior compatibilidade com ambientes enxutos e baratos
- excelente base para arquitetura modular e APIs bem definidas
- fácil integração com OpenAPI, validação e autenticação

### Negativas
- curva de aprendizado inicial para quem vem de frameworks mais tradicionais
- escolha tecnológica mais específica, exigindo padronização do time

## Critérios de sucesso

- APIs REST estáveis e documentadas
- autenticação e autorização funcionando com segurança
- persistência com PostgreSQL consistente
- deploy simples em ambientes de homologação e produção
