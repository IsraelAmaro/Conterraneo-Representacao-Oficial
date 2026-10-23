# ADR 0005: Uso de JWT para autenticação e autorização

- Status: Aceito
- Data: 2026-10-22

## Contexto

A aplicação precisa proteger endpoints e rotas administrativas, além de separar acessos por perfil. O sistema também exige autenticação para usuários internos e possível evolução com diferentes papéis e permissões.

## Decisão

Usar JWT (JSON Web Token) como mecanismo principal de autenticação e autorização inicial.

## Justificativa

- solução leve e amplamente adotada em APIs modernas
- fácil integração com Quarkus, Angular e endpoints protegidos
- apoio nativo a perfis e permissões
- compatível com arquitetura stateless e deploy em servidores simples

## Consequências

### Positivas
- autenticação simples e escalável
- fácil validação de permissões por perfil
- boa compatibilidade com API REST e frontend Angular
- estrutura adequada para evolução futura com MFA e OIDC

### Negativas
- necessidade de cuidado com expiração e renovação do token
- atenção necessária à manutenção de segurança e armazenamento do token no frontend

## Critérios de sucesso

- autenticação com login e senha funcionando corretamente
- acesso negado para usuários sem permissão
- tokens validados no backend em cada request sensível
- integração consistente com regras de autorização por perfil
