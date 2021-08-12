
import React from 'react';

export interface ICardProps {

}

export const Card: React.FC<ICardProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
