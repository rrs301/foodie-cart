import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BusinessItem({business}) {
  return (
    <Link 
    href={'/restaurant/'+business?.slug}
    className='p-3
    hover:border rounded-xl
    hover:border-primary cursor-pointer
    hover:bg-orange-50'>
        <Image src={business.banner?.url} alt={business.name}
            width={500}
            height={130}
            className='h-[130px] rounded-xl object-cover'
        />
        <div className='mt-2'>
            <h2 className='font-bold text-lg'>{business.name}</h2>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <Image src="/star.png" alt='star'
                    width={14}
                    height={14} />
                    <label className='text-gray-400 text-sm'>4.5</label>
                    <h2 className='text-gray-400 text-sm'>{business?.restroType[0]}</h2>
                </div>
                <h2 className='text-sm text-primary'>{business.categories[0].name}</h2>
            </div>
        </div>
    </Link>
  )
}

export default BusinessItem