import { useCallback } from "react";

const useErrorHandler = (fn) => {
  return useCallback(async (...props) => {
    try {
      await fn(...props);
    } catch (error) {
      throw error;
    }
  }, [fn]);
};

export default useErrorHandler;
