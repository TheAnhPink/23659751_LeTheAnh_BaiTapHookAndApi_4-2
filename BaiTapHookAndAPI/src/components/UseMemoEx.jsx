import React from 'react'
import { useMemo, useState } from 'react'

function UseMemoEx() {
  const [count,setCount]= useState(0);

  // Chỉ tính lại Số bình phương khi count thay đổi
  const tinhToan= useMemo(()=>{
    return count*count
  },[count])

  return (
    <div>
        {/* Bấm nút thì count tăng, tính lại bình phương */}
      <button onClick={()=>setCount(count + 1)}>Bình phương của {count} là:{tinhToan}, Bấm để tăng và tính lại</button>
    </div>
  )
}

export default UseMemoEx
