<!-- @format -->

# Frontend Mentor - GitHub User Search App Solution

Esta é a minha solução para o [desafio de aplicativo de busca de usuários do GitHub no Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Este desafio me ajudou a melhorar minhas habilidades de codificação ao construir um projeto realista.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
  - [O Desafio](#o-desafio)
  - [Captura de Tela](#captura-de-tela)
  - [Links](#links)
- [Meu Processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento Contínuo](#desenvolvimento-contínuo)
  - [Recursos Úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão Geral

### O Desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal do aplicativo, dependendo do tamanho da tela do dispositivo
- Ver estados de foco para todos os elementos interativos na página
- Buscar usuários do GitHub pelo nome de usuário
- Ver informações relevantes do usuário com base na busca
- Alternar entre temas claro e escuro
- **Bônus**: Ter o esquema de cores correto escolhido com base nas preferências do computador, utilizando `prefers-color-scheme` em CSS.

### Captura de Tela

![Captura de Tela](./screenshot.jpg)

### Links

- URL da Solução: [Minha Solução](https://sua-solution-url.com)
- URL do Site ao Vivo: [Site ao Vivo](https://sua-live-site-url.com)

## Meu Processo

### Construído com

- Marcação HTML5 semântica
- Propriedades customizadas de CSS
- Flexbox
- CSS Grid
- Fluxo de trabalho Mobile-first
- [React](https://reactjs.org/) - Biblioteca JS
- [Next.js](https://nextjs.org/) - Framework React
- [Styled Components](https://styled-components.com/) - Para estilos

### O que eu aprendi

Este projeto me permitiu consolidar alguns conceitos e aprender novas técnicas. Um dos pontos altos foi entender melhor como utilizar `prefers-color-scheme` para aplicar temas claros e escuros baseados nas preferências do sistema do usuário.

Aqui está um exemplo de código do que eu implementei:

```css
body {
  background-color: var(--color-background);
  color: var(--color-text);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #121212;
    --color-text: #ffffff;
  }
}
```

### Desenvolvimento Contínuo

Quero continuar aprimorando minhas habilidades em acessibilidade e otimização de desempenho, focando em práticas avançadas de SEO e PWA (Progressive Web Apps).

### Recursos Úteis

- [Documentação do Next.js](https://nextjs.org/docs) - Me ajudou a entender e implementar recursos do Next.js.
- [CSS Tricks](https://css-tricks.com/) - Recurso valioso para aprender mais sobre CSS e boas práticas.

## Autor

- Website - [Fábio Santana](https://www.seu-site.com)
- Frontend Mentor - [@seu-username](https://www.frontendmentor.io/profile/seu-username)
- LinkedIn - [@seu-username](https://www.linkedin.com/in/seu-username)
- Twitter - [@seu-username](https://www.twitter.com/seu-username)

## Agradecimentos

Gostaria de agradecer à comunidade do Frontend Mentor por todo o apoio e feedback durante este desafio. Também agradeço aos criadores dos tutoriais e artigos que me ajudaram a superar obstáculos ao longo do projeto.

---

Sinta-se à vontade para adaptar as seções conforme necessário, substituindo as URLs e informações com as suas próprias. Isso dará um toque pessoal ao seu README.
