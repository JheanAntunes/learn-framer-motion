export type DataCard = {
  title: string
  description: string
  technology: string[]
}

export const dataCards: DataCard[] = [
  {
    title: 'E-commerce',
    description:
      'E-commerce com página de produtos, página de produto individual, página de carrinho com funções de incrementar, descrementar, remover com sicronização com o preço total.',
    technology: ['NextJs', 'TailwindCss', 'Shadcn-ui', 'framer motion']
  },
  {
    title: 'Tipografia',
    description:
      'Site inspirado em blog sobre tipografias para praticar mais a importância da tipografia na web e animações',
    technology: ['NextJs', 'TailwindCss', 'Shadcn-ui', 'framer motion']
  },
  {
    title: 'Desafio Star wars',
    description:
      'Desafios de stars wars com diversas categorias. Esse site pratiquei muito request https, Streaming e reutilização de components',
    technology: ['NextJs', 'TailwindCss', 'Shadcn-ui', 'framer motion']
  },
  {
    title: 'Storybook & Shadcn-ui',
    description:
      'Histórias dos componentes do repositorio shadcn-ui. criei as histórias de todos os componentes do shadcn-ui, adicionei tema, testes, acessibilidade, tipografia, docs, opções de input',
    technology: ['NextJs', 'TailwindCss', 'Shadcn-ui', 'Storybook']
  },
  {
    title: 'Zustand & Shadcn-ui',
    description:
      'Eu refatorei um component Mail que utiliza a library jotai para gerencimaneto de state global para Zustand e adicionei mais funcionamentos como remover email para lixeira, arquivar email.',
    technology: ['NextJs', 'TailwindCss', 'Shadcn-ui', 'Zustand']
  },
  {
    title: 'Tanstack/Query',
    description:
      'Site que solicita posts de api externa com input de pesquisa(gerenciamento pela url, debounce) e paginação.',
    technology: ['NextJs', 'TailwindCss', 'Tanstack/Query', 'NextUI']
  }
]
