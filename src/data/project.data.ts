export type ProjectData = {
  id: string;
  name: string;
  desc: string;
};

export const projectData: ProjectData[] = [
  {
    id: "1",
    name: "Fantasia",
    desc: "This is a 2d pixel art side scroller game made using Unity Engine. It's a single player adventure game with a focuses more on it's foreboding narrative and atmosphere. I drew some inspiration from 2D Souls-like and Metroidvania names for the gameplay, and Yoko Taro's Drakengard and NieR series for the narrative and atmosphere.",
  },
  {
    id: "2",
    name: "Wired City",
    desc: "This is a blogsite demo created with WordPress using plugins like Elementor, Yoast SEO, Disqus, Astra, etc. It’s main focus is on blogging, but with extra features added to make posting and interacting with content easier. The UI designs are heavily inspired from https://fauux.neocities.org/",
  },
  {
    id: "3",
    name: "Wired Gun Store",
    desc: "This is a demo e-commerce website built with WordPress using plugins such as Elementor, WooCommerce, and JivoChat. It’s set up as a mock online gun store with features like filters, sorting, a cart, and chat to make browsing easier. The design is heavily inspired by the Resident Evil series and includes some of its themed assets.",
  },
];
