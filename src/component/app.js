const WrapperFunction=(func)=>{
  return (num)=>{
    return func(num)*2
  }
}

const addOne = (num) => {
  return num + 1;
};



const addOneAndDouble=WrapperFunction(addOne)
console.log(addOneAndDouble(2));