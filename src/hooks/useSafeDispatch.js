import { useCallback, useRef, useLayoutEffect } from "react";

const useSafeDispatch = dispatch => {
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    mountedRef.current = true;

    return () => (mountedRef.current = false);
  });

  return useCallback(
    (...args) => {
      if (mountedRef.current) {
        dispatch(...args);
      }
    },
    [dispatch]
  );
};

export default useSafeDispatch;
