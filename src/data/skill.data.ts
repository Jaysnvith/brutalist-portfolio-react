export const categories = [
  "language",
  "framework",
  "css-framework",
  "database",
] as const;

export type SkillCategory = typeof categories[number];

export type SkillData = {
  id: string,
  value: string,
  category: SkillCategory,
}

export const skillData: SkillData[] = [
  { id: "1", value: "python", category: "language" },
  { id: "2", value: "cpp", category: "language" },
  { id: "3", value: "csharp", category: "language" },
  { id: "4", value: "java", category: "language" },
  { id: "5", value: "html", category: "language" },
  { id: "10", value: "php", category: "language" },
  { id: "6", value: "css", category: "language" },
  { id: "7", value: "javascript", category: "language" },
  { id: "8", value: "typescript", category: "language" },
  { id: "9", value: "react", category: "framework" },
  { id: "11", value: "django", category: "framework" },
  { id: "12", value: "tailwind", category: "css-framework" },
  { id: "13", value: "bulma", category: "css-framework" },
  { id: "14", value: "bootstrap", category: "css-framework" },
  { id: "15", value: "mysql", category: "database" },
  { id: "16", value: "postgresql", category: "database" },
  { id: "17", value: "mssql", category: "database" },
];
