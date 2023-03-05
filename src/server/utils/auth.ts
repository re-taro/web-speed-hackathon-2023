import { redirect } from 'react-router-dom';
import { GetAuthUserQuery } from '../../client/graphql/queries';
import { apolloClient } from '../../client/utils/apollo_client';
import type { GetUserAuthQueryResponse } from '../../client/graphql/queries';
import type { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

export const withAuthorized = (fn: LoaderFunction) => async(params: LoaderFunctionArgs) => {
  const authUserResult = await apolloClient.query<GetUserAuthQueryResponse>({ query: GetAuthUserQuery });
  const authUser = authUserResult.data?.me;
  const isAuthUser = !!authUser;
  if (!isAuthUser)
    return redirect('/');

  return fn(params);
};
