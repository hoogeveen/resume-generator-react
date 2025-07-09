# Resume Generator

A React-based resume generator built with TypeScript and Vite. Create your own CV by filling out a JSON file.

## Features

- 📝 Easy-to-edit JSON data structure
- 🔍 Data validation before deployment
- 🎨 Modern, responsive design
- ⚡ Fast build with Vite
- 📱 Mobile-friendly layout

## Data Validation

The project includes a pre-release validation script that ensures your resume data is valid before deployment. The validation:

- Checks all required fields are present
- Validates email formats
- Ensures URLs are properly formatted
- Verifies date ranges are valid
- Aborts deployment if any validation errors are found

### Platform-Specific Issues

**Important**: Date validation can behave differently across platforms (macOS vs iOS). The validation script uses Zod schema validation which is consistent across all platforms. If you encounter validation failures on one platform but not another, check for:

- Invalid dates (e.g., `2020-11-31` - November only has 30 days)
- Malformed URLs
- Invalid email formats
- Missing required fields

### Running Validation

```bash
# Validate data manually
pnpm run validate

# Test validation with invalid data
pnpm run test:validate

# Build with validation (automatically runs validation first)
pnpm run build
```

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
