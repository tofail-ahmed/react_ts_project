import React, { useEffect, useRef } from 'react'

function useRefForm() {
      const myRef = useRef<HTMLInputElement | null>(null);
      useEffect(() => {
        myRef.current?.focus();
      });
      const handleSubmit=(e:React.FormEvent)=>{
            e.preventDefault();
            console.log(myRef.current?.value)
      }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
            <input ref={myRef} type="text" name='name' className='border border-red-500' placeholder='name' />
           <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default useRefForm