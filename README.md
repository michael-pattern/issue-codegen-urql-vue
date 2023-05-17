# Reproduction graphql-codegen/typescript-vue-urql issue

Reproduce a typing issue with `@graphql-codegen/typescript-vue-urql`

### How to test

```sh
yarn install

yarn generate # use codegen to generate src/client.ts

yarn test # use TSC to validate types
```

### Result

```
$ tsc --noEmit
 src/client.ts:113:30 - error TS2741: Property 'variables' is missing in type '{}' but required in type 'Omit<UseQueryArgs<never, Exact<{ last: number; }>>, "query">'.

 export function useLastPosts(options: Omit<Urql.UseQueryArgs<never, LastPostsVariables>, 'query'> = {}) {
                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  node_modules/@urql/core/dist/urql-core-chunk.d.ts:819:5
    819     variables: Variables;
            ~~~~~~~~~
    'variables' is declared here.


 Found 1 error in src/client.ts:113
```