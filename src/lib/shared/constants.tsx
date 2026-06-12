export interface Platform {
  name: string;
  url: URL;
}

export const platforms: Platform[] = [
  {
    name: "LinkedIn",
    url: new URL("https://www.linkedin.com/in/michele-memoli/"),
  },
  {
    name: "Github",
    url: new URL("https://github.com/mmlngl"),
  },
  {
    name: "X",
    url: new URL("https://x.com/mmlngl_"),
  },
  {
    name: "Substack",
    url: new URL("https://substack.com/@mmlngl"),
  },
  {
    name: "Medium",
    url: new URL("https://medium.com/@mmlngl"),
  },
];

export const site = {
  NAME: "Same Problems. Different Perspectives.",
  URL: "https://mmlngl.com/",
};
