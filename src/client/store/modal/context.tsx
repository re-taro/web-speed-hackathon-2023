import { createContext, useCallback, useState } from 'react';
import type { ModalKey } from './state';

export const ModalStateContext = createContext<{
  state: ModalKey | undefined
  update: (key: ModalKey | undefined) => void
}>({
      state: undefined,
      update: () => {},
    });

export const ModalStateProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ModalKey | undefined>();
  const update = useCallback((key: ModalKey | undefined) => {
    setState(key);
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <ModalStateContext.Provider value={{ state, update }}>{children}</ModalStateContext.Provider>;
};
