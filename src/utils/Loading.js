import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Loading = () => {
  return (
    <div>
    <Skeleton 
    count ={20}
    />
    </div>
  )
}


export const LoadingSpinner = () => {
  <Spinner/>
}
