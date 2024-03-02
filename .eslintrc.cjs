// @ts-ignore
module.exports = {
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
    'react-hooks',
    'import',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb/hooks',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',

    'unused-imports/no-unused-imports': 'warn',
    'no-plusplus': 'off',
    'global-require': 'off',
    'no-useless-return': 'off',
    'operator-linebreak': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'warn',
    'import/newline-after-import': ['error', { count: 1 }],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'function-paren-newline': 'off',

    'no-continue': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // "no-restricted-syntax": "off",
    'no-async-promise-executor': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/ban-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/no-danger': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    'symbol-description': 'off',
    'guard-for-in': 'off',
    'no-alert': 'off',
    'no-void': 'off',
    'react/no-unused-state': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    'no-promise-executor-return': 'off',
    'default-param-last': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-await-in-loop': 'off',
    'func-names': 'off',
    'react/button-has-type': 'off',
    'react/state-in-constructor': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-unstable-nested-components': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/default-param-last': 'off',

    // MY CONFIG BELOW
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'quote-props': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'no-shadow': 'off',
    // "@typescript-eslint/no-shadow": "error",
    'no-use-before-define': 'off',
    // "@typescript-eslint/no-use-before-define": ["error"],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    camelcase: 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'arrow-body-style': 'off',
    // "import/no-cycle": [
    //   "warn",
    //   {
    //     maxDepth: 2,
    //   },
    // ],
    // "no-empty": [
    //   "error",
    //   {
    //     allowEmptyCatch: true,
    //   },
    // ],
    'consistent-return': 'off',
    // "react/state-in-constructor": ["error", "never"],
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/static-property-placement': 'off',
    'newline-before-return': 'error',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-no-bind': 'warn',
    // "react/display-name": "warn",
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'unknown'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['./*.{js,ts}'] },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'default-case': ['error', { commentPattern: '^no\\sdefault' }],
    // MY CONFIG END

    // MY CONFIG NEW RULES
    'react/react-in-jsx-scope': 'off',
    'max-len': [
      'error',
      {
        code: 240,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }], // TODO: error for all
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-constant-condition': ['warn', { checkLoops: false }],
    'react/sort-comp': 'off',
    'react/no-deprecated': 'off', // нужно исследовать не сломается ли чего
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    'import/no-mutable-exports': 'off', // надо рефакторить
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    // MY CONFIG NEW RULES END

    'import/no-cycle': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/display-name': 'off',
    'no-debugger': 'warn',
  },
};
