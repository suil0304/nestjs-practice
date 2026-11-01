import { defineConfig, globalIgnores } from "eslint/config";
import { makeTsParserOption } from "@suil0304/suil-lints/eslint/utils";
// recommended
import js from "@eslint/js";
import tslint from "typescript-eslint";
import suilLint from "@suil0304/suil-lints/eslint";
// plugins
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    globalIgnores([
        "node_modules",
        "dist",
        "./*.config.*ts"
    ]),
    {
        files: [
            "**/*.ts"
        ],
        extends: [
            js.configs.recommended,
            tslint.configs.recommended,
            suilLint.recommendedTs
        ],
        languageOptions: {
            parserOptions: makeTsParserOption(import.meta.dirname)
        },
        plugins: {
            "@stylistic": stylistic
        }
    }
]);