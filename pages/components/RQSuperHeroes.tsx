
import Link from 'next/link'
import React from 'react'
import { fetchSuperHero } from './CustomQueryHook'
import Navbar from './Navbar'


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
      <Navbar/>
        <h1>RQSuperHeroes</h1>
        <button onClick={refetch}>Fetch hero</button>
        {data?.data.map((user:any)=>{
          return <div key={user?.id}>
            <Link href={`/components/${user?.id}`}>
            {user?.name}
            </Link>
            
          </div>
        })}
  
  
      </>
    );
  
}

export default RQSuperHeroes