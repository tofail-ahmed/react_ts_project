import React from "react";

const UserList = ({isLoading,user,error}) => {
      console.log(user)
      if(isLoading&&!error){
            return <h1>Loading...</h1>
      }
      if(error){
            return <h1>Error occured...</h1>
      }
  return (
    <div className="text-green-600  ">
      {user.map((item) => (
        <div key={item.id} className="border-2 m-4 border-green-600">
          <h2>Name:{item.name}</h2>
          <p>Email:{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
