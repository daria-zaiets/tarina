import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginUnicorn from 'eslint-plugin-unicorn';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  pluginReact.configs.flat.recommended,
  pluginUnicorn.configs.recommended,
  prettier,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
