# ADR 0004: Uso de PostgreSQL como banco principal

- Status: Aceito
- Data: 2026-10-22

## Contexto

O sistema precisa de persistência relacional com suporte a regras de negócio, integrações, histórico, lote, validade, pedidos e auditoria. A base deve ser confiável, estável e adequada para uma operação comercial com volume moderado.

## Decisão

Usar PostgreSQL como banco principal da aplicação.

## Justificativa

- excelente suporte para aplicações transactionais e relacionais
- robustez para relacionamento entre entidades do domínio
- bom desempenho em operações de consulta e integridade
- compatibilidade com JPA, Hibernate e Flyway
- adequado para crescimento incremental sem reestruturação prematura

## Consequências

### Positivas
- alta confiabilidade e maturidade
- suporte a migrações versionadas via Flyway
- estrutura adequada para dados de clientes, fornecedores, produtos e pedidos
- fácil integração com ambientes cloud e deploy simples

### Negativas
- exigência de cuidado na modelagem e otimização de consultas
- necessidade de regras fortes de auditoria e consistência

## Critérios de sucesso

- schema versionado e controlado
- integridade relacional preservada
- dados sensíveis protegidos
- migrações consistentes em desenvolvimento, homologação e produção
