import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = () => {
  return (
    <div>
      <Skeleton count={4}/>
    </div>
  )
}

export default CardSkeleton
