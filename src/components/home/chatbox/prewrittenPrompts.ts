const prewrittenPrompts: prompt[] = [
  { text: "What is Julian's experience with (React)?" },
  { text: "Tell me about Julian." },
];

// Set each to active by default
prewrittenPrompts.forEach((p) => (p.active = true));

export default prewrittenPrompts;
export type prompt = {
  text: string;
  active?: boolean;
};
