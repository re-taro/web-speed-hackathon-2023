import { ApolloProvider, SuspenseCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { apolloClient } from '../../../utils//apollo_client';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const suspenseCache = new SuspenseCache();

export const Providers: FC<Props> = ({ children }) => (
  <ApolloProvider client={apolloClient} suspenseCache={suspenseCache}>
    <BrowserRouter>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </BrowserRouter>
  </ApolloProvider>
);
