# ADR 0003: Uso de Angular no frontend

- Status: Aceito
- Data: 2026-10-22

## Contexto

A aplicação precisa oferecer interface administrativa robusta, módulos funcionais, regras de acesso por perfil, formulários complexos e experiência responsiva. O frontend também deve seguir padrões de manutenção, organização e boa escalabilidade.

## Decisão

Usar Angular + TypeScript como stack principal do frontend.

## Justificativa

- excelente suporte para aplicações empresariais e administrativas
- forte estrutura modular e padrões bem definidos
- integração simples com JWT, guards, interceptors e formulários reativos
- bom suporte para UX com componentes dinâmicos e organização por módulos
- alinhado com a estratégia de arquitetura modular do projeto

## Consequências

### Positivas
- alta organização por feature e módulos
- bom suporte para autenticação e autorização
- fácil manutenção de grandes telas e regras complexas
- compatibilidade com Angular Material e boas práticas de UX

### Negativas
- maior curva de aprendizado em comparação com soluções mais leves
- estrutura mais verbosa e mais exigente em tooling

## Critérios de sucesso

- módulos separados por domínio funcional
- autenticação com tokens e guards funcionando corretamente
- telas administrativas responsivas e consistentes
- uso de componentes reutilizáveis e arquitetura clara
