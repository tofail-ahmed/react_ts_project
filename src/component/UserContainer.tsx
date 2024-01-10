import React, { useEffect, useState } from "react";
import UserList from "./UserList";
const url = "https://jsonplaceholder.typicode.com/users";
const UserContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
//   console.log(error)
//   console.log(isLoading)
//   console.log(user)
  const getUser = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      setUser(data);
      console.log(data)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  useEffect(()=>{
      getUser()
  },[])

  return (
    <UserList isLoading={isLoading} user={user} error={error}></UserList>
  );
};

export default UserContainer;
