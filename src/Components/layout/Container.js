import React from 'react'

export default function Container(props) {
  return (
    <div className=' w-[60%]  overflow-y-scroll h-[100vh]'>
      {props.children}
    </div>
  )
}
