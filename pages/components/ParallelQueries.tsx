import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const fetchUser = () => {
    return axios.get("http://localhost:4000/users");
  };
  const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
  };

const ParallelQueries = () => {
    const [data, setData] = useState('')
    const validText = ()=>{

        if(data.includes('af_sub_siteid') && data.includes('af_c_id') && data.includes('clickid') && data.includes('af_siteid')){
            console.log('ok')
        }else{
            console.log('not found')
        }

        console.log("Valid text", data, typeof data)
    }
   const {data:hero}= useQuery('super-hero',fetchUser)
   const {data:friends}=useQuery('friends',fetchFriends)
  return (
    <><div>ParallelQueries</div>
    <input type="text" value={data} onPaste={validText} onChange={(e)=>setData(e.target.value)}/></>
  )
}

export default ParallelQueries