import CorporeSanoImg from "@/assets/Corpore Sano Highlight.png";
import CorporeSanoDemoGif from "@/assets/CorporeSanoDemoGif.gif";
import JobPulseImg from "@/assets/Job Pulse Highlight.png";
import WhatsForDinnerImg from "@/assets/Whats For Dinner Highlight.png";
import WhatsForDinnerAPIDemo from "@/assets/whatsfordinner_api_request_demo.mp4";
import WhatsForDinnerSoloDemo from "@/assets/whatsfordinner_solo_demo.mp4";
import WhatsForDinnerMultiDemo from "@/assets/whatsfordinner_multi_demo.mp4";
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
    demo: [
      {
        type: "gif",
        src: CorporeSanoDemoGif,
      },
    ],
    outcomes: `I began the project with the intent to replace my usual fitness tracker, but given how clunky it is, I think I will have to wait for a later iteration to switch. I am happy with the progress I made and the skills I learned, but I think I will need to spend more time on the project to make it more user-friendly and deliver on the features I planned.`,
    whatILearned: `Working on this project taught me a lot about how to structure a web application and how to work with a database. I learned how to work with a UI framework and how to build components in a more efficient way. I also learned how to compartmentalize my code to make it more readable and maintainable. If I were to start again, I would spend more time planning the project and breaking down the tasks into smaller pieces as working on it day by day made me realize the benefits of planning.`,
  },
  {
    title: "juliantyart",
    description:
      "My personal art website with a store for artwork and accepting commissions",
    image: "", // Add image import if available
    skills: ["Next.js", "PostgreSQL", "Stripe"],
    pageLink: "juliantyart",
    link: {
      github: "", // Add GitHub link if available
      live: "https://juliantyart.com",
    },
    longDescription: `
        juliantyart is my personal art website, created to expand my web presence and provide a professional platform for selling my artwork online. The project was also an opportunity to gain hands-on experience integrating Stripe as a payment system, ensuring secure and reliable transactions for both shop purchases and custom commissions. The site is built with Next.js, uses Prisma and PostgreSQL for its database, and is written in TypeScript for type safety and maintainability.
      `,
    keyFeatures: [
      "Fully functional shop for artwork",
      "Custom commissions flow for personalized art requests",
    ],
    technologies: ["Next.js", "PostgreSQL", "Stripe"],
    code: [],
    codeCommentaries: [],
    process: `The development process began by focusing on the two main features: the shop and the commissions flow. Once these core functionalities were established, I built the rest of the site around them, ensuring a cohesive user experience and robust backend integration.`,
    challenges: [
      {
        challenge:
          "Integrating Stripe for payments and writing effective tests for Next.js posed significant challenges. Integration tests were particularly difficult due to Next.js's routing and server-generated content.",
        solution:
          "I overcame these challenges by thoroughly reading Stripe's documentation, experimenting with test environments, and adapting my testing strategy to fit Next.js's architecture. This included using mocks and focusing on end-to-end flows where possible.",
      },
    ],
    demo: [],
    outcomes:
      "The project provided a professional platform for my art, streamlined the process of selling and accepting commissions, and improved my skills in payment integration and full-stack development.",
    whatILearned:
      "I learned how to integrate Stripe for secure payments and how to approach testing in a Next.js environment, especially for integration and end-to-end scenarios.",
  },
  {
    title: "Job Pulse",
    description: "A streamlined job application tracker",
    image: JobPulseImg,
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
  {
    title: "What's for Dinner",
    description: "A tool to help people decide what to have for dinner.",
    technologies: [
      "React",
      "Vercel",
      "Next.js",
      "Prisma",
      "RESTful",
      "TypeScript",
    ],
    image: WhatsForDinnerImg,
    skills: [
      "RESTful",
      "Vercel",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],
    pageLink: "WhatsForDinner",
    link: {
      github: "https://github.com/julianty/whats-for-dinner-nextjs",
      live: "https://whats-for-dinner-rouge.vercel.app/",
    },
    longDescription: `What's for Dinner was designed to help me develop my familiarity with working with REST APIs, especially Google Maps' Nearby Search and Place Search APIs. The project allows users to search for nearby places by Zip code, view detailed place information, and invite collaborators to join a session. PostgreSQL was used as the database, with Prisma serving as the ORM to simplify database interactions and ensure type safety.`,
    keyFeatures: [
      "Nearby place searching via Zip code",
      "Session management to invite collaborators",
      "Place details supported by Google Maps API",
    ],
    code: [
      `
  // /app/nearby/route.ts

  export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const { zip } = body;
      const radius = SEARCH_RADIUS;


      // 1. Check cache in DB
      const cached = await getCachedNearby(zip, Number(radius));
      if (cached && cached.data) {
        return new Response(JSON.stringify(cached.data), { status: 200 });
      }

      // 2. Geocode ZIP
      let location;
      try {
        location = await geocodeZip(zip); // Makes API call to Google's Geocoding API
      } catch (err) {
        (...)
      }
      const latitude = location.lat as number;
      const longitude = location.lng as number;

      // 3. Fetch nearby places
      let placesData, placesStatus;
      try {
        // Makes API call to Google's Nerby Search API
        const result = await fetchNearbyPlaces(latitude, longitude, radius); 
        placesData = result.placesData;
        placesStatus = result.status;
      } catch (err) {
        (...)
      }

      // 4. Save to DB only if no error in response
      if (!placesData.error && !placesData.code) {
        await saveNearbyCache(
          zip,
          Number(radius),
          placesData as PlaceDetailsResponse
        );

        // Convert places to Restaurant objects using utility function
        const restaurants = convertToRestaurantsArr(placesData);
        for (const restaurant of restaurants) {
          try {
            // And save Restaurants to Restaurant Table
            await prisma.restaurant.upsert({
              where: { id: restaurant.id },
              update: restaurant,
              create: restaurant,
            });
          } catch (dbErr) {
            (...)
          }
        }
      }
      // 5. Return array of 'places'
      return new Response(JSON.stringify(placesData), { status: placesStatus });
    } catch (err) {
    (...)
  }
}

      `,
    ],
    codeCommentaries: [
      "Since I am now working with an API that has costs/call, I made sure to cache the results and limit the searches to Zip Code rather than allowing users to search by their home address. This allows for more overlap, and fewer calls overall.",
    ],
    demo: [
      {
        type: "video",
        src: WhatsForDinnerAPIDemo,
        commentary: "Showcasing search by Geocoding API & Place Details API",
      },
      {
        type: "video",
        src: WhatsForDinnerSoloDemo,
        commentary:
          "Showcasing solo use-case: selecting items and randomly choosing",
      },
      {
        type: "video",
        src: WhatsForDinnerMultiDemo,
        commentary: "Showcasing multi-user use-case: AND-ing together choices",
      },
    ],
    outcomes: `I started the project as both a personal tool to help my partner and I decide what to have for dinner, and as a learning experience.
    I was able to practice deploying and structuring a Next.js project, and learned how to manage a RESTful API with caching and setting quotas on Google's Cloud Console.
    Overall, a resounding success.`,
    whatILearned: `I learned how to manage an app that utilizes Google's Places and Geocoding APIs with caching, structured calls.
    Gained experience with Vercel's deployment system with CI built-in, and working within their app router framework in Next.js. 
    Also, gained more experience planning out PostgreSQL table schema with Prisma.`,
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
  demo?: Demo[];
  outcomes?: string;
  whatILearned?: string;
};

type Demo = {
  type: string;
  src: string;
  commentary?: string;
};
