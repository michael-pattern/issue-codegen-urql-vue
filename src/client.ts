import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type Mutation = {
  __typename?: 'Mutation';
  mutatePost: Array<Post>;
};


export type MutationMutatePostArgs = {
  data: PostDataInput;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: PostType;
};

export type PostDataInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostType>;
};

export enum PostType {
  Draft = 'DRAFT',
  Private = 'PRIVATE',
  Published = 'PUBLISHED',
  Scheduled = 'SCHEDULED'
}

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
};


export type QueryPostsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type PostFragment = { __typename?: 'Post', id: string, name: string };

export type PostsVariables = Exact<{ [key: string]: never; }>;


export type Posts = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, name: string }> };

export type LastPostsVariables = Exact<{
  last: Scalars['Int'];
}>;


export type LastPosts = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, name: string }> };

export type UpdatePostVariables = Exact<{
  input: PostDataInput;
}>;


export type UpdatePost = { __typename?: 'Mutation', mutatePost: Array<{ __typename?: 'Post', id: string, name: string }> };

export type UpdatePostTypeVariables = Exact<{
  id: Scalars['ID'];
  type?: InputMaybe<PostType>;
}>;


export type UpdatePostType = { __typename?: 'Mutation', mutatePost: Array<{ __typename?: 'Post', id: string, name: string }> };

export const PostFragment = /*#__PURE__*/ `
    fragment postFragment on Post {
  id
  name
}
    `;
export const PostsDocument = /*#__PURE__*/ `
    query posts {
  posts {
    ...postFragment
  }
}
    ${PostFragment}`;

export function usePosts(options: Omit<Urql.UseQueryArgs<never, PostsVariables>, 'query'> = {}) {
  return Urql.useQuery<Posts>({ query: PostsDocument, ...options });
};
export const LastPostsDocument = /*#__PURE__*/ `
    query lastPosts($last: Int!) {
  posts(take: $last) {
    ...postFragment
  }
}
    ${PostFragment}`;

export function useLastPosts(options: Omit<Urql.UseQueryArgs<never, LastPostsVariables>, 'query'> = {}) {
  return Urql.useQuery<LastPosts>({ query: LastPostsDocument, ...options });
};
export const UpdatePostDocument = /*#__PURE__*/ `
    mutation updatePost($input: PostDataInput!) {
  mutatePost(data: $input) {
    ...postFragment
  }
}
    ${PostFragment}`;

export function useUpdatePost() {
  return Urql.useMutation<UpdatePost, UpdatePostVariables>(UpdatePostDocument);
};
export const UpdatePostTypeDocument = /*#__PURE__*/ `
    mutation updatePostType($id: ID!, $type: PostType) {
  mutatePost(data: {id: $id, type: $type}) {
    ...postFragment
  }
}
    ${PostFragment}`;

export function useUpdatePostType() {
  return Urql.useMutation<UpdatePostType, UpdatePostTypeVariables>(UpdatePostTypeDocument);
};