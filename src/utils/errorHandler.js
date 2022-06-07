const errorHandler = (fn) => {
  return async (...props) => {
    try {
      await fn(...props);
    } catch (error) {
      throw error;
    }
  };
};

export default errorHandler;
