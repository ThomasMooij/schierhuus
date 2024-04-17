import React, { createContext, useContext, useState, ReactNode } from 'react';

type LayoutContextType = {
  animationType: 'vertical' | 'horizontal';
  setAnimationType: React.Dispatch<React.SetStateAction<'vertical' | 'horizontal'>>;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};

type LayoutProviderProps = {
  children: ReactNode;
};

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [animationType, setAnimationType] = useState<'vertical' | 'horizontal'>('vertical');

  return (
    <LayoutContext.Provider value={{ animationType, setAnimationType }}>
      {children}
    </LayoutContext.Provider>
  );
};
