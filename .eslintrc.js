module.exports={
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": ['prettier', 'react'],
  "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2020,
      "ecmaFeatures": {
        "jsx":true
      }
  },
  "env": {
    "es6": true
  },
  "rules": {
    "no-console": 'off',
    'quotes': 'off',
    'no-use-before-define':'off',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-unresolved": 0,
    "react/display-name": 0,
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
    }],
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
