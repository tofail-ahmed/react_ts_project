import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

const Select = ({ children }) => {
  const [selectedOption, setselectedOption] = useState("");
  console.log(selectedOption)
  return (
    <SelectContext.Provider value={{ selectedOption, setselectedOption }}>
      <select onChange={(e)=>setselectedOption(e.target.value)}>{children}</select>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ value, children }) => {
      const {selectedOption}=useSelectContext()
      const isActive=selectedOption===value
  return <option className={`${isActive?"bg-red-200":"bg-white"}`} value={value}>{children}</option>;
};
Select.SelectOption = SelectOption;
const useSelectContext=()=>{
      const context=useContext(SelectContext)
      if(!context){
            throw new Error("Outof context")
      }
      return context
}
export default Select;
