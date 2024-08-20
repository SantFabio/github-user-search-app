<!-- @format -->

# Frontend Mentor - Aplicativo de busca de usuários do GitHub

![Prévia do design para o desafio de codificação do aplicativo de busca de usuários do GitHub](./preview.jpg)

## Bem-vindo! 👋

Obrigado por adquirir este desafio premium do Frontend Mentor.

Os desafios do [Frontend Mentor](https://www.frontendmentor.io) ajudam a melhorar suas habilidades de codificação construindo projetos realistas. Esses desafios premium são ótimos para o portfólio, então, sinta-se à vontade para usar o que você criar no seu portfólio para mostrar aos outros.

**Para fazer este desafio, você precisa ter um bom entendimento de HTML, CSS e JavaScript.**

## O desafio

Seu desafio é construir este aplicativo de busca de usuários do GitHub usando a [API de usuários do GitHub](https://docs.github.com/en/rest/reference/users#get-a-user) e fazê-lo se parecer o mais próximo possível do design.

Você pode usar qualquer ferramenta que quiser para ajudar a completar o desafio. Então, se você tem algo que gostaria de praticar, fique à vontade para tentar.

Seus usuários devem ser capazes de:

- Ver o layout ideal do aplicativo dependendo do tamanho da tela do dispositivo
- Ver estados de foco para todos os elementos interativos na página
- Buscar usuários do GitHub pelo nome de usuário
- Ver informações relevantes do usuário com base na busca
- Alternar entre temas claro e escuro
- **Bônus**: Ter o esquema de cores correto escolhido com base nas preferências do computador. _Dica_: Pesquise sobre `prefers-color-scheme` em CSS.

Quer apoio no desafio? [Junte-se à nossa comunidade](https://www.frontendmentor.io/community) e faça perguntas no canal **#help**.

O endpoint da API de usuários do GitHub é `https://api.github.com/users/:username`. Então, se você quiser buscar o perfil do Octocat, você poderá fazer uma requisição para `https://api.github.com/users/octocat`.

### Comportamento esperado

- No primeiro carregamento, mostrar as informações do perfil do Octocat.
- Exibir uma mensagem de erro (como mostrado no design) se nenhum usuário for encontrado ao fazer uma nova busca.
- Se um usuário do GitHub não tiver adicionado seu nome, mostrar o nome de usuário onde o nome seria exibido sem o símbolo `@` e novamente abaixo com o símbolo `@`.
- Se a biografia de um usuário do GitHub estiver vazia, mostrar o texto "Este perfil não tem biografia" com transparência adicionada (como mostrado no design). O texto lorem ipsum nos designs mostra como a biografia deve aparecer quando está presente.
- Se qualquer uma das propriedades de localização, site, twitter ou empresa estiverem vazias, mostrar o texto "Não Disponível" com transparência adicionada (como mostrado no design).
- As informações de site, twitter e empresa devem ser todos links para esses recursos. Para o link da empresa, ele deve remover o símbolo `@` e ligar à página da empresa no GitHub. Para Octocat, com `@github` sendo retornado para a empresa, isso levaria a uma URL de `https://github.com/github`.

## Onde encontrar tudo

Sua tarefa é construir o projeto com base no arquivo de design fornecido. Oferecemos versões do design tanto em Sketch quanto em Figma, então você pode escolher a ferramenta que preferir usar. Você pode baixar o arquivo de design na plataforma. **Por favor, certifique-se de não compartilhá-los com mais ninguém.** O download do design também vem com um arquivo `README.md` para ajudá-lo a começar.

Todos os recursos necessários para este projeto estão na pasta `/assets`. Os recursos já estão exportados para o tamanho de tela correto e otimizados. Algumas imagens são reutilizáveis em vários tamanhos de tela. Portanto, se você não vir uma imagem em uma pasta específica, ela estará normalmente em outra pasta para essa página.

O sistema de design no arquivo de design fornecerá mais informações sobre as várias cores, fontes e estilos usados neste projeto.

## Construindo seu projeto

Fique à vontade para usar qualquer fluxo de trabalho com o qual se sinta confortável. Abaixo está um processo sugerido, mas não sinta que precisa seguir esses passos:

1. Separe o `starter-code` do restante deste projeto e renomeie-o para algo significativo para você. Inicialize a base de código como um repositório público no [GitHub](https://github.com/). Criar um repositório tornará mais fácil compartilhar seu código com a comunidade se você precisar de ajuda. Se você não tiver certeza de como fazer isso, [dê uma lida neste recurso Try Git](https://try.github.io/). **⚠️ IMPORTANTE ⚠️: Já existem alguns arquivos `.gitignore` neste projeto. Por favor, não os remova ou altere o conteúdo dos arquivos. Se você criar um projeto totalmente novo, use os arquivos `.gitignore` fornecidos na sua nova base de código. Isso é para evitar o upload acidental dos arquivos de design para o GitHub. Com esses desafios premium, por favor, certifique-se de não compartilhar os arquivos de design em seu repositório no GitHub. Obrigado!**
2. Configure seu repositório para publicar seu código em um endereço web. Isso também será útil se você precisar de ajuda durante um desafio, pois você pode compartilhar a URL do seu projeto com a URL do repositório. Há várias maneiras de fazer isso, e nós fornecemos algumas recomendações abaixo.
3. Veja os designs para começar a planejar como você vai abordar o projeto. Esta etapa é crucial para ajudá-lo a pensar com antecedência nas classes de CSS para criar estilos reutilizáveis.
4. Antes de adicionar qualquer estilo, estruture seu conteúdo com HTML. Escrever seu HTML primeiro pode ajudar a focar sua atenção na criação de conteúdo bem estruturado.
5. Escreva os estilos base para o seu projeto, incluindo estilos gerais de conteúdo, como `font-family` e `font-size`.
6. Comece a adicionar estilos ao topo da página e vá descendo. Só avance para a próxima seção quando estiver satisfeito com a área em que está trabalhando.

## Publicando seu projeto

Como mencionado acima, há várias maneiras de hospedar seu projeto gratuitamente. Nossos hosts recomendados são:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Você pode hospedar seu site usando uma dessas soluções ou qualquer outro de nossos provedores de confiança. [Leia mais sobre nossos hosts recomendados e confiáveis](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Crie um `README.md` personalizado

Recomendamos fortemente sobrescrever este `README.md` com um personalizado. Fornecemos um modelo dentro do arquivo [`README-template.md`](./README-template.md) neste código inicial.

O modelo fornece um guia sobre o que adicionar. Um `README` personalizado ajudará a explicar seu projeto e refletir sobre seus aprendizados. Sinta-se à vontade para editar nosso modelo o quanto quiser.

Depois de adicionar suas informações ao modelo, exclua este arquivo e renomeie o arquivo `README-template.md` para `README.md`. Isso fará com que ele apareça como o arquivo README do seu repositório.

## Enviando sua solução

Envie sua solução na plataforma para que o restante da comunidade veja. Siga nosso ["Guia completo para enviar soluções"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) para obter dicas sobre como fazer isso.

Lembre-se, se você estiver procurando por feedback sobre sua solução, não se esqueça de fazer perguntas ao enviá-la. Quanto mais específicas e detalhadas forem suas perguntas, maior a chance de você obter um feedback valioso da comunidade.

**⚠️ IMPORTANTE ⚠️: Com esses desafios premium, por favor, certifique-se de não carregar os arquivos de design no GitHub ao enviá-los para a plataforma e compartilhá-los. Se você criou um projeto totalmente novo, a maneira mais fácil de fazer isso é copiar os arquivos `.gitignore` fornecidos neste projeto inicial.**

## Compartilhando sua solução

Existem vários lugares onde você pode compartilhar sua solução:

1. Compartilhe sua página de solução no canal **#finished-projects** da [comunidade](https://www.frontendmentor.io/community).
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) e mencione **@frontendmentor**, incluindo o repositório e as URLs ao vivo no tweet. Adoraríamos ver o que você construiu e ajudar a compartilhar.
3. Compartilhe sua solução em outros canais sociais como LinkedIn.
4. Blogue sobre sua experiência ao construir seu projeto. Escrever sobre seu fluxo de trabalho, escolhas técnicas e falar sobre seu código é uma ótima maneira de reforçar o que você aprendeu. Ótimas plataformas para escrever são [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), e [CodeNewbie](https://community.codenewbie.org/).

Fornecemos modelos para ajudá-lo a compartilhar sua solução assim que você a tiver enviado na plataforma. Por favor, edite-os e inclua perguntas específicas quando estiver procurando por feedback.

Quanto mais específico você for com suas perguntas, maior a probabilidade de outro membro da comunidade lhe dar um feedback.

## Tem algum feedback para nós?

Adoramos receber feedback! Estamos sempre procurando melhorar nossos desafios e nossa plataforma. Portanto, se houver algo que você gostaria de mencionar, envie um e-mail para hi[at]frontendmentor[dot]io.

\*\*Divirta-se construindo

!\*\* 🚀
