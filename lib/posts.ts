export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "how-to-plan-your-week",
    title: "How to plan your week in 10 minutes",
    date: "12 September 2026",
    readTime: "3 min read",
    excerpt: "A simple Monday routine that keeps your whole team on track.",
    content: [
      "Most teams lose time not because the work is hard, but because nobody is sure what comes first.",
      "Start your Monday by writing every task you know about. Do not sort them yet. Just get them out of your head.",
      "Next, give each task a due date. A task without a date is only a wish.",
      "Finally, share the list with your team, so everyone can see who is doing what.",
    ],
  },
  {
    slug: "small-teams-big-results",
    title: "Why small teams get big results",
    date: "3 September 2026",
    readTime: "4 min read",
    excerpt: "Fewer people, clearer goals. Here is why small teams move fast.",
    content: [
      "Small teams talk to each other every day. Decisions take minutes, not weeks.",
      "When there are fewer people, each person owns more. That makes work feel meaningful.",
      "The right tool keeps this speed. It should stay out of the way and show only what matters.",
    ],
  },
  {
    slug: "stop-forgetting-deadlines",
    title: "Three habits to stop forgetting deadlines",
    date: "20 August 2026",
    readTime: "3 min read",
    excerpt: "Forgotten deadlines are almost always a system problem, not a memory problem.",
    content: [
      "Habit one: put every deadline in one place. Two places means one gets forgotten.",
      "Habit two: set a reminder a day before, not on the day.",
      "Habit three: check your list at the end of each day. It takes two minutes and saves hours.",
    ],
  },
];