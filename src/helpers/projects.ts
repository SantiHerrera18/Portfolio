interface IProjects {
  name: string;
  img: string;
  link: string;
  description: string;
}

export const projectsInfo: IProjects[] = [
  {
    name: "Hotelify",
    img: "/Hotelify.jpg",
    link: "https://proyecto-hoteleria.vercel.app/",
    description:
      "A platform for booking hotels, built with Next.js and styled using Tailwind CSS, featuring seamless functionality and modern design.",
  },
  {
    name: "Bytezone",
    img: "/Bytezone.jpg",
    link: "https://bytezone-flame.vercel.app/",
    description:
      "An e-commerce platform for Apple products, allowing users to create accounts and view their orders. Built with Next.js and Tailwind CSS.",
  },
  {
    name: "New Bank",
    img: "/Newbank.jpg",
    link: "https://new-bank-beta.vercel.app/",
    description:
      "A platform where users can manage appointments—view, create, or cancel them. Developed with Vite, React, MongoDB, and Express.",
  },
];
