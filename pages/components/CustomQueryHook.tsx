import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = () => {
  return axios.get("http://localhost:4000/users");
};
export const fetchSuperHero = (onSuccess:any, onError:any) => {
  return useQuery("super-hero", fetchUser, {
    
    enabled: false,

    onSuccess,
    onError,
  });
};
