import  { forwardRef } from 'react';
type TCustomInputProps={
      className:string;
}
const CustomForm = forwardRef<HTMLInputElement,TCustomInputProps>(({className},ref) => {
      return (
            <div>
                  <form  action="">
            <input ref={ref} type="text" name='name' className={className} placeholder='name' />
           <button type='submit'>Submit</button>
      </form>
            </div>
      );
});

export default CustomForm;