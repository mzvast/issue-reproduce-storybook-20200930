## how to reproduce

```
yarn 

yarn run test
```
you will see error as below:

```
/Users/apple/@Projects/reproduce/src/Footer.tsx
  0:0  error  Parsing error: Cannot read file '/users/apple/@projects/reproduce/node_modules/@storybook/addon-docs/dist/frameworks/tsconfig.json'

✖ 1 problem (1 error, 0 warnings)
```

## clues

If I remove @storybook/addon-essentials, eslint works fine, but storybook is broken.