# E-commece Compass.uol

![Logo](https://i.ibb.co/chJPk3G/Home.png)

O site de Ecommerce para o programa de bolsa da @compass.uol composto por três telas principais: Página Inicial, Detalhes do Produto e Carrinho. O design e a funcionalidade de cada tela foi implementado conforme especificado no protótipo do Figma.

## Funcionalidades Principais🔥
### Tela de Página Inicial

1. **Lista de Produtos**: Exibir uma lista de produtos incluindo nome, preço e, em alguns casos, uma descrição de avaliação.
2. **Contador de Tempo para Ofertas Finais**: Para alguns produtos, mostrar um contador de tempo indicando quanto tempo resta para o fim da oferta.
3. **Marcadores de Oferta e Novos Produtos**: Alguns produtos serão marcados com a porcentagem de desconto como "Oferta", enquanto outros serão marcados como "Novo".
4. **Funcionalidade de Favoritos**: Os cards de produtos terão um botão para marcar produtos como favoritos.
5. **Funcionalidade de Adicionar ao Carrinho**: Os cards de produtos também incluirão um botão para adicionar o produto ao carrinho. Isso deve atualizar o estado global do sistema.
6. **Seção de Novos Produtos**: Uma seção permitindo navegação para novos produtos.
7. **Botão de Retorno**: Um botão para voltar à tela anterior.
8. **Cabeçalho e Rodapé Globais**: O site deve ter um cabeçalho e rodapé consistentes em todas as páginas.
9. **Banners Estáticos**: Os banners na página inicial serão estáticos e não terão funcionalidade interativa.
10. **Responsividade**: A tela de Página Inicial deve ser adequadamente projetada para dispositivos móveis.

### Tela de Detalhes do Produto

1. **Detalhes do Produto**: Exibir informações detalhadas sobre um produto específico, incluindo nome, preço, descrição, etc.
2. **Funcionalidade de Adicionar ao Carrinho**: Botão para adicionar o produto ao carrinho. Isso também deve atualizar o estado global do carrinho.
3. **Funcionalidade de Compra**: Opção para comprar o produto, com a capacidade de escolher a quantidade desejada.
4. **Contador de Quantidade**: Um contador que permite ajustar a quantidade de produtos a serem adicionados.

### Tela de Carrinho

1. **Informações de Compra**: Exibir os produtos selecionados, suas quantidades e preços individuais.
2. **Total de Itens e Valor Total**: Mostrar o número total de itens no carrinho e o valor total da compra.
3. **Contadores de Adicionar/Remover Produtos**: Para cada produto no carrinho, fornecer um contador que permite ajustar a quantidade.

## Link do demo 🚀

Produção: [https://ecommece-compass.vercel.app/](https://ecommece-compass.vercel.app/)

Desenvolvimento: [https://ecommece-compass.pages.dev/](https://ecommece-compass.pages.dev/)

## Rodando localmente 💻

Siga os passos abaixo para rodar o projeto em sua máquina local:

1. Clone o repositório ⬇️

```bash
git clone https://github.com/ecsistem/blog-compass
```

2. Acesse o diretório do projeto 📂

```bash
cd blog-compass
```

3. Instale as dependências usando NPM 📦

```bash
npm install
```

ou usando PNPM 📦

```bash
pnpm install
```

ou usando Yarn 📦

```bash
yarn install
```

4. Inicie o servidor local 🚀

```bash
npm run start
```

## Build 🛠️

Para fazer o build do projeto, execute o seguinte comando:

```bash
npm run build
```

## 🧱Ambiente de Desenvolvimento - Docker
Para iniciar o servidor de desenvolvimento do Vite com docker, execute o seguinte comando:

```bash
docker-compose up development
```
Isso iniciará o servidor de desenvolvimento do Vite, e você poderá acessá-lo em http://localhost:3000 no seu navegador.

## 🧱Ambiente de Produção - Docker
Para realizar o build da aplicação usando o Vite e executar o ambiente de produção com o Nginx, execute o seguinte comando:

```bash
docker-compose up production
```
Isso executará o build da aplicação usando o Vite e, em seguida, iniciará o servidor Nginx para servir os arquivos estáticos. Você poderá acessar a aplicação em http://localhost no seu navegador.

## Requisitos Técnicos

- A aplicação deve ser desenvolvida usando o framework ReactJS.
- O design e a funcionalidade devem ser implementados de acordo com o protótipo fornecido no Figma.
- O estado global da aplicação deve ser gerenciado usando ferramentas como Context API ou Redux.
- A aplicação deve ser responsiva e devidamente otimizada para dispositivos móveis.

## Autores 👤
- [@Edson Costa](https://www.github.com/ecsistem)
- [@Eduardo Kuritza](https://www.github.com/eduardokuritza)
- [@Cristopher Kovalski Saporiti](https://www.github.com/cristopherkovalski)
 

## Contato📱

Se tiver alguma dúvida ou precisar entrar em contato, você pode me encontrar em:

//Edson Costa
- E-mail: edson.costa.pb@compasso.com.br
- GitHub: [ecsistem](https://github.com/ecsistem)
- LinkedIn: [https://www.linkedin.com/in/edsoncostadev/](https://www.linkedin.com/in/edsoncostadev/)

//Eduardo Kuritza
- E-mail: eduardo.kuritza.pb@compasso.com.br
- GitHub: [eduardokuritza](https://github.com/eduardokuritza)
- LinkedIn: [https://www.linkedin.com/in/eduardokuritza/]

//Cristopher Kovalski Saporit
- E-mail: cristopher.sapori.pb@compasso.com.br
- GitHub: [Cristopher Kovalski Saporiti](https://www.github.com/cristopherkovalski)
- LinkedIn: [https://www.linkedin.com/in/cristopher-kovalski-saporiti-a09526146/]

## Suporte ✉️

Para suporte, entre em contato enviando um e-mail para edson.costa.pb@compasso.com.br,  eduardo.kuritza.pb@compasso.com.br ou cristopher.sapori.pb@compasso.com.br. Estamos à disposição para ajudar com qualquer dúvida ou problema relacionado ao projeto.