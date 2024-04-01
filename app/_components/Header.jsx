"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CartUpdateContext } from '../_context/CartUpdateContext'
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Cart from './Cart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {

  const {user,isSignedIn}=useUser();
  const {updateCart,setUpdateCart}=useContext(CartUpdateContext);
  const [cart,setCart]=useState([]);
  useEffect(()=>{
    console.log("Execute Me!");
    user&&GetUserCart()
  },[updateCart||user])

  const GetUserCart=()=>{
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp)
      setCart(resp?.userCarts);
    })
  }

  return (
    <div className='flex justify-between items-center
    py-6  shadow-sm '>
       <Link href={'/'}> <Image src='/logo.png' alt='logo'
        width={230}
        height={230} />
        </Link>

        <div className='hidden md:flex border p-2 rounded-lg bg-gray-100 w-96'>
            <input type='text' 
            placeholder='Search'
            className='bg-transparent w-full outline-none' />
            <Search className='text-primary' />
        </div>

      {isSignedIn?
      <div className='flex gap-3 items-center'>
       
        <Popover>
        <PopoverTrigger asChild>
        <div className='flex gap-2 items-center cursor-pointer'>
        <ShoppingCart/>
        <label className='p-1 px-3 rounded-full bg-slate-200'>
          {cart?.length}
          </label>
        </div>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <Cart cart={cart}/>
        </PopoverContent>
      </Popover>

        {/* <UserButton/> */}
       
        <DropdownMenu>
        <DropdownMenuTrigger>
        <Image src={user?.imageUrl} alt='user'
        width={35}
        height={35}
        className='rounded-full'
        />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
        <Link href={'/user'}>  <DropdownMenuItem>Profile</DropdownMenuItem></Link>
         <Link href={'/user#/my-orders'}> <DropdownMenuItem>My Orders</DropdownMenuItem></Link>
          <DropdownMenuItem> <SignOutButton>Logout</SignOutButton></DropdownMenuItem>
          
        </DropdownMenuContent>
      </DropdownMenu>

      </div>
      :<div className='flex gap-5'>
            <SignInButton mode='modal'>
             <Button variant="outline">Login</Button>
            </SignInButton>
            <SignUpButton mode='modal'>
            <Button>Sign Up</Button>
            </SignUpButton>
           

        </div>}
    </div>
  )
}

export default Header