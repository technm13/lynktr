/**
 * Edit this file to make the page yours. No build step is required.
 * See README.md for all available options and icon names.
 */
window.LYNKTR_CONFIG = {
  site: {
    title: "technm",
    description: "Projects, experiments, and other links.",
    brand: "technm",
    defaultTheme: "graphite",
    enabledThemes: ["neon", "midnight", "graphite", "ocean", "dawn", "forest", "paper"],
    linkStyle: "minimal",
    footer: `© ${new Date().getFullYear()} technm`,
  },
  profile: {
    name: "",
    handle: "@technm",
    bio: "digital creator",
    avatar: "assets/technm-logo.png",
    avatarAlt: "technm logo",
    available: true,
  },
  socials: [
    { label: "GH", url: "https://github.com/technm13", icon: "github" },
    { label: "YT", url: "https://www.youtube.com/@technm13", icon: "youtube" },
    { label: "TT", url: "https://www.tiktok.com/@technm47", icon: "tiktok" },
    { label: "IG", url: "https://www.instagram.com/technm13", icon: "instagram" },
  ],
  links: [
    {
      title: "pokemon tcg collector companion app",
      description: "free standalone pwa to create collections, scan cards, create binder placeholder prints",
      url: "https://pokemon.technm.workers.dev",
      icon: "book",
      badge: "Latest",
      featured: true,
      group: "Featured",
    },
    {
      title: "blocks puzzle game",
      description: "free standalone block puzzle game",
      url: "https://bbblocks.technm.workers.dev/",
      icon: "arrow",
      group: "Projects",
    },
    {
      title: "donate",
      description: "tba",
      url: "",
      icon: "heart",
      group: "Support",
    },
  ],
};
