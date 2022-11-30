import axios from "axios";
import { useQuery } from "react-query"

const fetchUser = (id:number) => {
    return axios.get("http://localhost:4000/users/"+id);
  };
  
export const SuperHeroDetails = (heroId:any) =>{
return useQuery(['super-hero',heroId], ()=>fetchUser(heroId))
}