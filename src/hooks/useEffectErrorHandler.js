import { useEffect, useState } from "react";

const useEffectErrorHandler = (fn) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const asyncUseEffect = () => {
      return async (...props) => {
        const error = await fn(props);

        if (error) setError(error);
      };
    };

    asyncUseEffect()();
  }, []);

  return [error, setError];
};

export default useEffectErrorHandler;
