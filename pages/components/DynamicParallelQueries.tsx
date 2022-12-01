import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUser = (id: any) => {
  return axios.get("http://localhost:4000/users" + id);
};

const DynamicParallelQueries = ({ heroId }: { heroId: any }) => {
  const ids = [1, 2];
  const queryResult = useQuery(
    ids.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchUser(id),
      };
    })
  );
  console.log(queryResult);
  return <div>DynamicParallelQueries </div>;
};

export default DynamicParallelQueries;
