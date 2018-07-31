# Template para Projetos AngularJS

## Início
Antes de tudo vocês precisam instalar o [Node JS](https://nodejs.org/en/). O primeiro [vocês precisam entrar no site](https://nodejs.org/en/) e baixar a última versão e instalar. Para usuários Linux e Mac o procedimento é mais fácil usando apt-get ou Brew.

Agora o nosso Base está totalmente com ES6, portanto, fiquem ligados.

### Opcional (recomendado)
Vale a pena instalar o Yarn também. Para instalar é só rodar o comando abaixo:

```
npm install -g yarn
```

Depois que o Node JS estiver instalado, rode o comando abaixo:

```
npm install -g webpack karma-cli
```

Caso tenha o Yarn:

```
yarn add -g webpack karma-cli
```

Feito isso o NPM, Karma e CSScomb estarão prontos para uso. Para mais detalhes sobre esses comandos, deem uma olhada no [Wiki]

Depois disso faça o clone do projeto:

## Nome do Projeto
Percebam que o package.json possui um nó chamado name com o valor "name". Altere esse nome para o projeto que vocês criarem.

Deem um `Replace All` pelo termo `MUDAR.NOME.DO.MODULO` e altere pelo módulo que for criar. [**NÃO SE ESQUEÇA DOS NOSSOS PADRÕES**]

## Constantes
Por ser um template, este projeto contém algumas constantes que precisam ser modificadas.

Confira a lista e modifique as constantes de acordo com as necessidades do seu projeto:

* Buscar todas as ocorrências de '@todo' e substituir por valores válidos

As constantes de URL da API do Cubo e do código de Autorização já está configurado no Webpack para cada ambiente e adicionado no `app.constants`, não se preocupe quanto a isso.

## Instalação
Depois de fazer o clone, copie o conteúdo e cole numa pasta diferente. Crie o repositório no TFS e depois commite tudo. Após isso, rode o comando a seguir no cmd, Gitbash ou Terminal:

```
npm ou yarn install
```

Ou

```
yarn install
```

Isso fará com que as dependências mínimas sejam instaladas. Cada projeto pode ter uma dependência específica que pode ser instalada pelo npm, isso vai depender do projeto e suas versões.


## Webpack
O Webpack estará disponível após a instalação. Nele conterá um start default para o projeto, com isso, os projetos em Angular não dependerão mais do Visual Studio, podendo rodar tanto em Linux quanto em Mac. Só ficará dependente das API's backend, como o Cubo e afins.

### Configurações
A pasta `webpack/` contém todas as configurações de Webpack para cada ambiente e para os testes. O arquivo `webpack.config.js` faz toda a parte em comum à todos os ambientes. Existem algumas particularidades para cada config do Webpack, por exemplo, no do Karma nós adicionamos um NODE_ENV de teste. Mais abaixo explicaremos o porquê.

### Pontos importantes
Antes usávamos o Gulp como automatizador e afins. Migramos para o Webpack para nos mantermos atualizados, tecnologias novas. Esqueçam toda a parte de start de projeto com o Gulp, esqueçam também com o Webpack. **Foquem sempre no NPM/Yarn**, eles sempre apontarão para o automatizador/bundler, assim não dará erro ao tentar buildar ou startar algum projeto.

### Startando o projeto em diferentes ambientes
Rode algum dos comandos abaixo para startar no ambiente que desejar:

```
npm ou yarn start
npm ou yarn start:hmg
npm ou yarn start:hmgInterno
npm ou yarn start:prod
```

#### Pastas e arquivos
Diferente do Gulp, o Webpack não deixar visível os arquivos buildados quando você dá um start no projeto, portanto, não fique maluco por não achar.

### Build do projeto
Depois que o projeto estiver pronto para subir para algum ambiente, rode o build do projeto, que fará com que os arquivos CSS's e JS's fiquem todos concatenados e minificados. Rode um dos comandos abaixo:

```
npm ou yarn build:dev
npm ou yarn build:hmg
npm ou yarn build:hmgInterno
npm ou yarn build:prod
```

Claro, você não rodará os três, somente um deles. Dependendo de qual você tenha rodado, ele vai gerar uma pasta chamada **_dev/** para ambiente de desenvolvimento, **_hmg/** para ambiente de homologação , **_hmgInterno/** para ambiente de homologação interna e **_prod/** para o ambiente de produção.

Mas em si isso deixará de existir, pois a Integração Contínua já está sendo configurada em todos os projetos Front-End, com isso, cada PR para `develop` e `homolog` já vão jogar para os respectivos ambientes.

## Arquitetura do Base
A pasta `/src` possui todo Core da aplicação. Na raiz existem quatro arquivos, além do `index.html`:

* manifest.json (arquivo para configurar coisas básicas pro PWA)
* robots.txt (arquivo necessário para o Google Search Console, ferramenta de SEO)
* sitemap.xml (arquivo necessário para o Google Search Console, ferramenta de SEO)
* Web.config (arquivo de configuração do IIS)

### Web.config
Prestem atenção nesse arquivo pois é necessários para o IIS rodar corretamente o Angular e suas rotas SPA:

```
<system.web>
    <compilation debug="true" targetFramework="4.5.2"/>
    <httpRuntime targetFramework="4.5.2"/>
</system.web>
```

Esse targetFramework é fixo, porém, fiquem atentos caso mudem a versão, pois terão que alterar aqui também.

### Diretórios do projeto
Fora esses arquivos, temos as pastas para cada feature do projeto. Vamos ver a lista abaixo:

* ./src/app/ (todo o core da aplicação)
* ./src/assets/ (arquivos estáticos, fontes, imagens e afins)
* ./src/components/ (todos os componentes referentes ao projeto)
* ./src/directives/ (todas as diretivas referentes ao projeto)
* ./src/filters/ (todos os filtros referentes ao projeto)
* ./src/pages/ (todas as páginas que o projeto irá conter)
* ./src/services/ (todas as services específicas do projetos, que não estejam dentro do `wza.services`)
* ./src/styles/ (a estrutura ITCSS do projeto e os estilos de cada componente instalado viz NPM/Yarn)

Caso ainda não exista alguma dessas pastas, pode criar.

#### App
Não é sempre que você vai alterar algum arquivos dessa pasta. Um que será necessário é o `app.analytics.js`, que contém o código GTM do projeto.

Um outro arquivo que deve ser modificado com frequência é o `app.module.js`. Sempre que você instalar alguma dependência para o projeto, você precisa adicionar um import nesse arquivo chamando e adicionar no Array de modules do AngularJS.

Você também precisa adicionar no arquivo `spec.bundle.js`, que está na raiz do projeto. Ele contém todas as dependências que o Karma vai precisar para executar os testes.

#### Assets
Esse diretório contém os seguintes subdiretórios:

* fonts/
* imgs/
* pdfs/
* svgs/

Adicione os arquivos necessários de acordo com o formato dele. **NÃO SE ESQUEÇA DE REMOVER OS ARQUIVOS DESNECESSÁRIOS NESSES DIRETÓRIOS**

##### Fontes
Adicionar as fontes dentro da pasta **/src/assets/fonts** e não esquecer de colocar o font-face dentro do arquivo `/src/styles/base/_fonts.sass` seguindo o exemplo abaixo:

```css
@font-face
	font-family: "NOMEDAFONTE"
	src: url("../fonts/NOMEDAFONTE.eot") format("eot")
	src: url("../fonts/NOMEDAFONTE.woff2") format("woff2"), url("../fonts/NOMEDAFONTE.woff") format("woff"), url("../fonts/NOMEDAFONTE.svg#NOMEDAFONTE") format("svg")
```

#### Componentes, Diretivas, Filtros e Services
Existe já um padrão de componente criado, prestem muita atenção. Prestar atenção principalmente nas dependências, que são diferentes dentro de uma diretiva e num componente. É só editar o arquivo de exemplo que tem no projeto e alterar o nome.

#### Styles
A pasta `styles` for movida do assets porque no Angular 6 os estilos SASS, LESS e afins não ficam dentro de Assets, senão o CLI move os arquivos SASS para o build do projeto.

Portanto, para já acostumar vocês com isso, movemos para a raiz do projeto.

## Estrutura de componentes
Agora os componentes possuem um module `components.module.js` separado com todos os componentes. Um `require.context` do Webpack faz todo o _insert_ dos componentes dentro do module. O nome do module é `MUDAR.NOME.DO.MODULO.components` e é feito tudo em cima dele. Vamos ver a arquitetura da pasta de um componente:

* _ARQUIVO.sass (estilos do componente)
* ARQUIVO.component.js (estrutura do componente com seu controller e bindings)
* ARQUIVO.controller.js (classe, constructor e métodos do componente)
* ARQUIVO.module.js (module do componente, com a tag que o componente terá e um new da class do componente)
* ARQUIVO.spec.js (testes do componente)
* ARQUIVO.template.html (camada de conteúdo do componente)

## Estrutura de páginas
Antes as nossas páginas eram controllers e views, agora são componentes. Isso muda muita coisa, principalmente com rotas, arquivos, etc. A estrutura das páginas é quase idêntica à dos componentes, a única diferença é o arquivo de rota.

Nossa estrutura conta agora com esses arquivos:

* _ARQUIVO.sass (estilos da pagina)
* ARQUIVO.component.js (estrutura da página com seu controller)
* ARQUIVO.controller.js (classe, constructor e métodos da página)
* ARQUIVO.module.js (module da página, com a tag que o página terá e um new da class da página)
* ARQUIVO.router.js (arquivo de configuração da rota)
* ARQUIVO.spec.js (testes da página)
* ARQUIVO.template.html (camada de conteúdo da página)

E claro, as páginas ficam dentro da estrutura `src/pages/`.

### Module e Rotas
Além das pastas de cada página, na raiz da `pages/` tem dois arquivos importantes:

* pages.module.js
* pages.routes.js

O `pages.module` contém o module de todas as páginas e o import de todas as rotas. Com isso, as rotas são adicionadas pelo `.config`.

O `pages.routes` contém todos os states com as rotas das páginas. Mais abaixo tem um `How to` pra criar uma página.

### Rota de uma página
Agora o arquivo de rota não contém o `app.config` chamando a rota, ele contém um objeto de configuração da rota. Isso foi necessário para a utilização do Lazy Load que explicaremos mais abaixo.

### Como criar uma nova página
Siga os passos abaixo:

1. Copie e cole a pasta de exemplo (se for o Base Template zerado será o `foo`) e renomei para o nome que quiser (em inglês)
1. Altere o nome de todos os arquivos
1. Altere o nome referente a nova página em todos os arquivos, por exemplo: `PageFooTemplate`, `PageFooController`, etc
1. Dentro do module você precisa adicionar a tag referente à página `.component('tagDoComponente', new PageTagDoComponenteComponent())`
1. Dentro do router você precisa trocar o nome do module e o import/require do module referente à página

## Lazy Load
O Webpack nos permite fazer o Lazy Load e o Tree Shaking, que nos dá uma economia de código, com isso, performance. Mas trabalhar com Lazy Load no AngularJS é um parto, mas foi resolvido.

Mas para que isso fosse possível, alguns dos nossos padrões foram modificados. Principalmente a parte de config/route. O arquivo `.component` precisou ter um export class, diferente dos componentes no NPM, que são `const`, com isso, no module foi necessário fazer um `new`.

No controller nada foi mudado. O template agora é em HTML, diferente dos componentes do NPM. Mas fiquem tranquilos que o Webpack transforma em `$templateCache` automaticamente.

Vamos ver o router:

```js
'use strict';

export const PageFooRouter = {
    name: 'foo',
    component: 'foo',
    url: '/',
    lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

        return require.ensure([], () => {
            if (process.env.NODE_ENV == 'test') {
                import('./foo.module');
            } else {
                require('./foo.module');
            }

            $ocLazyLoad.load({ name: 'foo.page' });
        }, 'foo.page');
    }
};
```

Os três primeiros nós do objetos vocês já conhecem, a novidade é o nó `lazyLoad`. Ele chama o `$ocLazyLoad`, que é o responsável em transformar as páginas em chunks separados.

Veja que ele faz um `require` ou `import` no arquivo de module. Se for um teste, roda o import, se não, roda o require. Coisas de Webpack com Karma.

Feito o import, ele faz um load no module configurado no `foo.module.js`, no caso, `foo.page`, pois é uma página.

### Mas como tudo isso é feito?
Sempre que você criar uma página nova, terá que adicionar no arquivo `src/pages/pages.routes.js`:

```js
'use strict';

import { PageFooRouter } from './foo/foo.router';
import { PageOutraPaginaRouter } from './outra-pagina/outra-pagina.router';

/* @ngInject */
export const PagesRoutes = ($stateProvider) => {
    $stateProvider.state(PageFooRouter);
    $stateProvider.state(PageOutraPaginaRouter);
};

```

O Router é adicionado no `pages.router.js`. Dentro de cada rota tem o componente vinculado à rota, portanto, a rota será criada no Core da aplicação. Dentro do lazyLoad é criado o require, portanto, o module `foo.page` é adicionado ao pages.module automaticante por causa do `$ocLazyLoad`.

Dentro do `app/app.module.js` é executado o import do module das páginas, portanto, cada página criada é adicionada automaticamente na aplicação.

## Finalizando
Qualquer dúvida é só avisar. Qualquer melhoria é só criar um PR.

Abs.
