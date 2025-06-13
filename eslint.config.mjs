import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Add global ignores
  {
    ignores: [
      "node_modules/",
      ".next/",
      "dist/",
      "src/generated/", // Prisma output or others
    ],
  },
  // ✅ Base Next.js + TypeScript config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Override specific rules
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "warn", // or "off" if needed
    },
  },
];

export default eslintConfig;
