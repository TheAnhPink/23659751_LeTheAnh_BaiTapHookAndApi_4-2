import React from 'react'
import { useEffect} from 'react'


function UseEffectEx() {
  useEffect(()=> {
    alert("Chào thầy ạ!");
  },[]);//[] trống nghĩa là chỉ hiện thông báo đúng 1 lần duy nhất khi mở web

  return <h3>Load lại trang để xem thông báo</h3>;
}

export default UseEffectEx
