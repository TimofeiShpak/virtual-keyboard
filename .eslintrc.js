module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "consistent-return": 0,
        "no-useless-return": 0,
        "prefer-const": 0,
        "linebreak-style": 0,
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
    },
};
