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
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "smells"
    ],
    "rules": {
        "smells/no-switch": 1,
        "smells/no-complex-switch-case": 1,
        "smells/no-setinterval": 1,
        "smells/no-this-assign": 1
    }
};