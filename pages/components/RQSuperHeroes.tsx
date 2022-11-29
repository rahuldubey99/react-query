
import Link from 'next/link'
import React from 'react'
import { fetchSuperHero } from './CustomQueryHook'


const RQSuperHeroes = () => {
  const onSuccess = ()=>{
    console.log('Perform side effect after fetching datar')
  }
  const onError = ()=>{
    console.log('Perform side effect after encountering error')
  }
  const {isLoading, data, isError, error, isFetching, refetch}:{isLoading:any, data:any, isError:any, error:any,isFetching:any,refetch:any} = fetchSuperHero(onSuccess,onError)
  console.log(isLoading,data, isError, error?.message ,isFetching)
  if(isLoading || isFetching){
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
        <button onClick={refetch}>Fetch hero</button>
        {data?.data.map((user:any)=>{
          return <div key={user?.id}>
            {user?.name}
          </div>
        })}
  
  
      </>
    );
  
}

export default RQSuperHeroes