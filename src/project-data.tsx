import CorporeSanoImg from "@/assets/Corpore Sano Highlight.png";
import CorporeSanoDemoGif from "@/assets/CorporeSanoDemoGif.gif";
import JobPulseImg from "@/assets/Job Pulse Highlight.png";
import WhatsForDinnerImg from "@/assets/Whats For Dinner Highlight.png";
import WhatsForDinnerAPIDemo from "@/assets/whatsfordinner_api_request_demo.mp4";
import WhatsForDinnerSoloDemo from "@/assets/whatsfordinner_solo_demo.mp4";
import WhatsForDinnerMultiDemo from "@/assets/whatsfordinner_multi_demo.mp4";
import juliantyartHighlight from "@/assets/juliantyart Highlight.png";
// import projectShowcaseTemplate from "@/assets/projectShowcaseTemplate.png";
import birthdayPingHighlight from "@/assets/Birthday Ping Highlight.png";
export const projectData = [
  {
    title: "Corpore Sano",
    description:
      "Cross-platform workout tracker — React web app and React Native / Expo mobile app in a shared monorepo",
    image: CorporeSanoImg,
    skills: [
      "React",
      "React Native",
      "Expo",
      "Redux Toolkit",
      "TypeScript",
      "Firebase",
      "Jest",
    ],
    pageLink: "CorporeSano",
    link: {
      github: "https://github.com/julianty/corpore-sano",
      live: "https://corpore-sano-2e626.web.app/",
    },
    longDescription: `
      Corpore Sano is a cross-platform workout tracker built as a shared monorepo containing a React web app and a React Native / Expo mobile app. Users can create custom exercises and routines, log workouts, and view their full workout history across both platforms. State management is handled with Redux Toolkit, Firebase provides the backend and auth, and the codebase is covered by Jest tests.
    `,
    keyFeatures: [
      "Create custom exercises and routines",
      "Log workouts and track progress",
      "View workout history",
    ],
    technologies: [
      "React",
      "React Native",
      "Expo",
      "Redux Toolkit",
      "TypeScript",
      "Firebase",
      "Jest",
    ],
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
      "E-commerce platform for original art with Stripe payments, custom commissions flow, and PostgreSQL inventory",
    image: juliantyartHighlight, // Add image import if available
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
  {
    title: "birthday-ping",
    description:
      "Full-stack birthday reminder app with automated email digests, Google OAuth, and calendar import/export",
    image: birthdayPingHighlight,
    skills: ["Next.js", "MongoDB", "Resend", "GitHub Actions"],
    pageLink: "birthday-ping",
    link: {
      github: "https://github.com/julianty/birthday-ping",
      live: "https://birthday-ping.vercel.app",
    },
    longDescription: `birthday-ping is a full-stack birthday reminder app built with Next.js App Router, MongoDB, and Resend. It sends automated daily email digests triggered by a GitHub Actions cron job, supports Google OAuth via NextAuth, and lets users import and export birthdays as standard .ics calendar files compatible with Apple Calendar and Google Calendar.`,
    keyFeatures: [
      "Automated email digests via Resend",
      "Google OAuth authentication",
      "Calendar import/export",
      "Daily email digests triggered by GitHub Actions cron",
      "ICS calendar import with confidence scoring",
    ],
    technologies: [
      "Next.js",
      "MongoDB",
      "Resend",
      "GitHub Actions",
      "TypeScript",
      "NextAuth",
      "React Email",
      "Zod",
    ],
    code: [
      `function scoreEvent(event: VEvent, summary: string, description: string) {
  let score = 0;
  const warnings: string[] = [];
  const categories = (event.categories ?? []).map((c) => c.toLowerCase());

  if (isYearlyRecurring(event)) score += 2;
  if (categories.some((c) => c.includes("birthday"))) score += 3;
  if (includesBirthdayKeyword(summary)) score += 2;
  if (includesBirthdayKeyword(description)) score += 1;
  if (event.uid?.startsWith("birthday-")) score += 2;
  ...
  return { score, warnings };
}

function toConfidence(score: number): ImportedBirthdayCandidate["confidence"] {
  if (score >= 5) return "high";
  if (score >= 3) return "medium";
  return "low";
}`,
      `const pipeline = [
  { $lookup: { from: "birthdays", localField: "birthdayId",
      foreignField: "_id", as: "birthday" } },
  { $unwind: "$birthday" },
  { $match: { "birthday.month": month } },
  { $group: {
      _id: "$userId",
      subscriptions: { $push: { subscriptionId: "$_id",
          birthday: "$birthday", lastSentAt: "$lastSentAt" } },
  }},
  { $lookup: { from: "users", localField: "_id",
      foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $project: { userId: "$_id", userEmail: "$user.email",
      subscriptions: 1 } },
];`,
    ],
    codeCommentaries: [
      `Calendar apps export events in wildly inconsistent formats. Rather than requiring a specific structure, the importer assigns a weighted score across multiple signals — recurrence rules, category tags, summary keywords, and a known UID prefix — and maps the total to a confidence level. Users see a clear high/medium/low indicator instead of a binary pass/fail.`,
      `The daily email job needs to send one digest per user, not one email per birthday. A single aggregation pipeline groups all subscriptions by userId, joins both the birthday and user documents in one pass, and returns the full payload ready for Resend. This avoids N+1 queries and keeps the email-sending loop simple.`,
    ],
    challenges: [
      {
        challenge:
          "Calendar files exported from different apps (Apple Calendar, Google Calendar, Outlook) use inconsistent formats for birthday events — some omit recurrence rules, others use non-standard category labels.",
        solution:
          "Built a multi-signal confidence scoring system that weighs recurrence frequency, category tags, summary keywords, and UID prefixes independently. Ambiguous imports surface a warning rather than silently failing, and users see a confidence badge so they can review low-confidence entries before saving.",
      },
      {
        challenge:
          "Birthday emails need to go out daily on a schedule, but serverless platforms don't offer a free built-in cron trigger, and adding an external service increases operational complexity.",
        solution:
          "Used a GitHub Actions scheduled workflow (cron: '0 9 * * *') to POST to a secured internal API route. The endpoint validates a shared secret header before processing, keeping the infrastructure free and entirely within the existing GitHub repo.",
      },
    ],
    demo: [],
    outcomes: `birthday-ping is actively used — it's replaced the manual birthday-checking habit. The calendar round-trip (import from Apple Calendar, export back) works without data loss, and the confidence scoring has caught several ambiguously formatted events that a naive parser would have silently dropped.`,
    whatILearned: `This project deepened my understanding of the iCalendar spec (RFC 5545) and how loosely calendar apps actually follow it. I learned to write MongoDB aggregation pipelines for multi-collection joins, use React Email to render transactional emails server-side, and wire up GitHub Actions as a zero-cost cron trigger for a deployed Next.js app.`,
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
