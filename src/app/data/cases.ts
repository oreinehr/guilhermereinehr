export type CaseType = {
  id: number;
  src: string;
  alt: string;
  category: "Branding" | "Motion" | "Website";
  title: string;
  description: string;
  slug: string;
};

export const cases: CaseType[] = [
  {
    id: 1,
    src: "/planeta.png",
    alt: "Planeta Atlântida",
    category: "Website",
    title: "Planeta Atlântida",
    description:
      "For over 50 years, we have been encouraging and promoting Brazilian sports. With quality, durability, comfort and cost-effectiveness, our brand caters to all",
    slug: "planeta-atlantida",
  },
  {
    id: 2,
    src: "/marinapark.png",
    alt: "Marina Park",
    category: "Website",
    title: "Marina Park",
    description: "Branding project for Alma.",
    slug: "marina-park",
  },
  {
    id: 3,
    src: "/mac.png",
    alt: "Mac",
    category: "Website",
    title: "Brazilian Footwear",
    description: "Visual Identity for a personal project",
    slug: "brazilian-footwear",
  },
  {
    id: 4,
    src: "/melissa.png",
    alt: "Melissa",
    category: "Website",
    title: "Melissa Simonett",
    description: "Motion design project.",
    slug: "melissa-simonett",
  },
  {
    id: 5,
    src: "/luci.png",
    alt: "Luciano Balestrin",
    category: "Website",
    title: "Luciano Balestrin",
    description: "Visual Identity for a personal project",
    slug: "luciano-balestrin",
  },
  {
    id: 6,
    src: "/conceito.mp4",
    alt: "Conceito",
    category: "Motion",
    title: "Conceito",
    description: "Visual Identity for a personal project",
    slug: "conceito",
  },
];
