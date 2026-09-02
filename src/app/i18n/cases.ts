/* =========================================================
   I18N — conteúdo dos cases
   Cada case guarda a mídia (igual para os dois idiomas) e a
   copy em pt/en. Todos os textos e imagens que estavam
   inline nas páginas foram trazidos para cá.
========================================================= */

import type { Lang } from "./dictionary";

export type CaseCategory = "Branding" | "Motion" | "Website";

export type CaseMedia = {
  src: string;
  type: "image" | "video";
};

export type CaseCopy = {
  title: string;
  subtitle: string;
  /* Blocos de texto do corpo. `lead` é a palavra em destaque
     (laranja) que abre o parágrafo. */
  blocks: { lead: string; text: string }[];
  role: string;
  year: string;
  client: string;
};

export type CaseEntry = {
  slug: string;
  category: CaseCategory;
  cover: CaseMedia;
  hero: CaseMedia;
  gallery: CaseMedia[];
  website?: string;
  copy: Record<Lang, CaseCopy>;
};

export const caseStudies: CaseEntry[] = [
  {
    slug: "planeta",
    category: "Website",
    cover: { src: "/planeta.png", type: "image" },
    hero: { src: "/planetaatl.png", type: "image" },
    gallery: [
      { src: "/gallery/gal1.png", type: "image" },
      { src: "/pla.png", type: "image" },
      { src: "/gallery/atlantida.png", type: "image" },
      { src: "/lpla.png", type: "image" },
      { src: "/color.png", type: "image" },
    ],
    website: "https://www.planetaatlantida.com.br",
    copy: {
      pt: {
        title: "Planeta Atlântida",
        subtitle:
          "Site do maior festival do sul do Brasil, traduzido em experiência digital.",
        blocks: [
          {
            lead: "Contexto",
            text: "Desenvolver o site do Planeta Atlântida foi uma das experiências mais intensas, desafiadoras e ao mesmo tempo recompensadoras da minha trajetória como UX/UI Designer. O projeto chegou com expectativas enormes: traduzir toda a energia do maior festival do sul do Brasil em uma experiência digital fluida, moderna e imersiva.",
          },
          {
            lead: "Desafio",
            text: "Além da pressão de prazo, havia a responsabilidade de criar algo à altura do evento. A navegação precisava continuar intuitiva mesmo com um volume grande de conteúdo, e a estética tinha que conversar com um público jovem e exigente, acostumado a experiências digitais de alto impacto.",
          },
          {
            lead: "Resultado",
            text: "O resultado final não foi apenas um site funcional: virou uma experiência digital que carrega a alma do Planeta Atlântida. Um projeto grande, significativo e especial, que reforça o poder do design de dar vida a marcas icônicas e transformar a relação do público com o evento.",
          },
        ],
        role: "UX/UI Design, Direção de arte",
        year: "2025",
        client: "Grupo RBS",
      },
      en: {
        title: "Planeta Atlântida",
        subtitle:
          "The website for southern Brazil's largest festival, translated into a digital experience.",
        blocks: [
          {
            lead: "Context",
            text: "Developing the Planeta Atlântida website was one of the most intense, challenging and at the same time rewarding experiences of my journey as a UX/UI Designer. The project came with huge expectations: translating all the energy of the largest festival in southern Brazil into a fluid, modern and immersive digital experience.",
          },
          {
            lead: "Challenge",
            text: "Beyond the time pressure, there was the responsibility of creating something worthy of the event. Navigation needed to remain intuitive even with a large volume of content, and the aesthetic had to resonate with a young, demanding audience accustomed to high-impact digital experiences.",
          },
          {
            lead: "Result",
            text: "The final result was not just a functional website: it became a digital experience that carries the soul of Planeta Atlântida. A large, meaningful and special project, reinforcing the power of design to bring iconic brands to life and transform the audience's relationship with the event.",
          },
        ],
        role: "UX/UI Design, Art direction",
        year: "2025",
        client: "Grupo RBS",
      },
    },
  },

  {
    slug: "marina",
    category: "Website",
    cover: { src: "/marinapark.png", type: "image" },
    hero: { src: "/marinapark.png", type: "image" },
    gallery: [
      { src: "/mockup_marina.png", type: "image" },
      { src: "/marinaparkmockup.png", type: "image" },
      { src: "/videomarinapark.mp4", type: "video" },
    ],
    website: "https://www.marinaparkrs.com.br",
    copy: {
      pt: {
        title: "Marina Park",
        subtitle:
          "Presença digital para um parque que precisava ser tão acolhedor na tela quanto é no mundo real.",
        blocks: [
          {
            lead: "Contexto",
            text: "Desenvolver o site do Marina Park foi uma daquelas experiências que marcam uma carreira. Um projeto que chegou cheio de expectativas: transformar a atmosfera vibrante, elegante e ao mesmo tempo acolhedora do parque em uma presença digital moderna, fluida e com personalidade.",
          },
          {
            lead: "Processo",
            text: "Foram semanas intensas de pesquisa, imersão e refinamento, buscando o equilíbrio certo entre estética, performance e uma navegação realmente intuitiva. Cada detalhe, cada microinteração e cada decisão de layout tinham o mesmo objetivo: criar uma experiência digital à altura do que o Marina Park entrega no mundo real.",
          },
          {
            lead: "Resultado",
            text: "O resultado final foi um processo desafiador e profundamente recompensador. Entregar um site que não apenas informa, mas também engaja e traduz a essência do Marina Park, foi uma conquista que elevou meu olhar como designer e me fez crescer ao longo de toda a jornada.",
          },
        ],
        role: "UX/UI Design, Motion",
        year: "2025",
        client: "Marina Park Hotel",
      },
      en: {
        title: "Marina Park",
        subtitle:
          "A digital presence for a park that had to feel as welcoming on screen as it does in person.",
        blocks: [
          {
            lead: "Context",
            text: "Developing the Marina Park website was one of those experiences that truly mark a career. A project that arrived full of expectations: transforming the park's vibrant, elegant and at the same time welcoming atmosphere into a modern, fluid and personality-driven digital presence.",
          },
          {
            lead: "Process",
            text: "They were intense weeks of research, immersion and refinement, searching for the right balance between aesthetics, performance and truly intuitive navigation. Every detail, every micro-interaction and every layout decision shared the same goal: to create a digital experience that lives up to what Marina Park delivers in the real world.",
          },
          {
            lead: "Result",
            text: "The final result was a challenging yet deeply rewarding process. Delivering a website that not only informs, but also engages and translates the essence of Marina Park, was an achievement that elevated my perspective as a designer and pushed me to grow throughout the journey.",
          },
        ],
        role: "UX/UI Design, Motion",
        year: "2025",
        client: "Marina Park Hotel",
      },
    },
  },

  {
    slug: "brazilian-footwear",
    category: "Website",
    cover: { src: "/bfmockup.png", type: "image" },
    hero: { src: "/BF_moc.png", type: "image" },
    gallery: [
      { src: "/bfmockup.png", type: "image" },
      { src: "/image.png", type: "image" },
      { src: "/BF.png", type: "image" },
    ],
    website: "https://www.brazilianfootwear.com",
    copy: {
      pt: {
        title: "Brazilian Footwear",
        subtitle:
          "Presença digital institucional para a indústria calçadista brasileira no mercado internacional.",
        blocks: [
          {
            lead: "Contexto",
            text: "O site da Brazilian Footwear foi desenhado para fortalecer a presença digital global da indústria calçadista do Brasil, através de uma experiência institucional clara e alinhada a padrões internacionais.",
          },
          {
            lead: "Desafio",
            text: "O principal desafio foi organizar um volume grande de conteúdo — informações institucionais, iniciativas e notícias — em uma estrutura estratégica, acessível e fácil de navegar, que atendesse tanto o público nacional quanto o internacional. A navegação precisava continuar intuitiva mesmo com tanto conteúdo.",
          },
          {
            lead: "Resultado",
            text: "O resultado final não foi apenas um site funcional: virou uma experiência digital que carrega a essência da Brazilian Footwear. Um projeto grande, significativo e especial, que reforça o poder do design de dar vida a marcas icônicas e transformar a relação do público com a iniciativa.",
          },
        ],
        role: "Identidade & Interativo",
        year: "2024",
        client: "Brazilian Footwear",
      },
      en: {
        title: "Brazilian Footwear",
        subtitle:
          "An institutional digital presence for the Brazilian footwear industry on the international market.",
        blocks: [
          {
            lead: "Context",
            text: "The Brazilian Footwear website was designed to strengthen the global digital presence of Brazil's footwear industry through a clear, institutional user experience aligned with international standards.",
          },
          {
            lead: "Challenge",
            text: "The main challenge was organizing a large volume of content — institutional information, initiatives and news — into a strategic, accessible and easy-to-navigate structure that serves both national and international audiences. Navigation had to remain intuitive even with that much content.",
          },
          {
            lead: "Result",
            text: "The final result was not just a functional website: it became a digital experience that carries the essence of Brazilian Footwear. A large, meaningful and special project, reinforcing the power of design to bring iconic brands to life and transform the audience's relationship with the initiative.",
          },
        ],
        role: "Identity & Interactive",
        year: "2024",
        client: "Brazilian Footwear",
      },
    },
  },

  {
    slug: "conceito",
    category: "Motion",
    cover: { src: "/conceito.mp4", type: "video" },
    hero: { src: "/conceito.mp4", type: "video" },
    gallery: [
      { src: "/conceito4.png", type: "image" },
      { src: "/conceito7.png", type: "image" },
    ],
    copy: {
      pt: {
        title: "Conceito",
        subtitle:
          "Sistema de motion construído a partir de um único ponto de origem.",
        blocks: [
          {
            lead: "Origem",
            text: "O processo começa com um único ponto, uma origem que carrega intenção e potencial. A partir desse ponto mínimo, a forma se desdobra aos poucos. Ela expande, gira e se transforma, deixando o movimento guiar a evolução da forma. Cada transição é deliberada, criando continuidade e ritmo em vez de mudança abrupta.",
          },
          {
            lead: "Sistema",
            text: "Cada forma representa um princípio. Não como ícone, mas como comportamento. O sistema é construído em torno da ideia de comunicação 360°, onde o movimento reflete adaptabilidade, continuidade e presença em múltiplos pontos de contato. O motion é usado para expressar integração, não separação.",
          },
        ],
        role: "Motion Design",
        year: "2024",
        client: "Conceito",
      },
      en: {
        title: "Conceito",
        subtitle: "A motion system built out of a single point of origin.",
        blocks: [
          {
            lead: "Origin",
            text: "The process begins with a single dot, a point of origin that carries intention and potential. From this minimal starting point, the form gradually unfolds. It expands, rotates and transforms, allowing movement to guide the evolution of shape. Each transition is deliberate, creating continuity and rhythm instead of abrupt change.",
          },
          {
            lead: "System",
            text: "Each shape represents a principle. Not as an icon, but as a behavior. The system is built around the idea of 360° communication, where movement reflects adaptability, continuity and presence across multiple touchpoints. Motion is used to express integration rather than separation.",
          },
        ],
        role: "Motion Design",
        year: "2024",
        client: "Conceito",
      },
    },
  },

  {
    slug: "luciano-portfolio",
    category: "Website",
    cover: { src: "/luci.png", type: "image" },
    hero: { src: "/luciano2.png", type: "image" },
    gallery: [
      { src: "/luciano3.png", type: "image" },
      { src: "/luciano4.png", type: "image" },
    ],
    website: "https://lucianobcorrea.com/",
    copy: {
      pt: {
        title: "Portfolio Luciano",
        subtitle:
          "Um espaço digital para o trabalho de Luciano B. Corrêa respirar.",
        blocks: [
          {
            lead: "Contexto",
            text: "Trabalhar no site de portfólio do Luciano B. Corrêa foi um dos desafios mais criativos e gratificantes da minha trajetória como designer UX/UI. O objetivo era claro: criar um espaço digital que não apenas apresentasse o trabalho dele com elegância e clareza, mas também entregasse uma experiência fluida e imersiva, à altura da sua visão artística.",
          },
        ],
        role: "UX/UI Design",
        year: "2024",
        client: "Luciano B. Corrêa",
      },
      en: {
        title: "Luciano Portfolio",
        subtitle: "A digital space for Luciano B. Corrêa's work to breathe.",
        blocks: [
          {
            lead: "Context",
            text: "Working on the Luciano B. Corrêa portfolio website was one of the most creative and fulfilling challenges in my journey as a UX/UI designer. The goal was clear: to craft a digital space that not only showcases Luciano's work with elegance and clarity, but also delivers a smooth, immersive experience that resonates with his unique artistic vision.",
          },
        ],
        role: "UX/UI Design",
        year: "2024",
        client: "Luciano B. Corrêa",
      },
    },
  },
];

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
