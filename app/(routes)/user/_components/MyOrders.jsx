import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function MyOrders() {

    const {user}=useUser();
    const [orderList,setOrderList]=useState([]);
    useEffect(()=>{
        user&&GetUserOrders();
    },[user])
    const GetUserOrders=()=>{
        GlobalApi.GetUserOrders(user?.primaryEmailAddress?.emailAddress).then(resp=>{
            setOrderList(resp?.orders)
      
        })
    }
  return (
    <div>
        <h2 className='font-bold text-lg'>My Orders</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {orderList.map((order,index)=>(
                <div className='p-3 border rounded-lg flex flex-col gap-3'>
                    <h2 className='font-bold'>{moment(order?.createdAt).format('DD-MMM-yyyy')}</h2>
                    <h2 className='flex text-sm justify-between'>Order Total Amount : <span>${(order.orderAmount).toFixed(2)}</span></h2>
                    <h2 className='flex text-sm justify-between'>Address : <span>{order.address},{order.zipCode}</span></h2>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                   
                            <AccordionTrigger> <h2 className='text-primary text-sm underline'>View Order Detail</h2></AccordionTrigger>
                            <AccordionContent>
                                <div className='flex flex-col gap-3'>
                                    {order?.orderDetail?.map((item,index)=>(
                                        <div className='flex justify-between'>
                                            <h2>{item.name}</h2>
                                            <h2>${item.price}</h2>
                                        </div>
                                    ))}
                                    <hr></hr>
                                    <h2 className='font-bold justify-between text-md mt-2'>Total Order Amount (Including Taxes):<span>${(order.orderAmount).toFixed(2)}</span> </h2>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>

                </div>
            ))}
        </div>
    </div>
  )
}

export default MyOrders