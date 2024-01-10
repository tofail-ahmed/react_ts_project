import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import useUserData from "../hooks/useUserData";
const UserContainer = () => {
    const {user,error,isLoading}=useUserData();

  return (
    <UserList isLoading={isLoading} user={user} error={error}></UserList>
  );
};

export default UserContainer;
