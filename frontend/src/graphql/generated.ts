/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: unknown; output: unknown; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createNotification: Notification;
  markAsRead: Notification;
};


export type MutationCreateNotificationArgs = {
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};


export type MutationMarkAsReadArgs = {
  id: Scalars['ID']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  notifications: Array<Notification>;
  user?: Maybe<User>;
  users: UserPaginator;
};


export type QueryNotificationsArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
  first?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  email_verified_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CreateNotificationMutationVariables = Exact<{
  userId: string | number;
  title: string;
  message: string;
}>;


export type CreateNotificationMutation = { createNotification: { id: string, title: string, message: string, read: boolean, created_at: unknown } };

export type MarkAsReadMutationVariables = Exact<{
  id: string | number;
}>;


export type MarkAsReadMutation = { markAsRead: { id: string, read: boolean } };

export type GetNotificationsQueryVariables = Exact<{
  userId: string | number;
}>;


export type GetNotificationsQuery = { notifications: Array<{ id: string, title: string, message: string, read: boolean, created_at: unknown }> };


export const CreateNotificationDocument = gql`
    mutation CreateNotification($userId: ID!, $title: String!, $message: String!) {
  createNotification(user_id: $userId, title: $title, message: $message) {
    id
    title
    message
    read
    created_at
  }
}
    `;

/**
 * __useCreateNotificationMutation__
 *
 * To run a mutation, you first call `useCreateNotificationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateNotificationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateNotificationMutation({
 *   variables: {
 *     userId: // value for 'userId'
 *     title: // value for 'title'
 *     message: // value for 'message'
 *   },
 * });
 */
export function useCreateNotificationMutation(options: VueApolloComposable.UseMutationOptions<CreateNotificationMutation, CreateNotificationMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateNotificationMutation, CreateNotificationMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateNotificationMutation, CreateNotificationMutationVariables>(CreateNotificationDocument, options);
}
export type CreateNotificationMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateNotificationMutation, CreateNotificationMutationVariables>;
export const MarkAsReadDocument = gql`
    mutation MarkAsRead($id: ID!) {
  markAsRead(id: $id) {
    id
    read
  }
}
    `;

/**
 * __useMarkAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAsReadMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useMarkAsReadMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useMarkAsReadMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useMarkAsReadMutation(options: VueApolloComposable.UseMutationOptions<MarkAsReadMutation, MarkAsReadMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<MarkAsReadMutation, MarkAsReadMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<MarkAsReadMutation, MarkAsReadMutationVariables>(MarkAsReadDocument, options);
}
export type MarkAsReadMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<MarkAsReadMutation, MarkAsReadMutationVariables>;
export const GetNotificationsDocument = gql`
    query GetNotifications($userId: ID!) {
  notifications(user_id: $userId) {
    id
    title
    message
    read
    created_at
  }
}
    `;

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a Vue component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetNotificationsQuery({
 *   userId: // value for 'userId'
 * });
 */
export function useGetNotificationsQuery(variables: GetNotificationsQueryVariables | VueCompositionApi.Ref<GetNotificationsQueryVariables> | ReactiveFunction<GetNotificationsQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetNotificationsQuery, GetNotificationsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetNotificationsQuery, GetNotificationsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetNotificationsQuery, GetNotificationsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, variables, options);
}
export function useGetNotificationsLazyQuery(variables?: GetNotificationsQueryVariables | VueCompositionApi.Ref<GetNotificationsQueryVariables> | ReactiveFunction<GetNotificationsQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetNotificationsQuery, GetNotificationsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetNotificationsQuery, GetNotificationsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetNotificationsQuery, GetNotificationsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, variables, options);
}
export type GetNotificationsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetNotificationsQuery, GetNotificationsQueryVariables>;