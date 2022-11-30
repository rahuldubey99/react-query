import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

const fetchUser = () => {
    return axios.get("http://localhost:4000/users");
  };
  const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
  };

const ParallelQueries = () => {
   const {data:hero}= useQuery('super-hero',fetchUser)
   const {data:friends}=useQuery('friends',fetchFriends)
  return (
    <div>ParallelQueries</div>
  )
}

export default ParallelQueries