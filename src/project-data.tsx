import CorporeSanoImg from "@/assets/Corpore Sano Highlight.png";
import CorporeSanoDemoGif from "@/assets/CorporeSanoDemoGif.gif";
export const projectData = [
  {
    title: "Corpore Sano",
    description: "A lightweight workout tracking web application",
    image: CorporeSanoImg,
    skills: ["React", "Firebase"],
    pageLink: "CorporeSano",
    link: {
      github: "https://github.com/julianty/corpore-sano",
      live: "https://corpore-sano-2e626.web.app/",
    },
    longDescription: `
      Corpore Sano is a lightweight workout tracking web application that 
      allows users to create and track their workouts. Users can create 
      custom exercises and routines, log their workouts, and view their 
      workout history. The application is built with React and Firebase. 
    `,
    keyFeatures: [
      "Create custom exercises and routines",
      "Log workouts and track progress",
      "View workout history",
    ],
    technologies: ["React", "Firebase"],
    code: [
      `const db = getFirestore(app);
export const FirestoreActions = {
  createWorkout: (userId: string) => {
  const newWorkoutDoc = doc(collection(db, "users", userId, "workouts"));
  return newWorkoutDoc;
  },
  updateWorkoutById: async (workoutId: string) => {...
  },
  deleteWorkoutById: async (userId:string, workoutId: string) => { ... 
  },
  (...)
}`,
    ],
    codeCommentaries: [
      `This was my first time working with the Firestore service
      from Firebase, so I followed some advice and compartmentalized the
      API calls to Firestore to another file. This allowed me to scale
      the application's features while easing the debugging process.`,
    ],
    process: `Since this was a solo project, I used a simple git repository to track changes and periodically would create branches to work on several features simultaneously.

    Project planning occured at the beginning of each day that I sat down to work on it, and at the end of a work session, I would reevaluate the tasks in the backlog in terms of their priority`,
    challenges: [
      {
        challenge: `Perhaps the most time consuming part of this project was learning how to work with a UI framework, Mantine, in this case.`,
        solution: `The best way I found to learn was to dive in and start building components. I started with the most basic components and worked my way up to more complex ones. Since I was used to building components from HTML and CSS, it took a bit of time to familiarize myself with the Mantine framework. This set me up well in my following projects since a lot of React UI frameworks share similar concepts.`,
      },
    ],
    demo: [CorporeSanoDemoGif],
    outcomes: `I began the project with the intent to replace my usual fitness tracker, but given how clunky it is, I think I will have to wait for a later iteration to switch. I am happy with the progress I made and the skills I learned, but I think I will need to spend more time on the project to make it more user-friendly and deliver on the features I planned.`,
    whatILearned: `Working on this project taught me a lot about how to structure a web application and how to work with a database. I learned how to work with a UI framework and how to build components in a more efficient way. I also learned how to compartmentalize my code to make it more readable and maintainable. If I were to start again, I would spend more time planning the project and breaking down the tasks into smaller pieces as working on it day by day made me realize the benefits of planning.`,
  },
  {
    title: "Job Pulse",
    description: "A streamlined job application tracker",
    image: "",
    skills: ["React", "PostgreSQL", "Supabase", "Next.js"],
    pageLink: "JobPulse",
    link: {
      github: "https://github.com/julianty/application-tracker/tree/main",
      live: "https://nextjs-boilerplate-swart-three-43.vercel.app/demo",
    },
    longDescription: `
      Job Pulse is a streamlined job application tracker that allows users to keep track of their job applications. Users can add, edit, and delete job applications, as well as view their application history.
      The application is built with Next.js and Supabase. 
      `,
    keyFeatures: [
      "Add, edit, and delete job applications",
      "View application history",
      "Simple and intuitive interface",
    ],
    technologies: ["React", "PostgreSQL", "Supabase", "Next.js"],
    code: [
      `
      "use client"
      import { useSession, signIn, signOut } from "next-auth/react"; 

      function Navbar() {
        ...
        return (
        ...
          <Button
          onClick={() => signIn("google")}
          className="font-bold py-2 px-4 rounded"
          >
          Sign-in
          
          </Button>
        ...)
      }
          `,
    ],
    codeCommentaries: [
      `Initially, I wrote my navbar as a server component because it used a server action to sign in a user. But because this component would be rendered on each page as part of layout.tsx, I had to refactor it to become a client component to stop each page from becoming a dynamic route.`,
    ],
    process: `My motivation for this project was to familiarize myself with Next.js and working with PostgreSQL, as I haven't worked with either up until this point.
    As such, I worked methodically from the ground up, first going through the Next.js documentation and tutorial, and then using Prisma to interact with my PostgreSQL database on Supabase. 
    Other than that, I found that my previous experience working with React and Firebase helped me to get up to speed quickly.`,
    challenges: [
      {
        challenge: `Understanding the concept of server components and client components`,
        solution: `I found that the best way to understand the difference between them was to build something and eventually hit that road block.
        Next.js's documentation was very helpful in this regard, but it was only after building a few components that I understood the differences.
        Server components are rendered on the server and are not interactive, while client components are rendered on the client and are interactive.`,
      },
    ],
    whatILearned: `Working on this project allowed me to familiarize myself with Next.js and PostgreSQL. While I didn't directly write queries, (I used prisma) planning out my schema and model relations gave me a better grasp on working with SQL databases.
    While working on this project, I tried my best to keep the conventions of folder structure and modularity, which allowed me to scale the project easily. I also learned a lot about how authentication works with auth.js, so I would say that this project has taught me quite a lot.`,
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  pageLink: string;
  link: { github: string; live: string };
  longDescription?: string;
  keyFeatures?: string[];
  technologies?: string[];
  // codeImgSrc: string[];
  code?: string[];
  codeCommentaries?: string[];
  process?: string;
  challenges?: {
    challenge: string;
    solution: string;
  }[];
  demo?: string[];
  outcomes?: string;
  whatILearned?: string;
};
