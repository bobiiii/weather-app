import { useContext } from 'react';
import { ContextPro } from './Context';

const useAuth = () => {
  return useContext(ContextPro);
};

export default useAuth;
