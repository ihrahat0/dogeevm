module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-restricted-imports': [
      'error',
      { paths: [{ name: 'next/image', message: 'Please use image or figure instead of next/image' }] },
    ],
    'react-hooks/exhaustive-deps': 'warn',
  },
}
