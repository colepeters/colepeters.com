module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
