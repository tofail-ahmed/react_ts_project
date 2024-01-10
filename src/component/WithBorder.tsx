const WithBorder=(WrappedComponent)=>{
      return (props)=>(
            <div className="border-4 border-red-400  rounded-[400px]">
                  <WrappedComponent/>
            </div>
      )
}

export default WithBorder;