import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SuperHeroDetails } from '../services/FetchHeroById'
import Navbar from './Navbar'

const RQSuperHeroe = () => {
    const router = useRouter()
    const {id} = router.query 
    console.log(id)
    const {isLoading, data, isError, error, isFetching, refetch}:{isLoading:any, data:any, isError:any, error:any,isFetching:any,refetch:any} = SuperHeroDetails(id)
    console.log(data?.data)
  if(isLoading){
    <h1>loading...</h1>
  }
  return (

    <>
   <Navbar/>
   <h1>Super hero details</h1>
   <h2>{data?.data?.name}</h2>


   </>
  )
}

export default RQSuperHeroe