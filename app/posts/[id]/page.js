'use client'
import React from 'react';
import {useParams} from 'next/navigation'
export default function PostDetail() {

  let param=useParams();
  console.log(param)
  return <>
       <h1>Post Detail: {param.id} </h1>  
  </>
}