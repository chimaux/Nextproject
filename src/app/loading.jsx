import React from 'react'
import { Spin } from 'antd';
import "@/app/loading.scss"

const Loading = () => {
  return (
<div className='spinContainer'>   <Spin/></div>
  )
}

export default Loading