import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useApiQuery = (endpoint: string) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `https://menu-api-ten.vercel.app/${endpoint}`
        );
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching ${endpoint}: ${error}`);
      }
    },
  });

  return { isLoading, error, data };
};

export default useApiQuery;
