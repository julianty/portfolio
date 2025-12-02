export type experience = {
  title: string;
  type: string;
  company?: string;
  description?: string;
};
const experienceArray: experience[] = [
  {
    title: "College Student",
    type: "Education",
    description: `Attended UC San Diego studying Engineering Physics, which combined 
    a rigorous Physics curriculum and Electrical Engineering Classes.`,
  },
  {
    title: "Staff Research Associate",
    type: "Full-time",
    description: `Computational physics in the field of dynamical systems at UC San Diego
        Physics Department. Dr. Henry Abarbanel as an advisor`,
  },
  {
    title: "Physics Coordinator",
    type: "Full-time",
    company: "Office of Academic Support and Instructional Services",
    description: `Coordinated physics workshops for college students at UC San Diego's office
    of academic support and instructional services.`,
  },
];

export default experienceArray;
