module.exports={
  "extends": [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: ['prettier', 'react'],
  "parserOptions": {
      "ecmaVersion": 2020,
      "ecmaFeatures": {
        jsx:true
      }
  },
    "env": {
      "es6": true
  },
  "rules": {
    "no-console": 2,
    'react/jsx-filename-extension':'off',
    "import/no-unresolved": 0,
    "react/display-name": 0,
    "import/prefer-default-export":"off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 2
      }
    ]
  }
};
