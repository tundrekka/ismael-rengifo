import { PortfolioSkeleton } from '@/components/SkeletonLoader'
import React from 'react'
const loading = () => {
  return (
    <div className="container mx-auto">
      <PortfolioSkeleton />
    </div>
  )
}

export default loading