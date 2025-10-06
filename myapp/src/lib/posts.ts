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
      title: 'Thoughts on AI',
      date: '2025-10-06',
      description: 'Ethics and future of AI.',
      tags: ['AI', 'ethics'],
      cover: '' // e.g. '/images/blog/hello.jpg'
    },
    {
      slug: 'rlc-notes',
      title: 'The Republic of Plato',
      date: '2025-10-05',
      description: 'Notes on Book I',
      tags: ['ethics', 'philosophy'],
    }
  ];
  