const errorHandler = (fn) => {
  return async (...props) => {
    try {
      await fn(props);
    } catch (error) {
      return error;
    }
  };
};

export default errorHandler;
