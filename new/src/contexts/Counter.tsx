import { useState, createContext, FC } from 'react';
import { ConterContextType } from '../@types/conterContext.td';
import { ChildProps } from '../@types/common.td';

const CounterContext = createContext<ConterContextType | null>(null);

export const CounterProvider: FC<ChildProps> = ({ children }) => {
  const [counter, setCounter] = useState(10);

  const values = {
    counter,
    setCounter: (counter: number) => setCounter(counter), 
  };

  return (
    <CounterContext.Provider value={values}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContext;
