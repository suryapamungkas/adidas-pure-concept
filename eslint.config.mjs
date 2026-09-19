import nextPlugin from "@next/eslint-plugin-next";

export default [
  nextPlugin.configs["core-web-vitals"],
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
      "skills/**",
    ],
  },
];
