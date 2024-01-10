import React, { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const controller=new AbortController()
  //   console.log(error)
  //   console.log(isLoading)
  //   console.log(user)
  const getUser = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url,{signal:controller.signal});
      const data = await res.json();
      setIsLoading(false);
      setUser(data);
      console.log(data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
    return()=>{
      // controller.abort()
    }
  },[]);
  return { user, error, isLoading };
};

export default useUserData;
