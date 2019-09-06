import React from 'react';

export const TokenContext = React.createContext<
  [string | null, React.Dispatch<React.SetStateAction<string | null>>]
>([null, () => {}]);

export const TokenProvider: React.FC = ({ children }) => {
  const state = React.useState<string | null>(null);

  return (
    <TokenContext.Provider value={state}>{children}</TokenContext.Provider>
  );
};
