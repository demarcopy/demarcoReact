import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Loading = () => {
  return (
    <div>
    <Skeleton 
    count ={20}
    />
    </div>
  )
}
