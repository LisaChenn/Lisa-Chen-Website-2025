export type BlogPost = {
    slug: string;           // must match the folder name under routes/blog/<slug>
    title: string;
    date: string;           // "YYYY-MM-DD"
    description?: string;
    tags?: string[];
    cover?: string;
  };
  
  export const posts: BlogPost[] = [
    {
      slug: 'hello-world',
      title: 'Hello, World',
      date: '2025-10-05',
      description: 'Kickoff post for my notes',
      tags: ['intro', 'updates'],
      cover: '' // e.g. '/images/blog/hello.jpg'
    },
    {
      slug: 'rlc-notes',
      title: 'Quick RLC Notes',
      date: '2025-10-05',
      description: 'Underdamped vs overdamped, quick formulas, intuition.',
      tags: ['ece', 'circuits']
    }
  ];
  