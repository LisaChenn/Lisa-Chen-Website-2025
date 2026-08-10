export type BlogPost = {
  slug: string; // must match the folder name under routes/blog/<slug>
  title: string;
  date: string; // "YYYY-MM-DD"
  description?: string;
  tags?: string[];
  cover?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "ai-ethics",
    title: "Thoughts on AI",
    date: "2025-10-06",
    description: "Ethics and future of AI.",
    tags: ["AI", "ethics"],
    cover: "", // e.g. '/images/wtv.jpg'
  },
  {
    slug: "rlc-notes",
    title: "The Republic of Plato",
    date: "2025-10-05",
    description: "Notes on Book I",
    tags: ["ethics", "philosophy"],
  },
  {
    slug: "stock-market-crash-1929",
    title: "The Stock Market Crash of 1929 and the Great Depression",
    date: "2026-08-09",
    description: "Was the crash the cause of the Great Depression, or just a catalyst?",
    tags: ["history", "economics"],
  },
  {
    slug: "smith-marx-keynes",
    title: "Comparing Smith, Marx, and Keynes",
    date: "2026-08-09",
    description: "Three economic philosophies on markets and government intervention.",
    tags: ["economics", "philosophy"],
  },
];
