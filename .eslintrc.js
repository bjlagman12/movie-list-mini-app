module.exports = {
    // "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "comma-dangle": ["error"],
        "indent": ["error", 2],
    }
  };
  