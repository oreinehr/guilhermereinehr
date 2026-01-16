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
    slug: "planeta",
  },
  {
    id: 2,
    src: "/marinapark.png",
    alt: "Marina Park",
    category: "Website",
    title: "Marina Park",
    description: "Branding project for Alma.",
    slug: "marina",
  },
  {
    id: 3,
    src: "/bfmockup.png",
    alt: "Mac",
    category: "Website",
    title: "Brazilian Footwear",
    description: "Visual Identity for a personal project",
    slug: "brazilian-footwear",
  },
  {
    id: 4,
    src: "/conceito.mp4",
    alt: "Mac",
    category: "Motion",
    title: "Conceito",
    description: "Motion for Conceito",
    slug: "conceito",
  },

  {
    id: 5,
    src: "/luci.png",
    alt: "Mac",
    category: "Website",
    title: "Portfolio Luciano",
    description: "",
    slug: "luciano-portfolio",
  },
]

