import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    languageOptions: { globals: globals.browser },
    rules: {
    'indent': ['error', 2],  // Använd två mellanslag för indentering
    'quotes': ['error', 'single'],  // Enkla citattecken
    'semi': ['error', 'always'],  // Tvinga användning av semikolon
    'no-console': 'warn',  // Varning för console.log
    'no-unused-vars': 'warn',  // Varning för oanvända variabler
  
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'], // Enforce trailing commas in multiline
    'curly': ['error', 'all'], // Require curly braces for all control statements
    'no-console': 'warn', // Warn about console.log usage
    },
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
]
