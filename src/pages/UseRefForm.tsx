import React, { useEffect, useRef } from 'react'
import CustomForm from '../component/CustomForm';

function useRefForm() {
      const myRef = useRef<HTMLInputElement | null>(null);
      useEffect(() => {
        myRef.current?.focus();
      });
      
  return (
    <div>
      <CustomForm ref={myRef} className='border border-green-500'></CustomForm>
    </div>
  )
}

export default useRefForm