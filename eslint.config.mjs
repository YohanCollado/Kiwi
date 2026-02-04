import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss"; // <--- Add this
import prettier from "eslint-config-prettier";     // <--- Add this

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // This combines Next.js, TypeScript, and Standard rules
  ...compat.extends("next/core-web-vitals", "next/typescript", "standard"),
  
  // This adds the Tailwind rules
  ...tailwind.configs["flat/recommended"],
  
  // This disables conflicting rules (keep this last!)
  prettier,
];

export default eslintConfig;