import { useMemo } from 'react';
import checkClient from './checkClient';

const useClientMemo = (callback, dependencies) => {
  useMemo(() => {
    checkClient(() => {
      callback();
    });
  }, dependencies);
};

export default useClientMemo;
