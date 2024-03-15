module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      jest: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:sonarjs/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    rules: {
      // Custom
      'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error'] }] : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSInterfaceDeclaration TSPropertySignature[optional=true] TSUnionType:has(TSUndefinedKeyword)',
          message: 'Optional property does not need to be declared also as `undefined`! [EsLint custom rule]'
        },
        // Enable later on when we have a slot for refactoring
        // {
        //   selector: 'TSInterfaceDeclaration TSPropertySignature:not([optional=true]) TSUnionType > TSUndefinedKeyword',
        //   message: 'Use an optional prop instead! [Custom rule]'
        // },
        {
          selector:
            'FunctionDeclaration > Identifier:not([optional=true]).params > TSTypeAnnotation > TSUnionType:has(TSUndefinedKeyword)',
          message: 'Use an optional prop instead! [Custom rule]'
        },
        {
          selector:
            'FunctionDeclaration > Identifier[optional=true].params > TSTypeAnnotation > TSUnionType:has(TSUndefinedKeyword)',
          message: 'Optional property does not need to be declared also as `undefined`! [EsLint custom rule]'
        }
      ],
      // // SonarQube
      // 'sonarjs/no-unused-collection': 'off',
      // 'sonarjs/cognitive-complexity': 'off',
      // 'sonarjs/no-nested-template-literals': 'off',
      // 'sonarjs/no-duplicate-string': ['error', 5],
      // Eslint & Prettier
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off',
      camelcase: 'error',
      'spaced-comment': 'error',
      quotes: ['error', 'single'],
      'no-duplicate-imports': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Fail if a variable is unused, but you can still use the _ syntax to pass this - eg. {_unused, a, b}
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {}
      }
    },
    overrides: [
      {
        // TODO: Format the mocked files to .mock.ts and remove local eslint-disable comments
        files: ['src/mocks/**/*', 'src/**/__tests__/mocks/*'],
        rules: {
          camelcase: 'off',
          'sonarjs/no-duplicate-string': 'off'
        }
      },
      {
        // TODO: Format the mocked files to .mock.ts and remove local eslint-disable comments
        files: ['src/**/*.spec.ts'],
        rules: {
          'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error', 'info'] }] : 'off'
        }
      }
    ]
  };
  