import engine from "@/assets/proj-engine.jpg";
import graph from "@/assets/proj-graph.jpg";
import ledger from "@/assets/proj-ledger.jpg";
import library from "@/assets/proj-library.jpg";

export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "engine",
    index: "01",
    title: "The Engine Within",
    tagline: "Custom C++ Game Engine & 8-Level Arcade Game",
    description:
      "A game engine written from the ground up in C++ — bespoke game loop, collision and physics resolution, and finite state machines driving eight hand-tuned arcade levels.",
    stack: ["C++", "Game Loop", "Physics", "State Machines"],
    image: engine,
  },
  {
    id: "graph",
    index: "02",
    title: "Shortest Path",
    tagline: "Autonomous Graph & Pathfinding Engine",
    description:
      "An optimisation engine exploring Dijkstra and Kruskal across weighted graphs, with priority-queue tuning and minimum spanning tree construction over large node sets.",
    stack: ["Dijkstra", "Kruskal", "Graph Theory", "C++"],
    image: graph,
  },
  {
    id: "ledger",
    index: "03",
    title: "The Ledger",
    tagline: "Core Financial & Banking System",
    description:
      "A transactional banking core built around integrity: atomic transfers, balance verification passes, and an auditable history that never loses a cent.",
    stack: ["Java", "OOP", "Transactions", "Persistence"],
    image: ledger,
  },
  {
    id: "library",
    index: "04",
    title: "Infinite Shelves",
    tagline: "Scalable Library & Academic Information System",
    description:
      "A records system for catalogues, lending cycles and academic data — designed around clean data structures and predictable scaling.",
    stack: ["Python", "Data Structures", "Systems Design"],
    image: library,
  },
];

export const skills = [
  {
    title: "Systems & Languages",
    items: ["C++", "Java", "Python", "Object-Oriented Design"],
  },
  {
    title: "Algorithms",
    items: ["Data Structures", "Graph Algorithms", "Dijkstra", "Kruskal", "Complexity Analysis"],
  },
  {
    title: "AI & Foundation Models",
    items: ["Claude", "ChatGPT", "Gemini", "Prompt Engineering", "AI-Assisted Systems"],
  },
];

export const milestones = [
  {
    year: "Now",
    place: "COMSATS University",
    role: "Software Engineering — 4th Semester",
    body: "Deep in systems programming, data structures and algorithm design, building engines and information systems from first principles.",
  },
  {
    year: "Before",
    place: "Forman Christian College University",
    role: "Lahore",
    body: "Where the foundations were laid — analytical thinking, rigour, and the first pull toward engineering.",
  },
  {
    year: "Ongoing",
    place: "Foundation Models",
    role: "Self-directed study",
    body: "A sustained affinity for AI and frontier models — Claude, ChatGPT and Gemini — and how they reshape the way software is designed and written.",
  },
];

export const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "craft", label: "Craft" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];
