export type Project = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  /** Short chips shown on the project card */
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  /** Full stack chips shown on the details page */
  stack: string[];
  description: string;
  features: string[];
  challenges: string[];
  futurePlans: string[];
};

export const projects: Project[] = [
  {
    slug: "bazardor",
    title: "BazarDor – Smart Market Price Guide",
    image: "/images/projects/bazar-dor.svg",
    imageAlt: "Illustration of a fruit basket representing the BazarDor market app",
    tags: ["Next.js", "React", "TypeScript"],
    liveUrl: "https://bazar-dor-alpha-five.vercel.app",
    repoUrl: "https://github.com/prokash4433/bazar-dor",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "REST API",
    ],
    description:
      "BazarDor is a user-friendly web app that makes everyday market price information easy to access. It shows product details, market-wise prices, average and minimum/maximum prices, and price trends so people can shop smarter. Users can explore rice, lentils, oil, vegetables, fish, meat, eggs and spices through a clean, responsive green-and-white interface.",
    features: [
      "Wide product categories: rice, lentils, oil, vegetables, fish, meat, eggs and spices",
      "Rising and falling price sections that highlight products with the biggest daily change",
      "Dynamic product listings (name, image, category, unit, price) loaded through an API",
      "Email/password registration and login, plus Google and GitHub sign-in",
      "Responsive green-and-white UI for desktop and mobile",
    ],
    challenges: [
      "Designing a clear way to show price rise, fall and no change at a glance",
      "Setting up secure authentication with email, Google and GitHub providers",
      "Keeping product data consistent between the API, database and UI",
      "Showing Bangla text and units correctly across screen sizes",
    ],
    futurePlans: [
      "Interactive price-history charts for each product",
      "Price alerts and a favourites list for users",
      "Admin panel to update market prices",
      "Compare prices across different markets and districts",
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog – Workout Library",
    image: "/images/projects/fit-log.svg",
    imageAlt: "Illustration of a stationary exercise bike representing the FitLog workout app",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://ass06-fit-log-xq08.vercel.app/",
    repoUrl: "https://github.com/prokash4433/ass06-fit-log/tree/main",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "React Context API",
      "Next.js App Router",
      "Git & GitHub",
    ],
    description:
      "FitLog is a modern, responsive workout management website that helps users discover workouts, save their favourite exercises, build a personal workout plan and track daily fitness activity. It focuses on a clean, simple experience with responsive design and reusable React components.",
    features: [
      "Browse a library of workout exercises with useful workout information",
      "Save favourite workouts and revisit them from the saved section",
      "Build a personal workout plan and manage planned exercises",
      "Dynamic Plan and Saved counters in the navbar that update with user actions",
      "Fully responsive layout for mobile, tablet, laptop and desktop",
    ],
    challenges: [
      "Keeping navbar counters in sync with saved and planned workouts across pages",
      "Managing shared workout state cleanly with React Context",
      "Designing one flexible layout that adapts across every screen size",
      "Building reusable components that stay consistent across workout views",
    ],
    futurePlans: [
      "User accounts with server-side persistence for plans and saved workouts",
      "Workout reminders and progress tracking over time",
      "Filtering and search across the workout library",
      "Charts for weekly and monthly training volume",
    ],
  },
  {
    slug: "pet-cat",
    title: "Pet-CAT – Pet Shop Landing Page",
    image: "/images/projects/pet-cat.svg",
    imageAlt: "Illustration of a ginger cat representing the Pet-CAT landing page",
    tags: ["HTML5", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://prokash4433.github.io/Tailwind-responsive-CAT/",
    repoUrl: "https://github.com/prokash4433/Tailwind-responsive-CAT",
    stack: ["HTML5", "Tailwind CSS", "Responsive Design", "Git", "GitHub"],
    description:
      "Pet-CAT is a fully responsive pet shop landing page built with HTML5 and Tailwind CSS. The project focuses on a clean, modern and user-friendly interface that works smoothly across mobile, tablet and desktop devices, with responsive navigation and flexible layouts.",
    features: [
      "Fully responsive design across mobile, tablet, laptop and desktop",
      "Mobile-friendly layout with a responsive navigation section",
      "Clean, modern and user-friendly interface",
      "Flexible layouts built with Tailwind CSS utilities",
      "Optimised spacing, typography and reusable components",
    ],
    challenges: [
      "Keeping the visual layout consistent across breakpoints without a JS framework",
      "Making the navigation usable on small screens",
      "Balancing spacing and typography purely with utility classes",
    ],
    futurePlans: [
      "Rebuild the page with React and Tailwind for reusable components",
      "Add a contact form and map for the pet shop",
      "Source product content from a CMS instead of static markup",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
