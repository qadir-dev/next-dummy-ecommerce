import Image from 'next/image'
import React from 'react'
import Button from '../ui/Button'

type Product = {
    name: string;
    price: number;
};

const ProductCard: React.FC<Product> = ({ name, price }) => {
    return (
        <div className='flex flex-col m-5 p-7 items-center bg-[#e0dbd2] h-auto w-auto max-w-96 rounded-4xl'>
            <div>
                <Image className='rounded-4xl' src="/image/coffee.jpg" alt="coffee" width={300} height={300} />
            </div>
            <div className='flex flex-col items-center w-full px-7'>
                <div className='flex flex-row justify-between w-full my-3'>
                    <h1 className='text-[#3E3E3E] text-xl font-bold'>{name}</h1>
                    <p className='text-[#3E3E3E] text-xl font-bold'>${price}</p>
                </div>
                <div className='flex justify-center w-full'>
                    <Button className='w-full'>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard