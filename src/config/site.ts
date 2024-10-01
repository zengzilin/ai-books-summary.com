type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "AI books summary Blog",
  description:
    "An Open source  platform display the Books summary base on AI.",
  url: "https://ai-books-summary.com",
  ogImage: "https://ai-books-summary.com/og",
  links: {
    twitter: "https://twitter.com/zengzilin",
    github: "https://github.com/zengzilin",
  },
};
