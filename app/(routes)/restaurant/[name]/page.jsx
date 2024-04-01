"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Intro from '../_components/Intro';

import RestroTabs from '../_components/RestroTabs';

function RestaurantDetails() {

    const param=usePathname();
    const [restaurant,setRestaurant]=useState([]);
    useEffect(()=>{
        GetRestaurantDetail(param.split("/")[2])
    },[])
    const GetRestaurantDetail=(restroSlug)=>{
        GlobalApi.GetBusinessDetail(restroSlug).then(resp=>{
            console.log(resp)
            setRestaurant(resp.restaurant);
        })
    }
  return (
    <div>
        <Intro restaurant={restaurant} />
        <RestroTabs restaurant={restaurant}/>
    </div>
  )
}

export default RestaurantDetails