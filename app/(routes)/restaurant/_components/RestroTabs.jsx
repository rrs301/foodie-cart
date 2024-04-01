import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuSection from './MenuSection'
import ReviewSection from './ReviewSection'

function RestroTabs({restaurant}) {
  return (
    <Tabs defaultValue="category" className="w-full mt-10">
  <TabsList>
    <TabsTrigger value="category">Category</TabsTrigger>
    <TabsTrigger value="about">About</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>

  </TabsList>
  <TabsContent value="category">
    <MenuSection restaurant={restaurant} />
  </TabsContent>
  <TabsContent value="about">
    <>
    <h2 className='font-bold text-lg my-5'>About Me</h2>

    <h2>{restaurant?.aboutUs}</h2>
    </>
  </TabsContent>
  <TabsContent value="reviews">
    <ReviewSection restaurant={restaurant}/>
  </TabsContent>

</Tabs>

  )
}

export default RestroTabs