import React from 'react';

export interface ILegendContext {

}

export const LegendContext = React.createContext<ILegendContext>({} as ILegendContext);

export const useLegendContext = () => React.useContext(LegendContext);

export const LegendProvider: React.FC = ({ children }) => {

  const contextValue = {

  }

  return (
    <LegendContext.Provider value={contextValue}>
      {children}
    </LegendContext.Provider>
  );
}