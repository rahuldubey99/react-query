import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUser = ()=>{
  return axios.get('http://localhost:4000/users')
}

const RQSuperHeroes = () => {
  const {isLoading, data, isError, error}:{isLoading:any, data:any, isError:any, error:any} = useQuery('super-hero' , fetchUser)
  console.log(isLoading,data, isError, error?.message)
  if(isLoading){
    return <div>Loading....</div>
  }
  if(isError){
    return <h1>{error?.message}</h1>
  }
    return (
      <>
        <nav>
          {" "}
          <ul>
            <li>
              <Link href="/components/Home">Home</Link>
            </li>
            <li>
              <Link href="/components/RQSuperHeroes">RQSuperHeroes</Link>
            </li>
            <li>
              <Link href="/components/SuperHeroes">SuperHero</Link>
            </li>
          </ul>
        </nav>
        <h1>RQSuperHeroes</h1>
        {data?.data.map((user:any)=>{
          return <div key={user?.id}>
            {user?.name}
          </div>
        })}
  
  
      </>
    );
  
}

export default RQSuperHeroes