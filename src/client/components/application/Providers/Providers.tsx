import { ApolloProvider, SuspenseCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { apolloClient } from '../../../utils//apollo_client';
import { ModalStateProvider } from '../../../store/modal/context';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const suspenseCache = new SuspenseCache();

export const Providers: FC<Props> = ({ children }) => (
  <ApolloProvider client={apolloClient} suspenseCache={suspenseCache}>
    <BrowserRouter>
      <ModalStateProvider>
        {children}
      </ModalStateProvider>
    </BrowserRouter>
  </ApolloProvider>
);
