import ProductCard from '@/components/product/ProductCard'
import React from 'react'

const page = () => {
  return (
    <>
      <div>This is Test Products Page</div>
      <div className='grid grid-cols-3 justify-items-center'>
        <ProductCard name='Normal Coffee' price={100} />
        <ProductCard name='Hot Coffee' price={156} />
        <ProductCard name='Cold Coffee' price={174} />
      </div>
    </>
  )
}

export default page