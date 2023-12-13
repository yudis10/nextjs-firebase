export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Friends",
      href: "/friends",
    },
  ],
  links: {
    twitter: "https://twitter.com/detikcom",
    github: "https://github.com/detikstatic-ui",
    docs: "https://detikstatic.vercel.com",
  },
}
