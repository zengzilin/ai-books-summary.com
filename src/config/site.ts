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
  name: "Coding Jitsu Blog",
  description:
    "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "https://ai-checker.tools/",
  ogImage: "https://ai-checker.tools/og",
  links: {
    twitter: "https://twitter.com/zengzilin",
    github: "https://github.com/zengzilin",
  },
};
