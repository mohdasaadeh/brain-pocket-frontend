import { useSelector } from "react-redux";

const useAuthHandler = ({ setError }) => {
  const user = useSelector(({ auth }) => auth);

  if (user && user === "out") {
    const error = {
      response: { data: "Please login to make this action." }
    };

    setError(error);
  }
};

export default useAuthHandler;
