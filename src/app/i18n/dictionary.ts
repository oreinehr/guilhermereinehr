/* =========================================================
   I18N — dicionário
   Toda a copy do site vive aqui, em pt e en. O objeto `pt`
   é a fonte da verdade: `en` é tipado a partir dele, então
   esquecer uma chave na tradução vira erro de compilação.
========================================================= */

export type Lang = "pt" | "en";

export const pt = {
  nav: {
    work: "Projetos",
    workCount: (n: number) => `Projetos (0${n})`,
    contact: "Contato",
    menu: "Menu",
    close: "Fechar",
    langLabel: "Idioma",
  },

  home: {
    heading: ["Criando experiências", "digitais imersivas"],
    subheading: "com UX/UI, motion design e protótipo.",
    seeProject: "Ver projeto",
    seeAll: "Ver todos os cases",
  },

  manifesto: {
    label: "Manifesto",
    headline: ["Design é", "inspiração."],
    statement:
      "Design não está apenas em cartazes. Encontro inspiração na natureza, na arquitetura, na música, nas formas, nas texturas e nos pequenos detalhes do cotidiano. Busco observar o mundo com curiosidade e transformar tudo aquilo que me atravessa em ideias.",
    watermark: "ethos",
    signature: "Guilherme Reinehr",
  },

  clients: {
    label: "Clientes",
  },

  disciplines: {
    label: "Disciplinas",
    items: [
      {
        title: "UX / UI Design",
        detail:
          "Arquitetura de informação, fluxos e sistemas de interface pensados para escalar sem perder personalidade.",
        tools: ["Figma", "Design systems", "Prototipagem"],
      },
      {
        title: "Motion Design",
        detail:
          "Movimento como linguagem: transições que explicam hierarquia e dão peso físico à interação.",
        tools: ["After Effects", "Lottie", "Framer Motion"],
      },
      {
        title: "Direção de Arte",
        detail:
          "Composição, tipografia e imagem trabalhando como um sistema — não como camadas soltas.",
        tools: ["Tipografia", "Composição", "Curadoria"],
      },
      {
        title: "Branding & Identidade",
        detail:
          "Identidades construídas para funcionar em movimento, em tela e em escala mínima.",
        tools: ["Marca", "Sistema visual", "Guidelines"],
      },
      {
        title: "Prototipagem",
        detail:
          "Protótipos de alta fidelidade em código, para validar sensação antes de escrever produto.",
        tools: ["React", "Next.js", "Tailwind"],
      },
      {
        title: "AI & Experimentos",
        detail:
          "Uso de modelos generativos como ferramenta de direção de arte e aceleração de exploração.",
        tools: ["Generative", "Workflow", "P&D"],
      },
    ],
  },

  process: {
    label: "Processo",
    headline: ["Como eu", "trabalho"],
    stepWord: "Etapa",
    total: "/ 04",
    steps: [
      {
        n: "01",
        title: "Imersão",
        text: "Entender o negócio antes do pixel. Contexto, concorrência, restrições reais e o que já existe funcionando.",
        keys: ["Briefing", "Benchmark", "Escopo"],
      },
      {
        n: "02",
        title: "Direção",
        text: "Definir o território visual: tipografia, ritmo, referência e tom. É aqui que o projeto ganha personalidade.",
        keys: ["Moodboard", "Tipografia", "Direção de arte"],
      },
      {
        n: "03",
        title: "Construção",
        text: "Interface, sistema e movimento desenhados juntos. Cada componente nasce pensando em como vai se comportar.",
        keys: ["UI", "Sistema", "Motion"],
      },
      {
        n: "04",
        title: "Entrega",
        text: "Handoff limpo, protótipo em código e acompanhamento até estar no ar do jeito que foi desenhado.",
        keys: ["Handoff", "Protótipo", "QA visual"],
      },
    ],
  },

  playground: {
    label: "Playground",
    headline: ["Trabalhos", "selecionados."],
    intro:
      "Uma seleção de projetos entre direção de arte, motion e web. Passe o mouse para ver cada um.",
    cursor: "Ver",
    items: [
      { title: "Motion Conceito", tag: "Motion" },
      { title: "Case Planeta", tag: "Direção de arte" },
      { title: "Portfolio", tag: "Web design" },
    ],
  },

  cta: {
    label: "Contato",
    headline: ["Tem um projeto", "que merece ser", "bem feito?"],
    briefing: "Briefing rápido",
    location: "Porto Alegre, Brasil",
    cursorEmail: "E-mail",
    cursorOpen: "Abrir",
  },

  footer: {
    marquee: "Obrigado por rolar!",
    rights: "© 2026 Guilherme Reinehr — Todos os direitos reservados.",
    cubeAlt: "Cubo 3D",
  },

  work: {
    title: "Projetos",
    intro:
      "Sites, identidades e motion para marcas que precisam existir bem na tela. Cada projeto abaixo tem o processo inteiro documentado.",
    selected: (n: number) => `Projetos selecionados (${n})`,
    countLabel: (n: number) => (n === 1 ? "1 projeto" : `${n} projetos`),
    filterAll: "Tudo",
    empty: "Nada por aqui ainda.",
    seeProject: "Ver projeto",
    bannerAlt: "Banner",
  },

  contact: {
    label: "Contato",
    headline: ["Conta o que", "você quer", "construir."],
    intro:
      "Me diz o contexto, o prazo e o que precisa existir no final. Respondo pessoalmente, sem formulário automático no meio.",
    directLabel: "Direto",
    baseLabel: "Base",
    location: "Porto Alegre, Brasil",
    optional: "opcional",
    fields: {
      name: "Nome",
      email: "E-mail",
      phone: "Telefone",
      project: "Projeto",
    },
    placeholder: "O que precisa ser feito, prazo e orçamento previsto.",
    submit: "Enviar briefing",
    submitting: "Enviando",
    success: "Recebido. Respondo em breve.",
    error: "Não consegui enviar. Tente novamente ou escreva para",
  },

  caseStudy: {
    visit: "Visitar site oficial",
    overview: "Visão geral",
    challenge: "Desafio",
    result: "Resultado",
    role: "Atuação",
    year: "Ano",
    client: "Cliente",
    galleryAlt: (title: string, n: number) => `${title} — imagem ${n}`,
    videoFallback: "Seu navegador não suporta vídeo.",
    next: "Próximo case",
  },

  meta: {
    title: "Reinehr — Criando beleza",
    description:
      "Portfólio de Guilherme Reinehr — UX/UI Design, motion e direção de arte no Brasil e pelo mundo.",
  },
} as const;

/* O tipo vem do português, mas com os literais alargados: `en`
   precisa ter exatamente as mesmas chaves e o mesmo formato,
   sem ser obrigado a repetir o texto em português. */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends (...args: infer A) => infer R
        ? (...args: A) => R
        : T extends readonly (infer E)[]
          ? readonly Widen<E>[]
          : { -readonly [K in keyof T]: Widen<T[K]> };

export type Dict = Widen<typeof pt>;

export const en: Dict = {
  nav: {
    work: "Work",
    workCount: (n: number) => `Selected work (0${n})`,
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    langLabel: "Language",
  },

  home: {
    heading: ["Crafting immersive", "digital experiences"],
    subheading: "through UX/UI, motion design & prototype.",
    seeProject: "See project",
    seeAll: "See all cases",
  },

  manifesto: {
    label: "Manifesto",
    headline: ["Design is", "inspiration."],
    statement:
      "Design is not only on posters. I find inspiration in nature, in architecture, in music, in shapes, in textures and in the small details of everyday life. I try to look at the world with curiosity and turn everything that moves me into ideas.",
    watermark: "ethos",
    signature: "Guilherme Reinehr",
  },

  clients: {
    label: "Clients",
  },

  disciplines: {
    label: "Disciplines",
    items: [
      {
        title: "UX / UI Design",
        detail:
          "Information architecture, flows and interface systems built to scale without losing personality.",
        tools: ["Figma", "Design systems", "Prototyping"],
      },
      {
        title: "Motion Design",
        detail:
          "Movement as language: transitions that explain hierarchy and give physical weight to interaction.",
        tools: ["After Effects", "Lottie", "Framer Motion"],
      },
      {
        title: "Art Direction",
        detail:
          "Composition, typography and image working as one system — not as loose layers.",
        tools: ["Typography", "Composition", "Curation"],
      },
      {
        title: "Branding & Identity",
        detail:
          "Identities built to work in motion, on screen and at the smallest scale.",
        tools: ["Brand", "Visual system", "Guidelines"],
      },
      {
        title: "Prototyping",
        detail:
          "High-fidelity prototypes in code, to validate how it feels before writing product.",
        tools: ["React", "Next.js", "Tailwind"],
      },
      {
        title: "AI & Experiments",
        detail:
          "Generative models used as an art direction tool and to speed up exploration.",
        tools: ["Generative", "Workflow", "R&D"],
      },
    ],
  },

  process: {
    label: "Process",
    headline: ["How I", "work"],
    stepWord: "Step",
    total: "/ 04",
    steps: [
      {
        n: "01",
        title: "Immersion",
        text: "Understanding the business before the pixel. Context, competition, real constraints and what already works.",
        keys: ["Briefing", "Benchmark", "Scope"],
      },
      {
        n: "02",
        title: "Direction",
        text: "Defining the visual territory: typography, rhythm, reference and tone. This is where the project gains personality.",
        keys: ["Moodboard", "Typography", "Art direction"],
      },
      {
        n: "03",
        title: "Build",
        text: "Interface, system and motion designed together. Every component is born thinking about how it will behave.",
        keys: ["UI", "System", "Motion"],
      },
      {
        n: "04",
        title: "Delivery",
        text: "Clean handoff, prototype in code and follow-through until it is live exactly as designed.",
        keys: ["Handoff", "Prototype", "Visual QA"],
      },
    ],
  },

  playground: {
    label: "Playground",
    headline: ["Selected", "work."],
    intro:
      "A selection of projects across art direction, motion and web. Hover to preview each one.",
    cursor: "View",
    items: [
      { title: "Conceito Motion", tag: "Motion" },
      { title: "Planeta Case", tag: "Art direction" },
      { title: "Portfolio", tag: "Web design" },
    ],
  },

  cta: {
    label: "Contact",
    headline: ["Got a project", "that deserves to", "be done right?"],
    briefing: "Quick briefing",
    location: "Porto Alegre, Brazil",
    cursorEmail: "E-mail",
    cursorOpen: "Open",
  },

  footer: {
    marquee: "Thanks for scrolling!",
    rights: "© 2026 Guilherme Reinehr — All rights reserved.",
    cubeAlt: "3D Cube",
  },

  work: {
    title: "Work",
    intro:
      "Websites, identities and motion for brands that need to exist properly on screen. Every project below has its full process documented.",
    selected: (n: number) => `Selected work (${n})`,
    countLabel: (n: number) => (n === 1 ? "1 project" : `${n} projects`),
    filterAll: "All",
    empty: "Nothing here yet.",
    seeProject: "See project",
    bannerAlt: "Banner",
  },

  contact: {
    label: "Contact",
    headline: ["Tell me what", "you want", "to build."],
    intro:
      "Tell me the context, the deadline and what needs to exist at the end. I answer personally, with no automated form in between.",
    directLabel: "Direct",
    baseLabel: "Based in",
    location: "Porto Alegre, Brazil",
    optional: "optional",
    fields: {
      name: "Name",
      email: "E-mail",
      phone: "Phone",
      project: "Project",
    },
    placeholder: "What needs to be done, timeline and expected budget.",
    submit: "Send briefing",
    submitting: "Sending",
    success: "Got it. I'll reply shortly.",
    error: "Could not send. Try again or write to",
  },

  caseStudy: {
    visit: "Visit official website",
    overview: "Overview",
    challenge: "Challenge",
    result: "Result",
    role: "Role",
    year: "Year",
    client: "Client",
    galleryAlt: (title: string, n: number) => `${title} — image ${n}`,
    videoFallback: "Your browser does not support the video tag.",
    next: "Next case",
  },

  meta: {
    title: "Reinehr — Creating beauty",
    description:
      "Portfolio of Guilherme Reinehr — UX/UI design, motion and art direction in Brazil and worldwide.",
  },
};

export const dict: Record<Lang, Dict> = { pt, en };
